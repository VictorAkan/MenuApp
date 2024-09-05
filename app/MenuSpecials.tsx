import { SafeAreaView, StyleSheet, View, Text, FlatList } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { useEffect, useState } from "react";
import menuitems from "../menuitems.json";

const Item = ({name, price}:any) => {
    return (
        <View style={styles.innerContainer}>
            <Text style={styles.itemText}>{name}</Text>
            <Text style={styles.itemText}>${price}</Text>
        </View>
    )
}

export default function MenuSpecials() {
    const [myJSON, setJSONObj] = useState([])

    const renderItem = ({item}:any) => <Item name={item.title} price={item.price} />

//     const convertStringToJson = () => {
//         const jsonString = `[
//         {
//             "name": "Veggie Kabob",
//                 "price": "$12",
//                     "type": "Main Dish"
//         },
//         {
//             "name": "Greek Salad",
//                 "price": "$7",
//                     "type": "Side"
//         },
//         {
//             "name": "Black Tea",
//                 "price": "$3",
//                     "type": "Drink"
//         }
// ]`;
//     const result = JSON.parse(jsonString)
//     setJSONObj(result)
// }

// useEffect(() => {
//     convertStringToJson()
// }, [])
return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.headerText}>Emma's Lemon</Text>
        <FlatList 
            data={menuitems.menu}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />
    </SafeAreaView>
)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#495E57',
    },
    innerContainer: {
        paddingHorizontal: 40,
        paddingVertical: 20,
        backgroundColor: '#495E57',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemText: {
        color: '#F4CE14',
        fontSize: 22,
    },
    headerText: {
        color: '#F4CE14',
        fontSize: 30,
        textAlign: 'center',
    },
});