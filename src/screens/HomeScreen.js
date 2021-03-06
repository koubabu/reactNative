import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
    // console.log(props.navigation);
    return (
        <View>
            <Text style={styles.text}>HOME SCREEN </Text>
            <Button
                onPress={() => props.navigation.navigate("Components")} //console.log("button pressed")}
                title="go to components demo"
            />
            {/* <TouchableOpacity onPress={() => props.navigation.navigate("List")}>
                <Text>go to list demo</Text>
                <Text>go to list demo</Text>
                <Text>go to list demo</Text>
            </TouchableOpacity> */}
            <Button
                onPress={() => props.navigation.navigate("List")}
                title="go to list demo"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 50,
    },
});

export default HomeScreen;
