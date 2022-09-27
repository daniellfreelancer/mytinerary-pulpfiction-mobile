import { View, Text, StyleSheet } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import Hero from '../components/Hero'
import Cities from '../components/Cities'

const DrawerNav = createDrawerNavigator()


export default function Drawer() {
  return (
    <DrawerNav.Navigator>
        <DrawerNav.Screen name='Home' component={Hero} />
        <DrawerNav.Screen name='Cities' component={Cities} />
        
    </DrawerNav.Navigator>
  )
}

const styles = StyleSheet.create({

})