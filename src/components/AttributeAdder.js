import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Image} from 'react-native';

const AttributeAdder = (props) => {
    return <View style={styles.attContainer}>
        <TouchableOpacity 
        onPress = {props.onDecrease}>
            <Image style={styles.buttonSize} source={require('../../assets/minusSign.png')}/>
        </TouchableOpacity>
        <Text style={styles.textStyle}>Current {props.title}: {props.currentPoints}</Text>
        <TouchableOpacity
        onPress = {props.onIncrease}>
            <Image  style={styles.buttonSize} source={require('../../assets/plusSign.png')}/>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    buttonSize:{
        height: 40,
        width: 40,
        
    },
    attContainer:{
        flexDirection:'row',
        borderColor: 'black',
        borderWidth: 3,
        alignSelf: 'center',
        margin: 5,
        alignItems: 'center',
        width: 300,
        justifyContent: 'space-around'
    },
    textStyle:{
        paddingLeft: 4,
        paddingRight: 4,
        fontSize: 24
    }
})

export default AttributeAdder;