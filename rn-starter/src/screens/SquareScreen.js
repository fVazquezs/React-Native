import React, { useReducer } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const COLOR_CHANGE = 20

const reducer = (state, action) => {
    switch (action.type) {
        case 'change_red':
            return 0 < state.red + action.payload < 256 ? { ...state, red: state.red + action.payload } : state
        case 'change_green':
            return 0 < state.green + action.payload < 256 ? { ...state, green: state.green + action.payload } : state
        case 'change_blue':
            return 0 < state.blue + action.payload < 256 ? { ...state, blue: state.blue + action.payload } : state
        default:
            break;
    }

}

export default () => {

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })

    return (
        <View>
            <ColorCounter
                color="red"
                increase={() => dispatch({ type: 'change_red', payload: COLOR_CHANGE })}
                decrease={() => dispatch({ type: 'change_red', payload: -1 * COLOR_CHANGE })}
            />
            <ColorCounter
                color="green"
                increase={() => dispatch({ type: 'change_green', payload: COLOR_CHANGE })}
                decrease={() => dispatch({ type: 'change_green', payload: -1 * COLOR_CHANGE })}
            />
            <ColorCounter
                color="blue"
                increase={() => dispatch({ type: 'change_blue', payload: COLOR_CHANGE })}
                decrease={() => dispatch({ type: 'change_blue', payload: -1 * COLOR_CHANGE })}
            />

            <View style={{ height: 100, width: 100, backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})` }} />
        </View>
    )
}


const Styles = StyleSheet.create({
    text: {

    }
})