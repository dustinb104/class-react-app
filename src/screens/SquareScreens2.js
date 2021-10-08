import React, {useReducer} from 'react';
import {Text, View, Button, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 10;

// 
// EXAMPLE OF USEREDUCER
// 

const reducer = (state, action) => {
    // sttae looks like this: {red: number, green: number, blue: number}
    // action looks like: {"red" || "green" || "blue" ||, amount: 20 || -20}
    switch(action.colorToChange){
        case 'red':
            return state.red + action.amount < 0 || state.red + action.amount > 255
            ? state : {...state, red: state.red + action.amount};
            
        case 'green':
            return state.green + action.amount < 0 || state.green + action.amount > 255
            ? state : {...state, green: state.green + action.amount};
        case 'blue':
            return state.blue + action.amount < 0 || state.blue + action.amount > 255
            ? state : {...state, blue: state.blue + action.amount};
        default:
            return state;
    }
}

const SquareScreen2 = () => {

    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});

    console.log(`red: ${state.red}, green: ${state.green}, blue: ${state.blue}`);

    return <View>
        <ColorCounter color="Red"
            onIncrease = {() => {dispatch({colorToChange: "red", amount: COLOR_INCREMENT})}}
            onDecrease = {() => {dispatch({colorToChange: "red", amount: -1 * COLOR_INCREMENT})}}
        />
        <ColorCounter color="Green"
            onIncrease = {() => {dispatch({colorToChange: "green", amount: COLOR_INCREMENT})}}
            onDecrease = {() => {dispatch({colorToChange: "green", amount: -1 * COLOR_INCREMENT})}}
        />
        <ColorCounter color="Blue"
            onIncrease = {() => {dispatch({colorToChange: "blue", amount: COLOR_INCREMENT})}}
            onDecrease = {() => {dispatch({colorToChange: "blue", amount: -1 * COLOR_INCREMENT})}}
        />
        <View style ={{height: 150, width: 150, backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`}}></View>
    </View>
};

const styles = StyleSheet.create({});

export default SquareScreen2;