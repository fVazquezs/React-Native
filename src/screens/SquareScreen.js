import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const COLOR_CHANGE = 20

export default () => {
    const [red, setRed] = useState(10)
    const [green, setGreen] = useState(10)
    const [blue, setBlue] = useState(10)

    const setColor = (currentValue, change) => {
        const finalValue = currentValue + change
        if (finalValue > 255 || finalValue < 0) {
            return false
        } else {
            return true
        }
    }

    return (
        <View>
            <ColorCounter
                color="red"
                increase={() => {
                    if (setColor(red, COLOR_CHANGE))
                        setRed(red + COLOR_CHANGE)
                }}
                decrease={() => {
                    if (setColor(red, -1 * COLOR_CHANGE))
                        setRed(red - COLOR_CHANGE)
                }}
            />
            <ColorCounter
                color="green"
                increase={() => {
                    if (setColor(green, COLOR_CHANGE))
                        setGreen(green + COLOR_CHANGE)
                }}
                decrease={() => {
                    if (setColor(green, -1 * COLOR_CHANGE))
                        setGreen(green - COLOR_CHANGE)
                }}
            />
            <ColorCounter
                color="blue"
                increase={() => {
                    if (setColor(blue, COLOR_CHANGE))
                        setBlue(blue + COLOR_CHANGE)
                }}
                decrease={() => {
                    if (setColor(blue, -1 * COLOR_CHANGE))
                        setBlue(blue - COLOR_CHANGE)
                }}
            />

            <View style={{ height: 100, width: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
        </View>
    )
}


const Styles = StyleSheet.create({
    text: {

    }
})