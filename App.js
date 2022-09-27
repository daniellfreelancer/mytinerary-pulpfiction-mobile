import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Stack from './src/Navigation/Stack';


export default function App() {

  return (
    <NavigationContainer>
        {/* <Drawer/> */}
        <Stack/>
    </NavigationContainer>
  );
}
