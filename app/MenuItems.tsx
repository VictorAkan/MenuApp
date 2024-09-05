import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { FlatList, StyleSheet, ActivityIndicator, ScrollView, View, Text, Image } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";

const Item = ({ title, imageUri }:any) => {
    return (
        <View style={styles.profileContainer}>
            {/* <View> */}
            <Image style={styles.image} source={{
                uri: imageUri
            }} alt="image" />
            <Text style={styles.normText}>{title}</Text>
            {/* </View> */}
        </View>
    )
}

export default function MenuItems() {
    const [data, setData] = useState([]);
    const [refreshing, setRefreshing] = useState(true);

    const getUsers = async () => {
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/photos')
            const data = res.data
            // console.log(res.data);
            setData(data)
        } catch (error) {
            console.log(error);
        } finally {
            setRefreshing(false)
        }
    }

    const renderItem = ({item}:any) => <Item title={item.title} imageUri={item.thumbnailUrl} />

    useEffect(() => {
        getUsers()
    }, [])
    return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.headText}>Little Lemon Users</ThemedText>
            {refreshing ? <ActivityIndicator /> : <FlatList numColumns={2} keyExtractor={(item) => item.id} data={data} renderItem={renderItem} />}
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 20,
    },
    headText: {
        textAlign: 'center',
        fontSize: 30,
        padding: 20
    },
    normText: {
        color: 'white'
    },
    profileContainer: {
        flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    padding: 10,
    // borderWidth: 1,
    // borderColor: "gray",
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
})