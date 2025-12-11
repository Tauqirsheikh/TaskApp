import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, PermissionsAndroid, Platform, Alert } from "react-native";
import { Camera, CameraType } from "react-native-camera-kit";

const CameraTab: React.FC = () => {
    const cameraRef = useRef<any>(null);
    const [isCameraOpen, setIsCameraOpen] = useState(false);
    const [imageUri, setImageUri] = useState<string | null>(null);

    const requestCameraPermission = async () => {
        if (Platform.OS === "android") {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA
            );
            return granted === PermissionsAndroid.RESULTS.GRANTED;
        }
        return true;
    };

    const takePhoto = async () => {
        if (!cameraRef.current) return;
        try {
            const photo = await cameraRef.current.capture();

            const uri =
                photo?.uri ||
                photo?.image ||
                photo?.imageUri ||
                photo?.path ||
                null;

            if (!uri) {
                console.warn("No valid image URI found");
                return;
            }

            setImageUri(uri.startsWith("file://") ? uri : `file://${uri}`);
            setIsCameraOpen(false);
        } catch (err) {
            console.log("Capture Error:", err);
        }
    };

    return (
        <View style={{ flex: 1, padding: 20 }}>

            {!isCameraOpen && (
                <View style={styles.previewBox}>
                    {imageUri ? (
                        <Image source={{ uri: imageUri }} style={styles.previewImage} />
                    ) : (
                        <Text>No image captured</Text>
                    )}
                </View>
            )}

            {!isCameraOpen && (
                <TouchableOpacity
                    style={styles.cameraBtn}
                    onPress={async () => {
                        const ok = await requestCameraPermission();
                        if (ok) setIsCameraOpen(true);
                        else Alert.alert("Camera permission denied");
                    }}
                >
                    <Text style={styles.btnText}>Open Camera</Text>
                </TouchableOpacity>
            )}

            {isCameraOpen && (
                <View style={{ flex: 1 }}>
                    <Camera
                        ref={cameraRef}
                        style={StyleSheet.absoluteFill}
                        cameraType={CameraType.Back}
                    />

                    <TouchableOpacity style={styles.captureBtn} onPress={takePhoto}>
                        <Text style={styles.btnText}>Capture</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};


const styles = StyleSheet.create({
    previewBox: {
        height: 300,
        width: "100%",
        borderRadius: 12,
        backgroundColor: "#eee",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        marginBottom: 20,
    },
    previewImage: {
        width: "100%",
        height: "100%",
    },
    cameraBtn: {
        backgroundColor: "#00A86B",
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 8,
        alignSelf: "center",
        marginTop: 10,
    },
    captureBtn: {
        position: "absolute",
        bottom: 40,
        alignSelf: "center",
        backgroundColor: "#00A86B",
        paddingHorizontal: 25,
        paddingVertical: 12,
        borderRadius: 40,
    },
    btnText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
    },
});

export default CameraTab;

