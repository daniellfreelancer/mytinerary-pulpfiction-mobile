import { View, Text, ScrollView, Image, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { useGetItineraryLIKEMutation } from "../features/itineraryAPI";

export default function Itineraries({ navigation, route }) {
  const idCity = route.params.id;
  const nameCity = route.params.name;
  const [idCityItinerary, setIdCityItinerary] = useState("");

  const [itineraryDetail, setItineraryDetail] = useState(null);

  const [getMyTineraries] = useGetItineraryLIKEMutation();

  async function getAllTineraries() {
    try {
      let res = await getMyTineraries(idCity);
      setItineraryDetail(res.data.response);
      setIdCityItinerary(idCity);
    } catch (error) {}
  }

  useEffect(() => {
    getAllTineraries();
  }, [itineraryDetail]);

  return (
    <ScrollView
      style={{
        width: "100%",
        heigth: "100%",
        backgroundColor: "indigo",
      }}
      contentContainerStyle={{
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <View
        style={{
          width: "90%",
          padding: "2%",
          marginHorizontal: "5%",
          marginVertical: "5%",
          alignItems: "center",
          backgroundColor: "mediumpurple",
          borderRadius: 30,
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "black",
            padding: "2%",
          }}
        >
          {nameCity}
        </Text>

        {itineraryDetail !== null ? (
          <View style={{
            alignItems: "center"
          }} >
            {itineraryDetail?.map((i) => {
              let itineraryIMG = { uri: `${i.photo}` };
              let hourDuration = Math.round(i.duration / 60);
              return (
                <View
                  key={i._id}
                  style={{
                    width: "96%",
                    padding: "2%",
                    backgroundColor: "#fff",
                    opacity: 0.8,
                    borderRadius: 30,
                    margin: "2%",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 32,
                      textAlign: "center",
                      padding: 10,
                    }}
                  >
                    {" "}
                    {i.name}{" "}
                  </Text>
                  <Image
                    source={itineraryIMG}
                    style={{
                      width: 330,
                      height: 250,
                      marginTop: 0,
                      borderRadius: 30,
                    }}
                    resizeMode="contain"
                  />
                  <Text
                    style={{
                      padding: "1%",
                      textAlign: "center",
                      fontSize: 25,
                    }}
                  >
                    Duration: {" "}
                        {hourDuration > 1
                          ? hourDuration + ` hours`
                          : hourDuration + ` hour`}
                  </Text>
                  <Text
                    style={{
                      padding: "1%",
                      textAlign: "center",
                      fontSize: 25,
                    }}
                  >
                    {i.tags}
                  </Text>
                  <Text
                    style={{
                      padding: "1%",
                      textAlign: "center",
                      fontSize: 25,
                    }}
                  >
                   Price: $ {i.price}
                  </Text>
                </View>
              );
            })}
          </View>
        ) : (
          <Text>This City has no Itineraries yet</Text>
        )}

        <Button
          title="Go Back to the City"
          color="indigo"
          onPress={() => navigation.navigate("CityDetail", { id: idCity })}
        />
      </View>
    </ScrollView>
  );
}
