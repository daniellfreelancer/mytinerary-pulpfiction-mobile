import { View, Image, Text } from 'react-native'
import React from 'react'

export default function CityNotFound() {

    let img404 = "https://i.im.ge/2022/09/28/1EOJPK.nothinghere.png"

    return (
        <View style={{

            justifyContent: 'center',
            alignItems: 'center',

        }}>
            <Image
                source={{
                    uri: "https://i.im.ge/2022/09/28/1E2A7W.1EOJPK-nothinghere-removebg-preview.png"
                }}
                style={{
                    width: 400,
                    height: 400,
                    resizeMode: 'contain',
                    margin: 71
                }}
            />


        </View>
    )
}