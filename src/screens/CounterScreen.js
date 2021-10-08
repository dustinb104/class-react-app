import React, {useState} from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet} from 'react-native';

const CounterScreen = () =>{

    const [counter, setCounter] = useState(0);

    return <View style={styles.buttonHolder}>
       <TouchableOpacity style={styles.button} onPress={function(){
        //    counter++;
        setCounter(counter + 1);
           console.log(counter);
       }}>
           <Text style={styles.buttonText}>Increase</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.button} onPress={function(){
        //    counter--;
        setCounter(counter - 1);
           console.log(counter);
       }}>
           <Text style={styles.buttonText}>Decrease</Text>
       </TouchableOpacity>
       <Text>Current Count: {counter}</Text>
    </View>
};

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
})

export default CounterScreen;