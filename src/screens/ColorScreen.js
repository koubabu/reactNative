import React, { useState } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";

const ColorScreen = () => {
    const [colors, setColors] = useState([]);
    // console.log(colors);
    return (
        <View>
            <Button
                title="add color"
                onPress={() => {
                    setColors([...colors, randomRGB()]);
                }}
            />
            {/* <View
                style={{
                    height: 100,
                    width: 100,
                    backgroundColor: randomRGB(),
                }}
            /> */}
            <FlatList
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item}
                data={colors}
                renderItem={({ item }) => {
                    //item === 'rgb(0,0,0)'
                    return (
                        <View
                            style={{
                                height: 100,
                                width: 100,
                                backgroundColor: item,
                            }}
                        />
                    );
                }}
            />
        </View>
    );
};
const randomRGB = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red},${green},${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;