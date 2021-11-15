import React, {useReducer} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import CookingComponent from '../components/CookingComponent';

const cookingReducer = (state,action) =>{
    // actionType = "shop" || "cook" || "work"
    // currentHunger, currentIngredients, currentMoney
    // when shop: +ingredients, -money
    // when cook: -ingredients, -hunger
    // when work: +hunger, +money
    // Testing something with github
    switch(action.actionType){
        case "shop":
            return state.currentMoney - 1 < 0 ? state : {...state ,currentIngredients: state.currentIngredients + 1, currentMoney: state.currentMoney - 1};
        case "cook":
            return state.currentIngredients - 1 < 0 || state.hunger -1 < 0 ? state: {...state, currentIngredients: state.currentIngredients - 1, currentHunger: state.currentHunger - 1};
        case "work":
            return  state.currentHunger + 1 > 10 ? state: {...state, currentHunger: state.currentHunger + 1, currentMoney: state.currentMoney + 1};
        default: state;
    }
}

const Midterm = () =>{
    const [state,dispatch] = useReducer(cookingReducer, {currentIngredients: 5, currentHunger: 5, currentMoney: 5});

    return <View>
        <CookingComponent title="Hunger" toDo="Prepare Meal" currentPoints ={state.currentHunger} onPress={() =>{dispatch({actionType:"cook"})}}/>
        <CookingComponent title="Ingredients" toDo="Purchase Ingredients" currentPoints ={state.currentIngredients} onPress={() =>{dispatch({actionType:"shop"})}}/>
        <CookingComponent title="Money" toDo="Go to work" currentPoints ={state.currentMoney} onPress={() =>{dispatch({actionType:"work"})}}/>
    </View>
}

export default Midterm;