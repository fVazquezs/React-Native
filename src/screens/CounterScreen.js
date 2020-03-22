import React, { useReducer } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const reducer = (state, action) => {
    switch (action.type) {
        case 'increase':
            return { ...state, count: state.count + 1 }
        case 'decrease':
            return { ...state, count: state.count - 1 }
        default:
            break;
    }
}

export default () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 })
    return (
        <View>
            <Button title="increase" onPress={() => dispatch({ type: 'increase' })} />
            <Button title="decrease" onPress={() => dispatch({ type: 'decrease' })} />
            <Text>Current counter: {state.count} </Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    text: {

    }
})