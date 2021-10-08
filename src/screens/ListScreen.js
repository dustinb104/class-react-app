import React from "react";
import { Text, StyleSheet, View, FlatList, Button} from "react-native";

const teacherList = [
    {name: "Ben", class: "CSCI4661"},
    {name: "Ted", class: "CSCI4208"},
    {name: "Chris", class: "CSCI1583"},
    {name: "Matt", class: "CSCI2125"},
    {name: "James", class: "CSCI2450"}
];

const ListScreen = () => {
    return <View>
    <FlatList horizontal={true} showsHorizontalScrollIndicator={false} keyExtractor={(teacher) => {return teacher.name}} data={teacherList} renderItem={({item}) => {
        return <View>
            <Text style={styles.textStyle}>{item.name}, {item.class}</Text>
        </View>
    } }/>
    </View>
};

const styles = StyleSheet.create({
    change:{
        fontSize: 25
    },
    button:{
        borderWidth: 3,
        borderColor: "black",
        backgroundColor: "#00f"
    },
    textStyle:{
        marginHorizontal: 100
    }
});

export default ListScreen;