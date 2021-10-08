import React, {useState} from 'react';
import {Text, View, Button, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 20;

// 
// EXAMPLE OF USE STATE
// 

const SquareScreen = () => {

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const setColor = (color, change) => {
        // color === 'red', 'green', 'blue'
        // change === +20, -20
        if(color === 'red'){
            red + change < 0 || red + change > 255 ? null : setRed(red + change);
        }
        if(color === 'green'){
            green + change < 0 || green + change > 255 ? null : setGreen(green + change);
        }
        if(color === 'blue'){
            blue + change < 0 || blue + change > 255 ? null : setBlue(blue + change);
        }
        
    }

    console.log(`red: ${red}, green: ${green}, blue: ${blue}`);

    return <View>
        <ColorCounter color="Red"
            onIncrease = {() => {setColor('red', COLOR_INCREMENT)}}
            onDecrease = {() => {setColor('red',-1 * COLOR_INCREMENT)}}
        />
        <ColorCounter color="Green"
            onIncrease = {() => {setColor('green', COLOR_INCREMENT)}}
            onDecrease = {() => {setColor('green', -1 * COLOR_INCREMENT)}}
        />
        <ColorCounter color="Blue"
            onIncrease = {() => {setColor('blue', COLOR_INCREMENT)}}
            onDecrease = {() => {setColor('blue',-1 *  COLOR_INCREMENT)}}
        />
        <View style ={{height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}></View>
    </View>
};

const styles = StyleSheet.create({});

export default SquareScreen;