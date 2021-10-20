import React, {useState} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

const ReviewScreen3 = () => {

    const [count, setCount] = useState(0);

    const changeCount = () =>{
        setCount(count + 1);
    }

    return <View>
        <Text>Hello Review 2 World</Text>
        <View style={styles.redBox}></View>
        <View style={styles.greenBox}></View>
        <View style={styles.blueBox}></View>
        <Button title='I am a button' onPress={changeCount()}/>
    </View> 
}

const styles = StyleSheet.create({
    redBox:{
        width:100,
        height: 100,
        backgroundColor: '#d00000',
        // marginTop: {state.count},
    },
    blueBox:{
        width: 100,
        height: 100,
        backgroundColor: '#0096c7',
        alignSelf: 'center',
        // marginTop: {state.count}
    },
    greenBox:{
        width: 100,
        height:100,
        backgroundColor: '#52b788',
        alignSelf: 'flex-end',
        // marginTop: state.count
    },
    viewContainer:{
        // height: 400
    }
})

export default ReviewScreen3;