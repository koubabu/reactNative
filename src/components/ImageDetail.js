import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = ({ title, imageSource }) => {
    return (
        <View>
            <Text>{title}</Text>
            <Image source={imageSource} />
        </View>
    );
};

export default ImageDetail;
