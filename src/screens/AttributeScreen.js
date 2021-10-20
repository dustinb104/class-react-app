import React, {useReducer} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import AttributeAdder from '../components/AttributeAdder';

const INCREMENT = 1;
var game = 0;

const reducer = (state, action) => {
    switch (action.pointType){
        case "strength":
            return state.skillPoints - action.amount < 0 || state.strengthPoints + action.amount < 1 ? state : {...state, strengthPoints: state.strengthPoints + action.amount, skillPoints: state.skillPoints - action.amount};
            ;
        case "magic":
            return state.skillPoints - action.amount < 0 || state.magicPoints + action.amount < 1 ? state : {...state, magicPoints: state.magicPoints + action.amount, skillPoints: state.skillPoints - action.amount};
        case "health":
            return state.skillPoints - action.amount < 0 || state.healthPoints + action.amount < 10 ? state : {...state, healthPoints: state.healthPoints + action.amount, skillPoints: state.skillPoints - action.amount};
        default: 
            return state;
}}

const AttributeScreen = (props) => {

    const [state, dispatch] = useReducer(reducer, {strengthPoints: props.strengthPoints, magicPoints: props.magicPoints, healthPoints: props.healthPoints, 
    skillPoints: 18});

    console.log(state)
    return <View>
        <Text>This is the attribute screen!</Text>
        <AttributeAdder title="Strength"
        currentPoints = {state.strengthPoints}
        onIncrease = {() => {dispatch({pointType: "strength", amount: INCREMENT})}}
        onDecrease = {() => {dispatch({pointType: "strength", amount: -1 * INCREMENT})}}/>
        <AttributeAdder title="Health"
        currentPoints = {state.healthPoints}
        onIncrease = {() => {dispatch({pointType: "health", amount: INCREMENT})}}
        onDecrease = {() => {dispatch({pointType: 'health', amount: -1 * INCREMENT})}}/>
        <AttributeAdder title="Mana"
        currentPoints = {state.magicPoints}
        onIncrease = {() => {dispatch({pointType: "magic", amount: INCREMENT})}}
        onDecrease = {() => {dispatch({pointType: "magic", amount: -1 * INCREMENT})}}/>
        <Text>Remaining Skill Points:{state.skillPoints}</Text>
        {state.skillPoints < 1 ? <TouchableOpacity>
        <Text>Continue</Text>
        </TouchableOpacity> : null}
    </View>
}

const styles = StyleSheet.create({
    container:{
        height: 500
    }
})

export default AttributeScreen;