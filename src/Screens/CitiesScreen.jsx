import { View, Text } from 'react-native'
import React from 'react'
import Cities from '../components/Cities'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CitiesScreen() {
  return (
    <SafeAreaView>
    <View>
      <Cities/>
    </View>
    </SafeAreaView>
  )
}