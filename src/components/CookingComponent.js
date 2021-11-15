import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const CookingComponent = (props) => {
    return <View>
        <Text style={styles.statText}>Current {props.title}: {props.currentPoints}</Text>
        <TouchableOpacity onPress={props.onPress} style={styles.button}>
            <Text style = {styles.insideButton}>{props.toDo}</Text>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#48cae4',
        alignItems: 'center'
    },
    insideButton:{
        fontSize: 20
    },
    statText:{
        fontSize: 25
    }
});

export default CookingComponent;