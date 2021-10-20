import React,{useState} from 'react';
import {useReducer} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import AttributeAdder from '../components/AttributeAdder';
const STAT_SCREEN_STATE = "characterCreation";
const COMBAT_SCREEN_STATE = "fighting";


// const skillPoints = 18; //skill points to spend
// const healthPoints = 10; //starting health points
// const magicPoints = 1; //starting magic points
// const strengthPoints = 1; //starting strenght points

const INCREMENT = 1;

const reducer = (state, action) => {
    switch (action.pointType){
        case "strength":
            return state.skillPoints - action.amount < 0 || state.strengthPoints + action.amount < 1 ? state : {...state, strengthPoints: state.strengthPoints + action.amount, skillPoints: state.skillPoints - action.amount};
            ;
        case "magic":
            return state.skillPoints - action.amount < 0 || state.magicPoints + action.amount < 1 ? state : {...state, magicPoints: state.magicPoints + action.amount, skillPoints: state.skillPoints - action.amount};
        case "health":
            return state.skillPoints - action.amount < 0 || state.healthPoints + action.amount < 10 ? state : {...state, healthPoints: state.healthPoints + action.amount, skillPoints: state.skillPoints - action.amount};
        case 'attack':
            return {...state, enemyHealthPoints: state.enemyHealthPoints - state.strengthPoints};
        case 'fire':
            return {...state, enemyHealthPoints: state.enemyHealthPoints - state.magicPoints};
        case 'heal':
            return {...state, healthPoints: state.healthPoints + 2};
        default: 
            return state;
}}


const HW2 = () => {
    // keep track of what game state we are in, register that useing the 'useState' hook.
    const [gameState, setGameState] = useState(STAT_SCREEN_STATE);

    const [state, dispatch] = useReducer(reducer, {strengthPoints: 1, magicPoints: 1, healthPoints: 10, skillPoints: 18, enemyHealthPoints: 75, enemyMagicPoints: 21, enemyStrengthPoints: 18});

    var whatToDisplay //will fill this up with different JSX

    switch(gameState){
        case STAT_SCREEN_STATE: state.skillPoints > 0
            whatToDisplay = <View>
                <Text style={styles.attributeHeaderScreen}>Create Your Character!</Text>
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
                {state.skillPoints < 1 ? <TouchableOpacity onPress = {() => setGameState(COMBAT_SCREEN_STATE)}>
                <Text>Continue</Text>
                </TouchableOpacity> : null}
            </View>
            break;
        case COMBAT_SCREEN_STATE: state.skillPoints < 1
            whatToDisplay = <View style={styles.container}>
                <View style = {styles.statsContainer}>
                    <View style={styles.statBox}>
                        <Text>Your Stats! : </Text>
                        <Text>Health Points: {state.healthPoints * 5}</Text>
                        <Text>Stength Points: {state.strengthPoints * 2}</Text>
                        <Text>Magic Points: {state.magicPoints * 3}</Text>
                    </View>
                    <View style={styles.statBox}>
                        <Text>Enemy Stats:</Text>
                        <Text>Health Points : {state.enemyHealthPoints}</Text>
                        <Text>Strength Points: {state.enemyStrengthPoints}</Text>
                        <Text>Magic Points: {state.enemyMagicPoints}</Text>
                    </View>
                    </View>
                    <View style = {styles.enemyImageContainer}>{state.healthPoints > 0 && state.enemyHealthPoints > 0 ? <Image style={styles.enemyImage} source ={require('../../assets/alienWizard.png')}></Image> : <Image style={styles.enemyImage} source = {require('../../assets/monsterDead.png')}></Image>}</View>
                
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                        onPress={() =>{dispatch({pointType:'attack',amount:0})}}>
                            <Image source={require('../../assets/attackIcon.png')}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={() =>{dispatch({pointType:'fire',amount:0})}}>
                            <Image source={require('../../assets/fireIcon.png')}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={() =>{dispatch({pointType:'heal',amount:0})}}>
                            <Image source={require('../../assets/healIcon.png')}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
            break;
    }
    return whatToDisplay;
}

const styles = StyleSheet.create({
    attributeHeaderScreen:{
        fontSize: 25
    },
    container:{
        flexDirection: 'column',
    //     alignItems: 'flex-end',
    //     alignSelf: 'flex-end'
    },
    statsContainer: {
        padding: 4,
        borderColor: 'black',
        flexDirection: 'row',
        

    },
    statBox:{
        flex: 1,
        borderColor: 'black',
        borderWidth: 3,
        alignItems: 'center'
    },
    enemyImageContainer: {
        alignItems: 'center'
    },
    enemyImage:{
        height: 300,
        width: 250
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderWidth: 3,
        borderColor: 'black',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,


    }
})

export default HW2;