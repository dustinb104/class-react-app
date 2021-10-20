import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Button} from 'react-native';

const ReviewScreen = () => {
    return <View>
        <Text>Hello Review 2 World</Text>
        <View style={styles.redBox}></View>
        <View style={styles.greenBox}></View>
        <View style={styles.blueBox}></View>
        <Button title='I am a button'/>
    </View>
}

const styles = StyleSheet.create({
    redBox:{
        width:100,
        height: 100,
        backgroundColor: '#d00000',
    },
    blueBox:{
        width: 100,
        height: 100,
        backgroundColor: '#0096c7',
        alignSelf: 'center'
    },
    greenBox:{
        width: 100,
        height:100,
        backgroundColor: '#52b788',
        alignSelf: 'flex-end'
    },
    viewContainer:{
        // height: 400
    }
})

export default ReviewScreen;