import { ScrollView, Text, StyleSheet } from 'react-native'
import React from 'react'
import Cities from '../components/Cities'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CitiesScreen() {
  return (

      <ScrollView>
        <Cities />
      </ScrollView>

  )
}


const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
})