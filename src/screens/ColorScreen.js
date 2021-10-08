import React, {useState} from 'react';
import {Button, StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';


const ColorScreen = () => {

    const [colors, setColors] = useState([]);
    console.log(colors);

    return <View style = {styles.buttonHolder}>
        <TouchableOpacity style = {styles.button} 
        onPress = {() => {
            setColors([...colors, randomRgb()]);
        }}>
            <Text style = {styles.buttonText}>Add Color</Text>
        </TouchableOpacity>
        <FlatList keyExtractor={
            (color) => {return color}} 
            data={colors} renderItem={({item}) => {
                return <View style={{ width: 100, height: 100, backgroundColor: item}}></View>
            }}/>
        {/* <View style={{ width: 100, height: 100, backgroundColor: randomRgb()}}></View> */}
    </View>
};

const randomRgb = () => {
    // generate random values for red, green, and blue.
    // then put them together
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

   let colorString = `rgb(${red}, ${green}, ${blue})`;
   return colorString;
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
    buttonText:{
        fontSize: 25
    },
    buttonHolder:{
        alignItems: "center",
        justifyContent:"center"
    },
});

export default ColorScreen;