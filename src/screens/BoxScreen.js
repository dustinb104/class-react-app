import React from "react";
import {Text, View, TouchableOpacity, StyleSheet} from "react-native";

const BoxScreen = () => {
    return <View style = {styles.viewStyle}>
        <Text style = {styles.textOneStyle}>Child 1</Text>
        <Text style = {styles.textTwoStyle}>Child 2</Text>
        <Text style = {styles.textThreeStyle}>Child 3</Text>
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 4,
        borderColor: 'black',
        height: 200,
        flexDirection: 'row',
        alignItems: 'stretch'
    },
    textOneStyle: {
        backgroundColor: 'red',
        color: 'white',
        borderWidth: 3,
        flex: 1,
    },
    textTwoStyle: {
        backgroundColor: 'green',
        color: 'white',
        borderWidth: 3,
        flex: 2
    },
    textThreeStyle: {
        backgroundColor: 'blue',
        color: 'white',    
        borderWidth: 3,
        flex: 1
    },
})

export default BoxScreen;