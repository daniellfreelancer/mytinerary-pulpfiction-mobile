import { createDrawerNavigator } from '@react-navigation/drawer'
import React, {useState, useEffect} from 'react'
import CitiesScreen from '../Screens/CitiesScreen'
import HomeScreen from '../Screens/HomeScreen'
import SignInScreen from '../Screens/SignInScreen'
import SignUpScreen from '../Screens/SignUpScreen'
import CityDetails from '../Screens/CityDetails'
import MyAccountScreen from '../Screens/MyAccountScreen'


const DrawerNav = createDrawerNavigator()



export default function Drawer() {


  return (
    <DrawerNav.Navigator>
        <DrawerNav.Screen name='Home' component={HomeScreen} />
        <DrawerNav.Screen name='Cities' component={CitiesScreen} />
       
        <DrawerNav.Screen name='MyAccount' component={MyAccountScreen} />
      
        
        <DrawerNav.Screen name='SignIn' component={SignInScreen} />
        <DrawerNav.Screen name='SignUp' component={SignUpScreen} />
        {/* <DrawerNav.Screen name='CityDetail' component={CityDetails} /> */}
    </DrawerNav.Navigator>
  )
}
