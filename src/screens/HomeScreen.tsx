/* eslint-disable react-native/no-inline-styles */
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import HomeTab from "../tabs/HomeTab";
import CameraTab from "../tabs/CameraTab";
import LocationTab from "../tabs/LocationTab";

export default function HomeScreen({ navigation }: any) {
    const [activeTab, setActiveTab] = useState("Home");

    // const handleLogout = () => navigation.replace("Login");

    const renderTabContent = () => {
        switch (activeTab) {
            case "Home":
                return <HomeTab />;
            case "Camera":
                return <CameraTab />;
            case "Location":
                return <LocationTab />;
            default:
                return <HomeTab />;
        }
    };

    const tabs = [
        { name: "Home", icon: "home-outline", activeIcon: "home" },
        { name: "Camera", icon: "camera-outline", activeIcon: "camera" },
        { name: "Location", icon: "location-outline", activeIcon: "location" },
    ];

    return (
        <View style={styles.container}>
            
            <View style={styles.header}>
                <Text style={styles.headerTitle}>
                    {activeTab}
                </Text>

                {/* <TouchableOpacity onPress={handleLogout} style={styles.logoutBtn}>
                    <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity> */}
            </View>

            <View style={{ flex: 1 }}>{renderTabContent()}</View>

            <View style={styles.tabBar}>
                {tabs.map((tab) => {
                    const focused = tab.name === activeTab;

                    return (
                        <TouchableOpacity
                            key={tab.name}
                            onPress={() => setActiveTab(tab.name)}
                            style={[
                                styles.tabButton,
                                focused && styles.activeTabButton,
                            ]}
                        >
                            <Text style={[styles.tabLabel, {
                                color: focused ? "#fff" : "#555",
                            }]}>
                                {tab.name}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#F9F9F9" },

    header: {
        height: 85,
        backgroundColor: "#00A86B",
        paddingHorizontal: 20,
        paddingTop: 40,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        elevation: 5,
    },

    headerTitle: {
        color: "white",
        fontSize: 22,
        fontWeight: "bold",
    },

    logoutBtn: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        paddingVertical: 8,
        paddingHorizontal: 12,
        backgroundColor: "white",
        borderRadius: 8,
    },

    logoutText: {
        color: "#00A86B",
        fontWeight: "600",
        fontSize: 15,
    },

    tabBar: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        height: 75,
        backgroundColor: "#ffffff",
        borderTopWidth: 0,
        elevation: 10,
        paddingBottom: 12,
        paddingTop: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 8,
    },

    tabButton: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        alignItems: "center",
        borderRadius: 12,
    },

    activeTabButton: {
        backgroundColor: "#00A86B",
        borderRadius: 20,
        paddingHorizontal: 20,
        elevation: 4,
    },

    tabLabel: {
        fontSize: 13,
        fontWeight: "600",
    },
});
