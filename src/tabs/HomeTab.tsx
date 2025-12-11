import React from "react";
import {
    ScrollView,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    StyleSheet,
    Image,
} from "react-native";

export default function HomeTab() {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

            <View style={styles.header}>
                <Text style={styles.headerTitle}>Hello Touqeer 👋</Text>
                <Text style={styles.headerSubtitle}>Good morning</Text>

                <View style={styles.searchBox}>
                    <TextInput
                        placeholder="What do you want to buy?"
                        placeholderTextColor="#aaa"
                        style={styles.input}
                    />
                </View>

                <View style={styles.categoryRow}>
                    {["Rings", "Bracelets", "Earrings", "Watches", "Necklace"].map(
                        (item) => (
                            <View key={item} style={styles.categoryItem}>
                                <View style={styles.categoryCircle} />
                                <Text style={styles.categoryLabel}>{item}</Text>
                            </View>
                        )
                    )}
                </View>
            </View>

            <View style={styles.mainWrapper}>

                <Text style={styles.sectionTitle}>Exclusive offers for you</Text>

                <View style={styles.offerCard}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.offerTitle}>Fresh Deals, Fresh Items!</Text>
                        <Text style={styles.offerSubtitle}>
                            Up to 20% off on new arrivals.
                        </Text>

                        <TouchableOpacity style={styles.shopBtn}>
                            <Text style={styles.shopBtnText}>Shop Now</Text>
                        </TouchableOpacity>
                    </View>

                    <Image
                        source={{ uri: "https://i.imgur.com/yzjI2T0.png" }}
                        style={styles.offerImg}
                    />
                </View>

                <View style={styles.topPickRow}>
                    <Text style={styles.sectionTitle}>Top pick for you</Text>
                    <TouchableOpacity>
                        <Text style={styles.seeAll}>See All</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.pickRow}>
                    <View style={styles.pickCard}>
                        <Image
                            source={{ uri: "https://i.imgur.com/4ZQZ4.jpg" }}
                            style={styles.pickImg}
                        />
                        <Text style={styles.pickText}>Gold plated Earring</Text>
                    </View>

                    <View style={styles.pickCard}>
                        <Image
                            source={{ uri: "https://i.imgur.com/9tw4D.jpg" }}
                            style={styles.pickImg}
                        />
                        <Text style={styles.pickText}>Silver Ring Diamond</Text>
                    </View>
                </View>

                <View style={{ height: 50 }} />

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
        color: "rgba(255,255,255,0.85)",
    },

    searchBox: {
        backgroundColor: "#fff",
        borderRadius: 16,
        paddingHorizontal: 15,
        paddingVertical: 12,
        marginTop: 20,
    },
    input: {
        fontSize: 16,
        color: "#333",
    },

    categoryRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 25,
    },
    categoryItem: {
        alignItems: "center",
    },
    categoryCircle: {
        width: 45,
        height: 45,
        borderRadius: 22,
        backgroundColor: "rgba(255,255,255,0.7)",
        marginBottom: 6,
    },
    categoryLabel: {
        fontSize: 12,
        color: "#fff",
        fontWeight: "600",
    },

    /* White Container */
    mainWrapper: {
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
        marginTop: 20,
        minHeight: "100%",
    },

    sectionTitle: {
        fontSize: 20,
        fontWeight: "700",
        marginBottom: 15,
        color: "#222",
    },

    offerCard: {
        backgroundColor: "#E4FFF4",
        padding: 20,
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 25,
    },
    offerTitle: {
        fontSize: 18,
        fontWeight: "700",
        color: "#0F7E5D",
    },
    offerSubtitle: {
        marginTop: 5,
        fontSize: 14,
        color: "#555",
    },
    shopBtn: {
        backgroundColor: "#00A86B",
        borderRadius: 12,
        paddingHorizontal: 14,
        paddingVertical: 8,
        marginTop: 10,
        width: 100,
    },
    shopBtnText: {
        color: "#fff",
        fontWeight: "700",
    },
    offerImg: {
        width: 90,
        height: 110,
        resizeMode: "contain",
    },

    topPickRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
    },
    seeAll: {
        fontSize: 14,
        color: "#00A86B",
        fontWeight: "700",
    },

    pickRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    pickCard: {
        width: "48%",
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 12,
        elevation: 4,
    },
    pickImg: {
        width: "100%",
        height: 120,
        borderRadius: 14,
        marginBottom: 10,
    },
    pickText: {
        fontSize: 14,
        fontWeight: "600",
    },
});
