import { View, Text, ScrollView, Image, Button, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { setUserLogout } from '../features/userAuth'
import { useSignOutUserMutation } from '../features/userAPI'

export default function Profile({ navigation }) {

    const userLogged = useSelector((state) => state.auth)
    const dispatch = useDispatch()
 

    const [userExist, setUserExist] = useState()
    const [userRender, setUserRender] = useState(null)
    const [myUser, setMyUser] = useState([])
    const [signOutUser] = useSignOutUserMutation()
    
   // 
    

    const getData = async () => {
        try {
        const value = await AsyncStorage.getItem('token')
        if(value !== null) {
            // value previously stored
            setUserRender(value)
            setMyUser(userLogged)
        } else {
            dispatch(setUserLogout())
            setUserRender(null)
        }
        } catch(e) {
        // error reading value

        }
    }
    



    function getMyData(){
        AsyncStorage.getItem('token')
        .then((value) => {
            if(value !== null) {
                // value previously stored
                setUserRender(JSON.parse(value))
                setMyUser(userLogged)
                console.log('Line 53')
                console.log(userRender)

            } else {

 
 
                console.log('Line 59')
                console.log(userRender)
            }
            
            setMyUser(userLogged)
        } ).catch((error)=>{
            console.log(error)
            AsyncStorage.clear()
        }
        )
    }


    let userMail = {
        email: userLogged.email,
      };
    

    async function handleClear(){


          signOutUser(userMail)
          .then((res) => {
            if (res.error) {
              let dataError = res.error;
              let dataMessage = dataError.data;
              Alert.alert(dataMessage)

            } else {
              let dataResponse = res.data;
              let dataSuccess = dataResponse.message;
              Alert.alert(dataSuccess)

               AsyncStorage.clear()

                //setUserRender(null)
                dispatch(setUserLogout())
                console.log('Done.')
                setTimeout(()=>{
                    navigation.navigate('Home')
                },2000)
                
            }
          })
          .catch((error) => {
            console.log(error);
          });

     //   navigation.navigate('Home')
    }

    //testmytinerary@protonmail.com
    useEffect(() => {
        
        //   getData()
           getMyData()
   
       }, [userLogged])


    return (
        <>
            {
                userRender !== null && userLogged.logged ? (

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
                                    borderRadius: 150,
                                    resizeMode:'cover'
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
                                justifyContent: 'space-around',
                                alignItems: 'center',
                                width: "90%",
                                backgroundColor: 'mediumpurple',
                                marginBottom: 10,
                                borderRadius: 30,
                                padding: 10
                            }}>
                            <Button
                                title="Sign Out"
                                onPress={handleClear}
                            />

                        </View>



                    </ScrollView>
                ) : (
                    <ScrollView
                        style={{
                            backgroundColor: 'indigo',
                            height: "100%",
                            
                        }}
                        contentContainerStyle={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>

                            
                        <View
                            style={{
                                justifyContent: 'space-around',
                                alignItems: 'center',
                                width: "90%",
                                backgroundColor: '#d3d3d3',
                                marginBottom: 10,
                                borderRadius: 30,
                                padding: 20,
                                margin:"40%"

                            }}>
                                <Image 
                                source={{
                                    uri:'https://i.im.ge/2022/09/29/13xSPM.wepik-photo-mode-2022829-1108-removebg-preview-1.png'
                                }}
                                style={{
                                    width:300,
                                    height:370,
                                    padding:"2%",
                                    
                                    // https://i.im.ge/2022/09/29/13CBZ4.wepik-photo-mode-2022829-104456.png
                                }}
                                />
                            <Button
                                title="Go to SignIn"
                                onPress={() => navigation.navigate('SignIn')}
                                color="indigo"
                            />
                        </View>
                    </ScrollView>
                )
            }
        </>

    )
}