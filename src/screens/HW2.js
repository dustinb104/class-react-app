import React,{useState} from 'react';
import {useReducer} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import AttributeAdder from '../components/AttributeAdder';
const STAT_SCREEN_STATE = "characterCreation";
const COMBAT_SCREEN_STATE = "fighting";
const WON_GAME = "win";
const GAME_START = "start";
const LOSE_GAME = "lose";


// const skillPoints = 18; //skill points to spend
// const healthPoints = 10; //starting health points
// const magicPoints = 1; //starting magic points
// const strengthPoints = 1; //starting strenght points

const INCREMENT = 1;

const reducer = (state, action) => {
    switch (action.pointType){
        case "strength":
            return state.skillPoints - action.amount < 0 || state.strengthPoints + action.amount < 1 ? state : {...state, strengthPoints: state.strengthPoints + action.amount, skillPoints: state.skillPoints - action.amount};
        case "magic":
            return state.skillPoints - action.amount < 0 || state.magicPoints + action.amount < 1 ? state : {...state, magicPoints: state.magicPoints + action.amount, skillPoints: state.skillPoints - action.amount};
        case "health":
            return state.skillPoints - action.amount < 0 || state.healthPoints + action.amount < 10 ? state : {...state, healthPoints: state.healthPoints + action.amount, skillPoints: state.skillPoints - action.amount};
        case 'attack':
            return state.healthPoints > 0 && state.enemyHealthPoints > 0 ? {...state, enemyHealthPoints: state.enemyHealthPoints - state.strengthPoints, fightText: "You attacked the monster, but he countered your attack!", healthPoints: state.healthPoints - state.enemyStrengthPoints} : state;
        case 'fire':
            return state.magicPoints - 1 >= 0  && state.healthPoints > 0 && state.enemyHealthPoints > 0 ? {...state, enemyHealthPoints: state.enemyHealthPoints - state.magicPoints, healthPoints: state.healthPoints - state.enemyMagicPoints, magicPoints: state.magicPoints - 1, enemyMagicPoints: state.enemyMagicPoints - 1, fightText: "You attacked the monster with fire, but he countered your attack with a spell!"} : state;
        case 'heal':
            return  state.magicPoints - 1 >= 0 ? {...state, healthPoints: state.healthPoints + 2, magicPoints: state.magicPoints - 1, fightText: "You healed your wounds with some magic!"} : state;
        default: 
            return state;
}}


const HW2 = () => {
    // keep track of what game state we are in, register that useing the 'useState' hook.
    const [gameState, setGameState] = useState(GAME_START);

    const [state, dispatch] = useReducer(reducer, {strengthPoints: 1, magicPoints: 1, healthPoints: 10, skillPoints: 10, enemyHealthPoints: 16, enemyMagicPoints: 4, enemyStrengthPoints: 4, fightText: 'Fight'});

    var whatToDisplay //will fill this up with different JSX

    switch(gameState){
        case GAME_START:
            whatToDisplay = <View>
                <View>
            <Image style={styles.imageSize} source={require('../../assets/swordAndShield.jpg')}/>
        </View>
        <Text style={styles.headerText}>Welcome to Mobile Combat!</Text>
        <TouchableOpacity style = {styles.startButton} onPress = {() => setGameState(STAT_SCREEN_STATE)}><Text style={styles.textStyle}>Begin Your Adventure</Text></TouchableOpacity>
            </View>
            break;
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
                <Text style={styles.remainingPoints}>Remaining Skill Points:{state.skillPoints}</Text>
                {state.skillPoints < 1 ? <TouchableOpacity style={styles.joinFightButton} onPress = {() => setGameState(COMBAT_SCREEN_STATE)}>
                <Text style={styles.joinFightButtonText}>Join The Fight</Text>
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
                        <Text>Health Points : {state.enemyHealthPoints * 5}</Text>
                        <Text>Strength Points: {state.enemyStrengthPoints * 2}</Text>
                        <Text>Magic Points: {state.enemyMagicPoints * 3}</Text>
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
                    <View style={styles.fightConsole}>
                        {state.healthPoints >+ 1 ? <Text>{state.fightText}</Text> : <Text>You are dead</Text>}
                        {state.enemyHealthPoints <= 0 ? setGameState(WON_GAME) : null}
                        {state.healthPoints <= 0 ? setGameState(LOSE_GAME): null}
                    </View>
                </View>
            break;
            case WON_GAME:
                whatToDisplay = <View style = {styles.winView}>
                    <Text style = {styles.winText}>You win!</Text>
                </View>
            break;
            case LOSE_GAME:
                whatToDisplay = <View style ={styles.winView}>
                    <Text style = {styles.winText}>YOU LOSE!</Text>
                </View>
            break;
    }
    return whatToDisplay;
}

const styles = StyleSheet.create({
    attributeHeaderScreen:{
        fontSize: 25
    },
    remainingPoints: {
        fontSize: 20,
        left: 5
    },
    container:{
        flexDirection: 'column',
        alignItems: 'center',
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
        width: 250,
        marginTop: 10
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderWidth: 3,
        borderColor: 'black',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        alignSelf: 'stretch'
    },
    fightConsole:{
        backgroundColor: '#e9ecef',
        height: 200,
        width: 300,
        borderWidth: 2,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    winText:{
        fontSize: 30
    },
    winView:{
        alignItems: 'center',
    },
    imageSize: {
        height: 350,
        width: '100%'
    },
    headerText: {
        position: 'absolute',
        fontSize: 30,
        top: 140,
        left: 35,
        color: '#e5383b'
    },
    startButton: {
        backgroundColor: '#a8dadc',
        alignItems: 'center',
        marginTop: 20,
    },
    textStyle: {
        fontSize: 20
    },
    joinFightButton:{
        alignItems: 'center',
        backgroundColor: '#70d6ff',
        marginTop: 10
    },
    joinFightButtonText: {
        fontSize: 30
    }
})

export default HW2;