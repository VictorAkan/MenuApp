import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { Image, StyleSheet, Pressable, Text } from "react-native";
import { Link } from "expo-router";

export default function Welcome() {
    return (
        <ThemedView style={styles.container}>
            <Image style={styles.image} source={require("../assets/images/little-lemon-logo.png")} />
            <ThemedText style={styles.normalText}>Little Lemon, your local Mediterranean Bistro</ThemedText>
            <Pressable style={styles.buttonContainerB}>
                <Link style={{
                    textAlign: 'center'
                }} href="/MenuItems">
                <Text style={styles.buttonText}>View Users</Text>
                </Link>
            </Pressable>
            <Pressable style={styles.buttonContainer}>
                <Link style={{
                    textAlign: 'center'
                }} href="/Subscribe">
                <Text style={styles.buttonText}>Get Started</Text>
                </Link>
            </Pressable>
            <Pressable style={styles.buttonContainerB}>
                <Link style={{
                    textAlign: 'center'
                }} href="/MenuSpecials">
                <Text style={styles.buttonText}>Menu Specials</Text>
                </Link>
            </Pressable>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        paddingTop: 150,
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    normalText: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 60,
    },
    buttonText: {
        textAlign: 'center',
        alignSelf: 'center',
        color: 'white'
    },
    buttonContainer: {
        backgroundColor: '#243624',
        borderRadius: 10,
        height: 40,
        justifyContent: 'center',
        marginTop: 20
    },
    buttonContainerB: {
        backgroundColor: '#243624',
        borderRadius: 10,
        height: 40,
        justifyContent: 'center',
        marginTop: 20
    }
})