import { View, Text, ScrollView, Image, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Profile({ navigation }) {

    const userLogged = useSelector((state) => state.auth)
 

    const [userExist, setUserExist] = useState()
    const [userRender, setUserRender] = useState(null)
    

    AsyncStorage.getItem('token').then((value) => setUserRender(JSON.parse(value)))

    useEffect(() => {

        setUserExist(userLogged)

    }, [userRender])

    console.log(userRender)




    return (
        <>
            {
                userRender !== null ? (

                    <ScrollView
                        style={{
                            backgroundColor: 'indigo',
                            height: "100%"
                        }}
                        contentContainerStyle={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <Text
                            style={{
                                fontWeight: 'bold',
                                paddingVertical: '3%',
                                paddingHorizontal: '10%',
                                margin: '5%',
                                fontSize: 30,
                                color: 'indigo',
                                borderRadius: 30,
                                backgroundColor: '#d3d3d3'
                            }}>Profile</Text>
                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: "90%",
                                backgroundColor: 'mediumpurple',
                                marginBottom: 10,
                                borderRadius: 30,
                                padding: '5%'
                            }}>
                            <Image
                                style={{
                                    height: 300,
                                    width: 300,
                                    padding: '5%',
                                    borderRadius: 150
                                }} source={{uri :userLogged.photo}} />
                            <Text
                                style={{
                                    paddingVertical: "1%",
                                    fontSize: 20,
                                    color: 'black',
                                    fontWeight: 'bold'

                                }}> {userLogged.name} </Text>
                            <Text
                                style={{
                                    paddingVertical: "1%",
                                    fontSize: 20,
                                    color: 'black',

                                }}> {userLogged.email} </Text>
                            <Text
                                style={{
                                    paddingVertical: "1%",
                                    fontSize: 20,
                                    color: 'black',

                                }}> {userLogged.country} </Text>
                            <Text
                                style={{
                                    paddingVertical: "1%",
                                    fontSize: 20,
                                    color: 'black',

                                }}> {userLogged.role} </Text>
                        </View>

                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: "90%",
                                backgroundColor: 'mediumpurple',
                                marginBottom: 10,
                                borderRadius: 30,
                                padding: 10
                            }}>
                            <Button
                                title="Button Here"
                            />
                        </View>



                    </ScrollView>
                ) : (
                    <ScrollView
                        style={{
                            backgroundColor: 'indigo',
                            height: "100%"
                        }}
                        contentContainerStyle={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: "90%",
                                backgroundColor: 'mediumpurple',
                                marginBottom: 10,
                                borderRadius: 30,
                                padding: 10
                            }}>
                            <Button
                                title="Go to SignIn"
                                onPress={() => navigation.navigate('SignIn')}
                            />
                        </View>
                    </ScrollView>
                )
            }
        </>

    )
}