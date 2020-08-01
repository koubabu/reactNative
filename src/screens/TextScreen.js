import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
    //we have to usestyling whenever we use textInput
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    return (
        <View>
            <Text>Enter your name</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={(newText) => setName(newText)}
            />
            <Text>My name is : {name}</Text>
            <Text>Enter your password</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeText={(newText) => setPassword(newText)}
            />
            {password.length < 4 ? (
                <Text>password must be 4 chareceter:</Text>
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 50,
        borderColor: "black",
        borderWidth: 1,
    },
});

export default TextScreen;
