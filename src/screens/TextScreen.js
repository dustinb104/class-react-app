import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, TextInput} from 'react-native';

const TextScreen = () => {

    const [name, setName] = useState("");

    return <View>
        <Text>Enter password</Text>
        <TextInput style={styles.input} autoCapitalize="none" autoCorrect={false}
        value={name} onChangeText={(newText) => {setName(newText);}}/>
        {name.length < 5 ? <Text>Please make you name longer</Text> : null}
    </View>
};

const styles = StyleSheet.create({
    input: {
        margin: 20,
        borderColor: "black",
        borderWidth: 1,
    }
});

export default TextScreen;