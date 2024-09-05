import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { Image, StyleSheet, TextInput, Text, Pressable, Alert, Platform, ScrollView, KeyboardAvoidingView } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";

const pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default function Subscribe() {
    const [email, onChangeEmail] = useState("");
    const subscribe = () => {
        if (email.match(pattern)) {
            Alert.alert("Thanks for subscribing", "stay tuned!");
        } else {
            Alert.alert("Invalid email", "Please enter a valid email");
        }
    }
    // const [butt]
    return (
        <ThemedView style={styles.container}>
            <ScrollView keyboardDismissMode="on-drag">
            <Image style={styles.image} source={require("../assets/images/little-lemon-logo-grey.png")} />
            <ThemedText style={styles.normalText}>Subscribe to our newsletter for our latest delicious recipes!</ThemedText>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>
            <TextInput value={email} onChangeText={onChangeEmail} keyboardType={Platform.OS === 'ios' ? 'email-address' : 'default'} style={styles.input} placeholder="Type your email" />
            <Pressable disabled={email === ""} onPress={subscribe} style={[styles.buttonContainer, {
                backgroundColor: email === "" ? 'grey' : '#243624'
            }]}>
                <Text style={styles.buttonText}>Subscribe</Text>
            </Pressable>
            </KeyboardAvoidingView>
            </ScrollView>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        paddingTop: 50,
    },
    image: {
        width: 150,
        height: 150,
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
        color: 'white',
    },
    buttonContainer: {
        backgroundColor: '#243624',
        borderRadius: 10,
        height: 40,
        justifyContent: 'center',
        marginTop: 30
    },
    input: {
        backgroundColor: 'white',
        height: 40,
        marginTop: 30,
        borderRadius: 10,
        padding: 5,
        borderColor: 'black',
        borderWidth: 1
    }
})