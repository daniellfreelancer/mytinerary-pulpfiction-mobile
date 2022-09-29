import { View, Text, Image } from 'react-native'
import React from 'react'

export default function Loading() {
  return (
    <View
    style={{
        width: "90%",
        padding: "2%",
        marginHorizontal: "5%",
        marginVertical: "5%",
        alignItems: "center",
        backgroundColor: "#fff",
        opacity: 0.8,
        borderRadius: 30,
      }}>
        <Image
          source={{
            uri: "https://cdn.travelplace.ch/common/images/general/waiting-page.gif"
          }}
          style={{
            width:300,
            height:300
          }}
          />
    </View>
  )
}