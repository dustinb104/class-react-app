import React from "react";
import {Text, View, StyleSheet, TouchableOpacity, Button, Image} from "react-native";

const ImageDetail = (props) =>{
    return <View style={styles.container}>
        <Image style={styles.image} source={props.imageSource}/>
        <Text style={styles.foodName}>{props.title} {props.price}</Text>
    </View>
}

const styles = StyleSheet.create({
    image:{
        width:150,
        height:150
    },
    container:{
        borderWidth: 3,
        margin: 2
    },
    foodName:{
        fontSize: 25,
        borderWidth: 2,
        borderColor: "#00b4d8",
        width: 150
    }
})

export default ImageDetail;