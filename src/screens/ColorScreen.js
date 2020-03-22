import React, { useState } from 'react'
import { View, StyleSheet, Button } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

export default () => {
    const [colors, setColors] = useState([])
    return (
        <View>
            <Button title="Add a color" onPress={() => {
                setColors([...colors, randomRgb()])
                console.log(colors)
            }} />
            <FlatList
                keyExtractor={(color) => color}
                data={colors}
                renderItem={({ item }) => <View style={{ height: 100, width: 100, backgroundColor: item }} />}
            />
        </View>
    )
}

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    return `rgb(${red}, ${green}, ${blue})`
}


const Styles = StyleSheet.create({
    text: {

    }
})