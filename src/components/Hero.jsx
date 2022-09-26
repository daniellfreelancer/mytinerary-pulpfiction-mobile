import { View, Text, ImageBackground, Image, Button, StyleSheet } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Hero() {
    const logo = { uri: "https://raw.githubusercontent.com/daniellfreelancer/citiesCloudImg/main/logoPulp.png" }
    const imgBack = { uri: "https://th.bing.com/th/id/R.961925371291f3512aeac8aaedb6fc40?rik=cCqbFXwxpqCcvA&riu=http%3a%2f%2fwallpapershome.com%2fimages%2fpages%2fpic_v%2f660.jpg&ehk=6NbNZMXb4CkpW8%2f20M1%2bXi8898xTJEBy6wc4D3b%2f1xE%3d&risl=&pid=ImgRaw&r=0" }
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={imgBack} resizeMode="cover" style={styles.image} >

                <Image source={{
                    uri: "https://raw.githubusercontent.com/daniellfreelancer/citiesCloudImg/main/logoPulp.png",
                }} style={styles.logo} resizeMode="contain" />

                <View style={styles.fixToText}>
                    <Button
                        title="Enter"
                        color="indigo"
                    />
                </View>
            </ImageBackground>
            <StatusBar style='auto'/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
      },

    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%"
    },
    logo: {
        width: "100%",
        height: 250,
        backgroundColor: "black",
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 15
    }
});