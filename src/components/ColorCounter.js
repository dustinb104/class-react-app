import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const ColorCounter = (props) => {
    return <View style={styles.buttonHolder}>
        <Text style={styles.buttonText}>{props.color}</Text>
        <TouchableOpacity style={styles.button}
        onPress = {props.onIncrease}>
            <Text>Increase {props.color}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
        onPress = {props.onDecrease}>
            <Text>Decrease {props.color}</Text>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    button:{
        justifyContent:"center",
        backgroundColor: "#00b4d8",
        width: 200,
        padding: 15,
        alignItems: "center",
        margin: 15
    },
    buttonHolder:{
        alignItems: "center",
        justifyContent:"center",
    },
    buttonText:{
        fontSize: 25
    }
})

export default ColorCounter;