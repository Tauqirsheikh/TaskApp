/* eslint-disable react-native/no-inline-styles */
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import HomeTab from "../tabs/HomeTab";
import CameraTab from "../tabs/CameraTab";
import LocationTab from "../tabs/LocationTab";

export default function HomeScreen({ navigation }: any) {
    const [activeTab, setActiveTab] = useState("Home");

    const handleLogout = () => navigation.replace("Login");

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

    const tabs = ["Home", "Camera", "Location"];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Home</Text>
                <TouchableOpacity onPress={handleLogout} style={styles.logoutBtn}>
                    <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flex: 1 }}>{renderTabContent()}</View>

            <View style={styles.tabBar}>
                {tabs.map((tab) => {
                    const focused = tab === activeTab;
                    return (
                        <TouchableOpacity
                            key={tab}
                            onPress={() => setActiveTab(tab)}
                            style={[
                                styles.tabButton,
                                {
                                    paddingHorizontal: focused ? 22 : 16,
                                    paddingVertical: focused ? 10 : 6,
                                    backgroundColor: focused ? "#FF7A00" : "#F2F2F2",
                                    shadowColor: focused ? "#FF7A00" : "transparent",
                                    elevation: focused ? 6 : 0,
                                },
                            ]}
                        >
                            <Text
                                style={{
                                    fontSize: 15,
                                    fontWeight: "700",
                                    color: focused ? "#fff" : "#555",
                                }}
                            >
                                {tab}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    header: {
        height: 80,
        backgroundColor: "#FF7A00",
        paddingHorizontal: 20,
        paddingTop: 40,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerTitle: { color: "white", fontSize: 22, fontWeight: "bold" },
    logoutBtn: { padding: 8, backgroundColor: "white", borderRadius: 6 },
    logoutText: { color: "#FF7A00", fontWeight: "600" },
    tabBar: {
        flexDirection: "row",
        justifyContent: "space-around",
        height: 80,
        backgroundColor: "#ffffff",
        borderTopWidth: 0,
        paddingBottom: 15,
        paddingTop: 10,
        elevation: 10,
    },
    tabButton: {
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        shadowOpacity: 0.3,
        shadowRadius: 6,
    },
});
