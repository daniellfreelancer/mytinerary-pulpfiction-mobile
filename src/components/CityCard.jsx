import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function CityCard(props) {

  const navigation = useNavigation()


  return (
    <View style={{
      width: "96%",
      padding: "2%",
      backgroundColor: "#fff",
      opacity: 0.8,
      borderRadius: 30,
      margin: "2%",
      alignItems:'center'
    }}
    >
      <Image source={{
        uri: props.photo,
      }}
        style={{
          width: "100%",
          height: 250,
          marginTop: 0,
          borderRadius: 30,
        }}
        resizeMode="cover"
      />
      <Text style={{
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 30,
        fontFamily: "sans-serif"
      }}>
        {props.name}
      </Text>
      <Text
        style={{
          padding: "1%",
          textAlign: "justify",
          fontSize: 25,
        }}>
        {props.info}
      </Text>
      <TouchableOpacity
                style={{
                  backgroundColor: "indigo",
                  width: "60%",
                  alignItems: "center",
                  borderRadius: 30,
                  marginVertical: 10,
                }}
                onPress={() => navigation.navigate('CityDetail',{id:props.id})}
              >
                <Text
                  style={{
                    color: "#d3d3d3",
                    fontWeight: "bold",
                    padding: "5%",
                  }}
                >
                  Discover!
                </Text>
              </TouchableOpacity>
    </View>
  )
}

