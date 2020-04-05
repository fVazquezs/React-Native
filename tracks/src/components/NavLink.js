import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Spacer from './Spacer'
import { Text } from 'react-native-elements'
import { navigate } from '../navigationRef'

const NavLink = ({ text, routeName }) => {
    return (
        <TouchableOpacity onPress={() => navigate(routeName)}>
            <Spacer>
                <Text style={styles.link}>{text}</Text>
            </Spacer>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    link: {
        color: 'blue'
    }
})

export default NavLink