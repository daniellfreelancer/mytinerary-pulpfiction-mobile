import { ScrollView } from 'react-native'
import React from 'react'
import Hero from '../components/Hero'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen({navigation}) {

    return (

        <ScrollView>
            <Hero navigation={navigation}/>
        </ScrollView>
    )
}