import React, { useState, useEffect } from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { Text } from 'react-native-elements'
import  { requestPermissionsAsync } from 'expo-location'
import Map from '../components/Map'

const TrackCreateScreen = () => {

    const [err, setErr] = useState(null)

    const startWatching = async () => {
        try {
            await requestPermissionsAsync()
        } catch (e) {
            setErr(e)
        }
    }

    useEffect(() => {
        startWatching()
    }, [])

    return (
        <SafeAreaView>
            <Text h2>Create a Track</Text>
            <Map />
            {err ? <Text>{err.message}</Text> : null}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})

export default TrackCreateScreen