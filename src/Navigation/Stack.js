import React from 'react'
import Hero from '../components/Hero'
import Cities from '../components/Cities'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const StackNavigator = createNativeStackNavigator()

export default function Stack() {
  return (
    <StackNavigator.Navigator>

        <StackNavigator.Screen name='Home' component={Hero} options={{ title: 'Welcome to Pulp-Fiction Travels' }} />
        <StackNavigator.Screen name='Cities' component={Cities} />

    </StackNavigator.Navigator>
  )
}
