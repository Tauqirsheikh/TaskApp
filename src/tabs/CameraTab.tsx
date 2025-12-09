import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Camera, CameraType } from "react-native-camera-kit";

const CameraTab: React.FC = () => {
    const cameraRef = useRef<any>(null);
    const [imageUri, setImageUri] = useState<string | null>(null);

    const takePhoto = async () => {
        if (!cameraRef.current) return;
        try {
            const photo = await cameraRef.current.capture();
            setImageUri(photo.uri);
            console.log("📸 Photo captured:", photo.uri);
        } catch (error) {
            console.warn("Photo capture error:", error);
        }
    };

    return (
        <View style={{ flex: 1 }}>
            {imageUri ? (
                <Image source={{ uri: imageUri }} style={StyleSheet.absoluteFill} />
            ) : (
                <Camera
                    ref={cameraRef}
                    style={StyleSheet.absoluteFill}
                    cameraType={CameraType.Back}
                    flashMode="auto"
                    focusMode="on"
                    zoomMode="on"
                />
            )}

            <View style={styles.controls}>
                {!imageUri && (
                    <TouchableOpacity style={styles.button} onPress={takePhoto}>
                        <Text style={styles.buttonText}>Take Photo</Text>
                    </TouchableOpacity>
                )}

                {imageUri && (
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: "#555" }]}
                        onPress={() => setImageUri(null)}
                    >
                        <Text style={styles.buttonText}>Retake</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    controls: {
        position: "absolute",
        width: "100%",
        bottom: 40,
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    button: {
        backgroundColor: "#007AFF",
        paddingHorizontal: 22,
        paddingVertical: 12,
        borderRadius: 25,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default CameraTab;
