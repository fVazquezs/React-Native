import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

export default () => {

    const [password, setPassword] = useState('')

    return (
        <View>
        <Text>Enter password:</Text>
        <TextInput
            style={Styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={password}
            onChangeText={(e) => setPassword(e)}
        />
        {password.length < 4 ? <Text>Password must be longer</Text> : 
        <Text>My password is: {password}</Text>}
        </View>
    )
}

const Styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
})