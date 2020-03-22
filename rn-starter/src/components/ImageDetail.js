import React from 'react'
import { Text, View, StyleSheet, Image } from "react-native";

export default ({ title, imageSource, score }) => {
    return (
        <View>
            <Text>{title}</Text>
            <Image source={imageSource} />
            <Text>Image score: {score}</Text>
        </View>
    )
}

const Styles = StyleSheet.create({})