import { View, Text } from 'react-native'
import React from 'react'
import CityDetailCard from '../components/CityDetailCard'

export default function CityDetails({navigation,route}) {
  return (
      <CityDetailCard navigation={navigation} route={route}/>
  )
}