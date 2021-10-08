import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
    return <View style={styles.buttonHolder}>
        <TouchableOpacity style={styles.button} onPress={function(){props.navigation.navigate("Component")}}>
            <Text style={styles.buttonText}>Components</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={function(){props.navigation.navigate("List")}}>
            <Text style={styles.buttonText}>ListScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={function(){props.navigation.navigate("Image")}}>
           <Text style={styles.buttonText}>ImageScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress = {function(){props.navigation.navigate("Counter")}}>
            <Text style={styles.buttonText}>CounterScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress = {function(){props.navigation.navigate("Color")}}>
            <Text style={styles.buttonText}>ColorScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress = {function(){props.navigation.navigate("Square")}}>
            <Text style={styles.buttonText}>SquareScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress = {function(){props.navigation.navigate("Square2")}}>
            <Text style={styles.buttonText}>SquareScreen2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress = {function(){props.navigation.navigate("Text")}}>
            <Text style={styles.buttonText}>TextScreen</Text>
        </TouchableOpacity>
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
    buttonHolder:{
        alignItems: "center",
        justifyContent:"center"
    },
    buttonText:{
        fontSize: 25
    }
});

export default HomeScreen;
