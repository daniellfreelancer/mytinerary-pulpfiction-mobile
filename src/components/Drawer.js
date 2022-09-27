import { View, Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import Hero from './Hero'
import Cities from './Cities'

const DrawerNav = createDrawerNavigator()


export default function Drawer() {
  return (
    <DrawerNav.Navigator>
        <DrawerNav.Screen name='Home' component={Hero} />
        <DrawerNav.Screen name='Cities' component={Cities} />
        
    </DrawerNav.Navigator>
  )
}