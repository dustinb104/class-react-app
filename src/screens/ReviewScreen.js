import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Button} from 'react-native';

const ReviewScreen = () => {
    return <View>
        <Text>Hello Review 1 World!</Text>
        <View style={styles.colorBox}></View>
        <Button title='I am a button'/>
        <TouchableOpacity><Text>Hello World</Text></TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    colorBox: {
        width: 200,
        height: 200,
        backgroundColor: '#ff002b'
    }
})

export default ReviewScreen;