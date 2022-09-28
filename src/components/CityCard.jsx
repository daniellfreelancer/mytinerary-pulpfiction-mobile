import { View, Text, Image, Button } from 'react-native'
import React from 'react'

export default function CityCard(props) {

  return (
    <View style={{
      width: "96%",
      padding: "2%",
      backgroundColor: "white",
      margin: "2%"
    }}
    >
      <Image source={{
        uri: props.photo,
      }}
        style={{
          width: "100%",
          height: 250,
          marginTop: 0,
        }}
        resizeMode="cover"
      />
      <Text style={{
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 25,
        fontFamily: "sans-serif"
      }}>
        {props.name}
      </Text>
      <Text
        style={{
          padding: "1%",
          textAlign: "justify",
        }}>
        {props.info}
      </Text>
      <Button
        title="Discover"
        color="indigo"
      />
    </View>
  )
}

