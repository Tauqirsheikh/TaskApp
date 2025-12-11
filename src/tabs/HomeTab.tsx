import React from "react";
import {
    ScrollView,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    StyleSheet,
} from "react-native";

export default function HomeTab() {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

            {/* HEADER */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Hello Touqeer 👋</Text>
                <Text style={styles.headerSubtitle}>Welcome back!</Text>
            </View>

            {/* MAIN CONTENT AREA */}
            <View style={styles.mainWrapper}>

                {/* SEARCH BOX */}
                <View style={styles.searchBox}>
                    <TextInput
                        placeholder="Search..."
                        placeholderTextColor="#aaa"
                        style={styles.input}
                    />
                </View>

                {/* FEATURE CARDS */}
                <Text style={styles.sectionTitle}>Quick Actions</Text>

                <View style={styles.featureRow}>
                    <TouchableOpacity style={styles.featureCard}>
                        <Text style={styles.featureText}>Profile</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.featureCard}>
                        <Text style={styles.featureText}>Settings</Text>
                    </TouchableOpacity>
                </View>

                {/* RECENT ACTIVITY */}
                <Text style={styles.sectionTitle}>Recent Activity</Text>

                <View style={styles.activityCard}>
                    <Text style={styles.activityTitle}>Scanned QR Code</Text>
                    <Text style={styles.activityTime}>2 hours ago</Text>
                </View>

                <View style={styles.activityCard}>
                    <Text style={styles.activityTitle}>Checked Location</Text>
                    <Text style={styles.activityTime}>4 hours ago</Text>
                </View>

                <View style={{ height: 40 }} />

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#00A86B",
    },

    header: {
        paddingTop: 60,
        paddingHorizontal: 20,
        paddingBottom: 30,
    },
    headerTitle: {
        fontSize: 26,
        fontWeight: "800",
        color: "#fff",
    },
    headerSubtitle: {
        fontSize: 16,
        marginTop: 5,
        color: "rgba(255,255,255,0.8)",
    },

    mainWrapper: {
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
        marginTop: 20,
        minHeight: "100%",
    },

    searchBox: {
        backgroundColor: "#f3f4f6",
        borderRadius: 14,
        paddingHorizontal: 15,
        paddingVertical: 12,
        marginBottom: 25,
        borderWidth: 1,
        borderColor: "#e5e7eb",
    },
    input: {
        fontSize: 16,
        color: "#333",
    },

    sectionTitle: {
        fontSize: 20,
        fontWeight: "700",
        marginBottom: 12,
        color: "#222",
    },

    featureRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 25,
    },
    featureCard: {
        width: "48%",
        backgroundColor: "#ffffff",
        paddingVertical: 28,
        borderRadius: 16,
        alignItems: "center",
        elevation: 4,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 6,
    },
    featureText: {
        fontSize: 18,
        fontWeight: "600",
        color: "#00A86B",
    },

    activityCard: {
        backgroundColor: "#ffffff",
        padding: 18,
        borderRadius: 16,
        marginBottom: 15,
        elevation: 3,
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 5,
    },
    activityTitle: {
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 4,
    },
    activityTime: {
        fontSize: 13,
        color: "#777",
    },
});
