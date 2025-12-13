import React, { useRef, useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    PermissionsAndroid,
    Platform,
    Alert,
} from "react-native";
import { Camera, CameraType } from "react-native-camera-kit";

const CameraTab: React.FC = () => {
    const cameraRef = useRef<any>(null);
    const [isCameraOpen, setIsCameraOpen] = useState(false);
    const [imageUri, setImageUri] = useState<string | null>(null);
    const [showActions, setShowActions] = useState(false); // 🔹 NEW

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

            if (!uri) return;

            setImageUri(uri.startsWith("file://") ? uri : `file://${uri}`);
            setIsCameraOpen(false);
            setShowActions(true); // 🔹 show Retake / Done
        } catch (err) {
            console.log("Capture Error:", err);
        }
    };

    const handleRetake = () => {
        setImageUri(null);
        setShowActions(false);
        setIsCameraOpen(true);
    };

    const handleDone = () => {
        setShowActions(false);
        // imageUri remains, preview stays
    };

    return (
        <View style={{ flex: 1, padding: 20 }}>
            {/* Preview */}
            {!isCameraOpen && (
                <View style={styles.previewBox}>
                    {imageUri ? (
                        <Image source={{ uri: imageUri }} style={styles.previewImage} />
                    ) : (
                        <Text>No image captured</Text>
                    )}
                </View>
            )}

            {/* Open Camera Button */}
            {!isCameraOpen && !showActions && (
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

            {/* Retake & Done Buttons */}
            {!isCameraOpen && showActions && (
                <View style={styles.actionRow}>
                    <TouchableOpacity style={styles.retakeBtn} onPress={handleRetake}>
                        <Text style={styles.btnText}>Retake</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.doneBtn} onPress={handleDone}>
                        <Text style={styles.btnText}>Done</Text>
                    </TouchableOpacity>
                </View>
            )}

            {/* Camera View */}
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
    actionRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
    retakeBtn: {
        backgroundColor: "#FF6B6B",
        padding: 12,
        borderRadius: 8,
        flex: 1,
        marginRight: 10,
        alignItems: "center",
    },
    doneBtn: {
        backgroundColor: "#00A86B",
        padding: 12,
        borderRadius: 8,
        flex: 1,
        alignItems: "center",
    },
    btnText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
    },
});

export default CameraTab;
