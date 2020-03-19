import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ImageDetail from '../components/ImageDetail'

export default () => {
    return(
        <View>
            <Text>Image Screen </Text>
            <ImageDetail 
                title="Forest"
            />
            <ImageDetail 
                title="Nature"
            />
            <ImageDetail 
                title="Water"
            />
        </View>
    )
}

const Styles = StyleSheet.create({
    text: {

    }
})