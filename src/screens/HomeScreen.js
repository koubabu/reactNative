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
            <Text>Reusbale components</Text>
            <Button
                onPress={() => props.navigation.navigate("Image")}
                title="go to Image screen demo"
            />
            <Text>state management</Text>
            <Button
                onPress={() => props.navigation.navigate("Counter")}
                title="go to Counter screen demo"
            />
            <Button
                onPress={() => props.navigation.navigate("Color")}
                title="go to Color screen demo"
            />
            <Text>used State</Text>
            <Button
                onPress={() => props.navigation.navigate("Sqaure")}
                title="go to Sqaure screen demo"
            />
            <Text>Used reducer</Text>
            <Button
                onPress={() => props.navigation.navigate("Sqaure2")}
                title="go to Sqaure screen 2 demo"
            />
            <Text>text screen</Text>
            <Button
                onPress={() => props.navigation.navigate("TextInput")}
                title="go to TextInput screen demo"
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
