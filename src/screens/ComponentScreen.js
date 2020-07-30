import React from "react";
import { View, Text, StyleSheet } from "react-native";

// const ComponentScreen = function () {};
const ComponentScreen = () => {
    const greeting = "hello there, this is Koushik";
    const greeting2 = (
        <Text>we can assign jsx elements to a variable also</Text>
    );
    //we can not use javascript object inside jsx
    return (
        <View>
            <Text style={styles.textStyle}>this is a component screen</Text>
            <Text style={styles.subHeaderStyle}>Hi there</Text>
            <Text style={styles.paragraphStyle}>{greeting}</Text>
            {greeting2}
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 50,
    },
    subHeaderStyle: {
        fontSize: 40,
    },
    paragraphStyle: {
        fontSize: 30,
    },
});

export default ComponentScreen;
