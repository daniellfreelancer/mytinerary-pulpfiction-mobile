import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import { useGetAllCitiesQuery } from "../features/citiesAPI";
import CityCard from "./CityCard";
import CityNotFound from "./CityNotFound";
import SearchInput from "./SearchInput";

export default function Cities({ navigation }) {

  const [mySearch, setMySearch] = useState("")
  const { data: cities } = useGetAllCitiesQuery(mySearch);

  const myCities = cities?.response;

  return (

    <View
      style={{
        flex: 1,
        width: "100%",
        backgroundColor: 'mediumpurple'
      }}
      contentContainerStyle={{
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
      decelerationRate={0}
    >
      <Text style={{
        fontSize: 32,
        textAlign: 'center',
        padding: 10,
        textShadowColor: 'indigo'
      }}>
        Cities
      </Text>
      <SearchInput
        value={mySearch}
        onChangeText={(mySearch) => setMySearch(mySearch)}

      />
      {
        myCities?.length === 0 ? <CityNotFound /> : null
      }
      {
        myCities?.map((item) =>
          <CityCard
            key={item._id}
            name={item.city}
            photo={item.photo}
            info={item.smalldescription}
            id={item._id}
          />)
      }

      <View style={{
        margin: 10
      }}>
        <Button
          title="Go Home"
          color="mediumaquamarine"
          onPress={() => navigation.navigate("Home")}

        />
      </View>

    </View>

  );
}
