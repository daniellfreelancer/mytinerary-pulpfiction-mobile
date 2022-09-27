import 'react-native-gesture-handler'
import { View, ImageBackground, Image, Button, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel from './Carousel';

export default function Hero({ navigation }) {
    const imgBack = { uri: "https://th.bing.com/th/id/R.961925371291f3512aeac8aaedb6fc40?rik=cCqbFXwxpqCcvA&riu=http%3a%2f%2fwallpapershome.com%2fimages%2fpages%2fpic_v%2f660.jpg&ehk=6NbNZMXb4CkpW8%2f20M1%2bXi8898xTJEBy6wc4D3b%2f1xE%3d&risl=&pid=ImgRaw&r=0" }
    return (
        
        <>
            <ImageBackground source={imgBack} resizeMode="cover" style={styles.image} >

                <Image source={{
                    uri: "https://i.im.ge/2022/09/27/1yY0qS.pulpLogoMOBILE.png",
                }} style={styles.logo} resizeMode="contain" />

                <View style={styles.fixToText}>
                    <Button
                        title="Enter"
                        color="mediumaquamarine"
                        onPress={() => navigation.navigate('Cities')}
                    />
                </View>
                <ScrollView>
                <Carousel/>
                </ScrollView>
                <StatusBar style='auto' />
            </ImageBackground>
        </>
    )
}

const styles = StyleSheet.create({


    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%"
    },
    logo: {
        width: "70%",
        height: 250,
        marginTop: 0
    },
    fixToText: {

        flexDirection: 'column',
        justifyContent: 'space-between',
        width: "40%",
        color: "black"

    }
});