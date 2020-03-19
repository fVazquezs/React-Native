import React from 'react'
import { Text, View, StyleSheet, Image } from "react-native";

export default ({ title, imageSource }) => {
    return (
        <View>
            <Text>{title}</Text>
            <Image source={imageSource} />
        </View>
    )
}

const Styles = StyleSheet.create({})