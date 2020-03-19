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
                score={9}
            />
            <ImageDetail 
                title="forest"
                imageSource={require('../../assets/forest.jpg')}
                score={6}
            />
            <ImageDetail 
                title="mountain"
                imageSource={require('../../assets/mountain.jpg')}
                score={4}
            />
        </View>
    )
}

const Styles = StyleSheet.create({
    text: {

    }
})