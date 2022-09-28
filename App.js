import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './store';
import { SafeAreaView } from 'react-native-safe-area-context';
import Drawer from './src/Navigation/Drawer'


export default function App() {

  return (
    <Provider store={store} >
      <NavigationContainer>
        <SafeAreaView style={{
          height: "100%",
        }}>
          <Drawer />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
}


