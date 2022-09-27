import { View, Text, Image, StyleSheet, Button } from 'react-native'
import React from 'react'

export default function CityCard(props) {

let photoCity = props.photo




  return (
    <View style={styles.containerCity} >
        <Image source={{
                    uri: props.photo,
                }} style={styles.imgCity} resizeMode="cover" />
      <Text style={styles.title}>{props.name}</Text>
      <Text style={styles.info}>{props.info}</Text>
      <Button
      title="Discover"
      color= "indigo"
      />
    </View>
  )
}


const styles = StyleSheet.create({

    imgCity: {
        width: "100%",
        height: 250,
        marginTop: 0,
    },
    containerCity :{
      width: "96%",
      padding: "2%",
      backgroundColor: "white",
      margin: "2%"

    },
    info:{
      padding: "1%",
      textAlign: "justify",

    },
    title: {

      textAlign: "center",
      fontWeight: 'bold',
      fontSize:25,
      fontFamily: "sans-serif"
    }

});