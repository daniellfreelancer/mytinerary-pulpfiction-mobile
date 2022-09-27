import { View, Text, StyleSheet, Button, StatusBar } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGetAllCitiesQuery } from "../features/citiesAPI";
import { FlatList } from "react-native-gesture-handler";
import CityCard from "./CityCard";

export default function Cities({ navigation }) {

  const [mySearch, setMySearch] = useState("")
  const { data: cities } = useGetAllCitiesQuery(mySearch);

  const myCities = cities?.response;
  
  return (
    <>
      <View style={styles.containerCity}>
        <View>
        <Text style={styles.title}>Cities</Text>
        </View>
        
        <FlatList
        data={myCities}
        numCollumns={2}
        showVerticalScrollIndicator={false}
        keyExtractor={(city) => city._id}
        renderItem={({item}) => <CityCard name={item.city} photo={item.photo} info={item.smalldescription}/>}
      />
      <View style={styles.buttonCities}>
      <Button
          title="Go Home"
          color="mediumaquamarine"
          onPress={() => navigation.navigate("Home")}
          
        />
      </View>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  containerCity: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: 'mediumpurple'
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    padding: 10,
    textShadowColor: 'indigo'

  },
  buttonCities:{
    margin:10
  }
});
