import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
    return (
        <View style={styles.flexViewStyle}>
            {/* <Text style={styles.boxTextStyle}>BoxScreen</Text> */}
            <Text style={styles.flexTextStyle}>child #1</Text>
            <Text style={styles.flexTextStyle}>child #2</Text>
            <Text style={styles.flexTextStyle}>child #3</Text>
        </View>
    );
};
// Parent alignItems flexDirection justifyContent

// align item is set upon parent element in flexbox
// alignItems: 'strech' (default) || 'flex-start' || 'center' || 'flex-end'
// flexDirection is set upon parent element in flexbox
// flexDirection:  'column' (default) || 'row'
// justifyContent: 'flex-start' || 'center' || 'space-between' || 'space-around'

//Child flex align self
// flex:  1 it will take as much vertial  space as possible
// we can use flex to children like if 3 child 4 4 2
// alignSelf: it will overwrite the alignItem
const styles = StyleSheet.create({
    boxViewStyle: {
        borderWidth: 3,
        borderColor: "black",
    },
    boxTextStyle: {
        paddingTop: 50,
        borderWidth: 10,
        borderColor: "red",
        marginHorizontal: 10,
        marginVertical: 10,
    },
    flexViewStyle: {
        borderWidth: 3,
        borderColor: "black",
        // alignItems: "center",
        // flexDirection: "row",
        height: 200,
        // alignItems: "flex-end",
        justifyContent: "space-evenly",
    },
    flexTextStyle: {
        paddingLeft: 5,
        borderWidth: 3,
        borderColor: "red",
        // flex: 1,
        // alignSelf: "center",
    },
});
export default BoxScreen;
