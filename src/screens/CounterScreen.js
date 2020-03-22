import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default () => {
    const [counter, setCounter] = useState(0)
    return (
        <View>
            <Button title="increase" onPress={() => setCounter(counter + 1)} />
            <Button title="decrease" onPress={() => setCounter(counter - 1)} />
            <Text>Current counter: {counter} </Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    text: {

    }
})