import Geolocation from "@react-native-community/geolocation";
import React, { useEffect, useState } from "react";
import { PermissionsAndroid, Platform, StyleSheet, Text, View } from "react-native";
import MapView, { Marker, Region } from "react-native-maps";
import { PERMISSIONS, request, RESULTS } from "react-native-permissions";

const LocationTab: React.FC = () => {
    const [hasPermission, setHasPermission] = useState<boolean>(false);
    const [region, setRegion] = useState<Region | null>(null);

    const requestLocationPermission = async () => {
        try {
            if (Platform.OS === "android") {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
                );
                setHasPermission(granted === PermissionsAndroid.RESULTS.GRANTED);
            } else {
                const status = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
                setHasPermission(status === RESULTS.GRANTED);
            }
        } catch (error) {
            console.warn("Permission error:", error);
            setHasPermission(false);
        }
    };

    useEffect(() => {
        requestLocationPermission();
    }, []);

    useEffect(() => {
        let watchId: number | null = null;
        console.log("Location permission status:", hasPermission, watchId);

        if (hasPermission) {
            watchId = Geolocation.watchPosition(
                (position) => {
                    try {
                        const { latitude, longitude } = position.coords;

                        if (!latitude || !longitude) return;

                        setRegion({
                            latitude,
                            longitude,
                            latitudeDelta: 0.01,
                            longitudeDelta: 0.01,
                        });
                    } catch (err) {
                        console.warn("Map update error:", err);
                    }
                },
                (error) => console.warn("Watch error:", error),
                { enableHighAccuracy: true, distanceFilter: 10 },
            );
        }

        return () => {
            if (watchId !== null) {
                Geolocation.clearWatch(watchId);
            }
        };
    }, [hasPermission]);

    if (!hasPermission) {
        return (
            <View style={styles.center}>
                <Text>No Location Permission</Text>
                <Text>Please enable location access in your settings.</Text>
            </View>
        );
    }

    if (!region || !region.latitude || !region.longitude) {
        return (
            <View style={styles.center}>
                <Text>Fetching your location…</Text>
            </View>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <MapView
                style={StyleSheet.absoluteFill}
                region={region}
                showsUserLocation={true}
                followsUserLocation={true}
            >
                <Marker coordinate={region} title="You are here" />
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default LocationTab;