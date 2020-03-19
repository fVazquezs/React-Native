import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ImageDetail from '../components/ImageDetail'

export default () => {
    return(
        <View>
            <Text>Image Screen </Text>
            <ImageDetail 
                title="beach"
                imageSource={require('../../assets/beach.jpg')}
            />
            <ImageDetail 
                title="forest"
                imageSource={require('../../assets/forest.jpg')}
            />
            <ImageDetail 
                title="mountain"
                imageSource={require('../../assets/mountain.jpg')}
            />
        </View>
    )
}

const Styles = StyleSheet.create({
    text: {

    }
})