import { View, Text } from 'react-native'
import React from 'react'
import Itineraries from '../components/Itineraries'

export default function ItinerariesScreen({navigation, route}) {
  return (

      <Itineraries navigation={navigation} route={route}/>

  )
}