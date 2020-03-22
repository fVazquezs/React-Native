import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default ({ color, increase, decrease }) => {
    return (
        <View>
            <Text>{color}</Text>
            <Button title={`Increase ${color}`} onPress={() => {
                increase(10)
            }} />
            <Button title={`Decrease ${color}`} onPress={() => {
                decrease(10)
            }} />
        </View>
    ) 
}


const Styles = StyleSheet.create({
    text: {

    }
})