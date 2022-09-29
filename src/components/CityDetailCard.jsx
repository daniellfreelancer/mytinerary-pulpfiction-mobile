import {
  View,
  Text,
  ScrollView,
  Image,
  Button,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useGetCityByIdQuery } from "../features/citiesAPI";
import Loading from "./Loading";
import { useGetItineraryLIKEMutation } from "../features/itineraryAPI";

export default function CityDetailCard({ navigation, route }) {
  const idCity = route.params.id;
 

  const { data: cities } = useGetCityByIdQuery(idCity);
  let cityDetail = cities?.response;
  let cityFundation = new Date(cityDetail?.fundation);
  let yearFundation = cityFundation.getFullYear();

  let photoCity = { uri: `${cityDetail?.photo}` };
  const [viewDetail, setViewDetail] = useState(true)



 

  return (

    <ImageBackground
      source={photoCity}
      resizeMode="cover"
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      {
        viewDetail ? (
          <ScrollView
          style={{
            width: "100%",
            heigth: "100%",
          }}
          contentContainerStyle={{
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          {/* Start View */}
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
            }}
          >
            {/* City */}
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
                color: "black",
                padding: "2%",
              }}
            >
              {cityDetail?.city}
            </Text>
            {/* country */}
            <Text
              style={{
                fontSize: 20,
                color: "black",
                padding: "2%",
              }}
            >
              {cityDetail?.country}
            </Text>
  
            {/* description */}
            <Text
              style={{
                fontSize: 20,
                color: "black",
                padding: "2%",
                textAlign: "justify",
              }}
            >
              {cityDetail?.description}
            </Text>
  
            {/* fundation */}
            <Text
              style={{
                fontSize: 20,
                color: "black",
                padding: "2%",
              }}
            >
              {" "}
              Fundation: {yearFundation}
            </Text>
  
            {/* Population */}
            <Text
              style={{
                fontSize: 20,
                color: "black",
                padding: "2%",
              }}
            >
              {" "}
              Population: {cityDetail?.population}
            </Text>
            <View
              style={{
                width:'100%',
                height:'15%',
                justifyContent:'center',
                alignItems: 'center',
                marginVertical:'2%'
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "indigo",
                  width: "60%",
                  alignItems: "center",
                  borderRadius: 30,
                  marginBottom: 15,
                }}
                onPress={() => navigation.navigate('ItineraryDetail',{id:idCity, name:cityDetail?.city})}
              >
                <Text
                  style={{
                    color: "#d3d3d3",
                    fontWeight: "bold",
                    padding: "5%",
                  }}
                >
                  View Itineraries
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "indigo",
                  width: "60%",
                  alignItems: "center",
                  borderRadius: 30,
                  marginBottom: 15,
                }}
                onPress={() => navigation.navigate('Cities')}
              >
                <Text
                  style={{
                    color: "#d3d3d3",
                    fontWeight: "bold",
                    padding: "5%",
                  }}
                >
                  Go back
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* ends view */}
        </ScrollView>
        ) : <Loading/>
      }

    </ImageBackground>
  )
}
