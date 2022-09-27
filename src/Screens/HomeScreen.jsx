import { View, ScrollView } from 'react-native'
import React from 'react'
import Hero from '../components/Hero'

export default function HomeScreen() {
    return (
        <ScrollView>
        <View>
            <Hero />
        </View>
    </ScrollView>
    )
}