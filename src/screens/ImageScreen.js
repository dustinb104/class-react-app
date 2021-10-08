import React from "react";
import {Text, View, Button, TouchableOpacity, FlatList, StyleSheet} from "react-native";
import ImageDetail from "../components/ImageDetail"

const ImageScreen = () => {
    return <View>
        <Text>Image Screen</Text>
        <ImageDetail title="Coffee" imageSource={require('../../assets/coffee.jpg')} price="(2.99)"/>
        <ImageDetail title="Doughnut" imageSource={require('../../assets/doughnut.jpg')} price="(0.99)"/>
        <ImageDetail title="Sandwich" imageSource={require('../../assets/sandwich.jpg')} price="(4.99)"/>
    </View>
}

const styles = StyleSheet.create({})

export default ImageScreen;