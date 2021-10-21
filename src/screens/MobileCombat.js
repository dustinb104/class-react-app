import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import ImageDetail from '../components/ImageDetail';


const MobileCombat = (props) => {
    return <View>
        <View>
            <Image style={styles.imageSize} source={require('../../assets/swordAndShield.jpg')}/>
        </View>
        <Text style={styles.headerText}>Welcome to a GAME!</Text>
        <TouchableOpacity style = {styles.startButton} onPress = {function(){props.navigation.navigate("HW2")}}><Text style={styles.textStyle}>Begin Your Adventure</Text></TouchableOpacity>

    </View>
}

const styles = StyleSheet.create({
    imageSize: {
        height: 350,
        width: '100%'
    },
    headerText: {
        position: 'absolute',
        fontSize: 24,
        left: 100
    },
    startButton: {
        backgroundColor: '#a8dadc',
        alignItems: 'center',
        marginTop: 20,
    },
    textStyle: {
        fontSize: 20
    }
})

export default MobileCombat;