import { View, Text, Image, StyleSheet, FlatList, Animated, Dimensions } from 'react-native'
import React, { useState, useRef } from 'react'
import { useGetAllCitiesQuery } from '../features/citiesAPI'
import { SafeAreaView } from 'react-native-safe-area-context';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const containerCarousel = width * 0.7;
const asideSpace = (width - containerCarousel) / 2
const space = 10;


export default function Carousel() {

    const scrollX = useRef(new Animated.Value(0)).current;

    const [mySearch, setMySearch] = useState("")
    const { data: cities } = useGetAllCitiesQuery(mySearch);

    const carouselCities = cities?.response;

    return (

        <SafeAreaView style={styles.container}>

            <Animated.FlatList
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: true }
                )}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                snapToAlignment="start"
                contentContainerStyle={{
                    paddingTop: 60,
                    marginHorizontal: asideSpace
                }}
                snapToInterval={containerCarousel}
                decelerationRate={0}
                scrollEventThrottle={16}
                data={carouselCities}

                keyExtractor={(item) => item._id}

                renderItem={({ item, index }) => {

                    let photo = item.photo
                    let city = item.city

                    const inputRange = [
                        (index - 1) * containerCarousel,
                        index * containerCarousel,
                        (index + 1) * containerCarousel
                    ];
                    const outputRange = [0, -50, 0];

                    const scrollY = scrollX.interpolate({
                        inputRange,
                        outputRange
                    });
                    return (



                        <View style={{ width: containerCarousel }}>
                            <Animated.View
                                style={{
                                    marginHorizontal: space,
                                    padding: space,
                                    borderRadius: 34,
                                    backgroundColor: '#342359',
                                    alignItems: 'center',
                                    transform: [{ translateY: scrollY }],
                                }}
                            >
                                <Text style={{
                                    color: 'aliceblue',
                                    fontWeight: 'bold',
                                    paddingBottom: 5,
                                    fontSize:20
                                }}> {city} </Text>
                                <Image source={{ uri: photo }} style={styles.posterImage} />

                            </Animated.View>
                        </View>
                    )
                }}

            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
        
    },
    posterImage: {
        width: "100%",
        height: containerCarousel * 1.2,
        resizeMode: 'cover',
        borderRadius: 24,
        margin: 0,
        marginBottom: 10,

    }
})