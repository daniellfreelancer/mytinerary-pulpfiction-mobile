import { View, Text, StyleSheet } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import Hero from '../components/Hero'
import Cities from '../components/Cities'
import CityNotFound from '../components/CityNotFound'
import CitiesScreen from '../Screens/CitiesScreen'
import HomeScreen from '../Screens/HomeScreen'

const DrawerNav = createDrawerNavigator()


export default function Drawer() {
  return (
    <DrawerNav.Navigator>
        <DrawerNav.Screen name='Home' component={HomeScreen} />
        <DrawerNav.Screen name='Cities' component={CitiesScreen} />
        <DrawerNav.Screen name='Test' component={CityNotFound} />
    </DrawerNav.Navigator>
  )
}
