import React from "react";
import { ScrollView, Text, TextInput, View, TouchableOpacity, StyleSheet } from "react-native";

export default function HomeTab() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={{ padding: 20 }}>
            <Text style={styles.greeting}>Hello User 👋</Text>
            <Text style={styles.subGreeting}>Welcome back!</Text>

            <View style={styles.searchBox}>
                <TextInput placeholder="Search something..." placeholderTextColor="#999" />
            </View>

            <View style={styles.featureRow}>
                <TouchableOpacity style={styles.featureCard}>
                    <Text style={styles.featureText}>Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.featureCard}>
                    <Text style={styles.featureText}>Settings</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.sectionTitle}>Recent Activity</Text>

            <View style={styles.activityCard}>
                <Text style={styles.activityTitle}>Scanned QR Code</Text>
                <Text style={styles.activityTime}>2 hours ago</Text>
            </View>

            <View style={styles.activityCard}>
                <Text style={styles.activityTitle}>Checked Location</Text>
                <Text style={styles.activityTime}>4 hours ago</Text>
            </View>

            <View style={{ height: 60 }} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff" },
    greeting: { fontSize: 22, fontWeight: "600", color: "#333" },
    subGreeting: { fontSize: 16, color: "#777", marginBottom: 20 },
    searchBox: {
        backgroundColor: "#FFF",
        padding: 12,
        borderRadius: 12,
        marginBottom: 25,
        borderWidth: 1,
        borderColor: "#ddd",
    },
    featureRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 15 },
    featureCard: {
        width: "48%",
        backgroundColor: "#FFF",
        paddingVertical: 25,
        borderRadius: 12,
        alignItems: "center",
        elevation: 3,
    },
    featureText: { fontSize: 18, fontWeight: "500", color: "#007AFF" },
    sectionTitle: { marginTop: 25, fontSize: 20, fontWeight: "600", marginBottom: 10 },
    activityCard: {
        backgroundColor: "#FFF",
        padding: 15,
        borderRadius: 10,
        marginBottom: 12,
        elevation: 2,
    },
    activityTitle: { fontSize: 16, fontWeight: "500" },
    activityTime: { fontSize: 13, color: "#777" },
});
