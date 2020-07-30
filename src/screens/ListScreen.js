import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
    const friend = [
        { name: "friend #1", age: 21 },
        { name: "friend #2", age: 22 },
        { name: "friend #3", age: 23 },
        { name: "friend #4", age: 24 },
        { name: "friend #5", age: 25 },
        { name: "friend #6", age: 26 },
        { name: "friend #7", age: 27 },
        { name: "friend #8", age: 28 },
        { name: "friend #9", age: 29 },
    ];

    return (
        <FlatList
            // horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(friend) => friend.name}
            data={friend}
            // renderItem={(element) => {
            // element === {item: 'friend #1', index:0}
            // this means we are giving direct access to the item element
            renderItem={({ item }) => {
                // item === {item: 'friend #1'}
                return (
                    <Text style={styles.textStyle}>
                        {item.name} - age: {item.age}
                    </Text>
                );
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
    },
});

export default ListScreen;
