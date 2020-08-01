import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

// const ComponentScreen = function () {};
const COLOR_INCREMENT = 15;
const reducer = (state, action) => {
    // state==={red:Number, green:Number, blue:Number}
    //action == {colorTochange: 'red' ||'green' || 'blue', amount: 15 || -15}
    // action == { type: "change_red" || "change_green" || "change_blue", payload: 15 || -15 };
    switch (action.colorTochange) {
        case "red":
            return state.red + action.amount > 255 ||
                state.red + action.amount < 0
                ? state
                : { ...state, red: state.red + action.amount };
        case "green":
            return state.green + action.amount > 255 ||
                state.green + action.amount < 0
                ? state
                : { ...state, green: state.green + action.amount };
        case "blue":
            return state.blue + action.amount > 255 ||
                state.blue + action.amount < 0
                ? state
                : { ...state, blue: state.blue + action.amount };
        default:
            return state;
    }
};
const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, {
        red: 0,
        green: 0,
        blue: 0,
    });
    // console.log(state); //{red: 0,green:0,,blue:0}
    const { red, green, blue } = state;
    return (
        <View>
            <Text>Sqaure Screen 2</Text>
            <ColorCounter
                onIncrease={() =>
                    dispatch({ colorTochange: "red", amount: COLOR_INCREMENT })
                }
                onDecrease={() =>
                    dispatch({
                        colorTochange: "red",
                        amount: -1 * COLOR_INCREMENT,
                    })
                }
                color="red"
            />
            <ColorCounter
                onIncrease={() =>
                    dispatch({
                        colorTochange: "green",
                        amount: COLOR_INCREMENT,
                    })
                }
                onDecrease={() =>
                    dispatch({
                        colorTochange: "green",
                        amount: -1 * COLOR_INCREMENT,
                    })
                }
                color="green"
            />
            <ColorCounter
                onIncrease={() =>
                    dispatch({ colorTochange: "blue", amount: COLOR_INCREMENT })
                }
                onDecrease={() =>
                    dispatch({
                        colorTochange: "blue",
                        amount: -1 * COLOR_INCREMENT,
                    })
                }
                color="blue"
            />
            <View
                style={{
                    height: 150,
                    width: 150,
                    backgroundColor: `rgb(${red},${green},${blue})`,
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;
