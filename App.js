import 'react-native-gesture-handler'
import React from 'react';
import Hero from './src/components/Hero';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Drawer from './src/components/Drawer';


export default function App() {

  return (
    <NavigationContainer>
        <Drawer/>
    </NavigationContainer>
  );
}
