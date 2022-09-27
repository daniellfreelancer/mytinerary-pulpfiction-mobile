import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './src/Navigation/Stack';
import { Provider } from 'react-redux';
import store from './store';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';


export default function App() {

  return (
    <Provider store={store} >
    <NavigationContainer>
        {/* <Drawer/> */}
        <SafeAreaView style={styles.container}>
        <Stack/>
        </SafeAreaView>
    </NavigationContainer>
    </Provider>
  );
}


const styles = StyleSheet.create({
  container: {
    height: "100%",
},
})