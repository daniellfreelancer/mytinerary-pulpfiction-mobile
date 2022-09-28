import { Button, ScrollView, View, Text, TouchableOpacity, ImageBackground, Alert } from 'react-native'
import React, { useRef, useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { useSignInUserMutation } from '../features/userAPI'
import { setUserLogin } from '../features/userAuth';
import AsyncStorage from '@react-native-async-storage/async-storage'



export default function SignIn({navigation}) {
  const imgBack = { uri: "https://th.bing.com/th/id/R.961925371291f3512aeac8aaedb6fc40?rik=cCqbFXwxpqCcvA&riu=http%3a%2f%2fwallpapershome.com%2fimages%2fpages%2fpic_v%2f660.jpg&ehk=6NbNZMXb4CkpW8%2f20M1%2bXi8898xTJEBy6wc4D3b%2f1xE%3d&risl=&pid=ImgRaw&r=0" }
  const [signInUser] = useSignInUserMutation()
  const dispatch = useDispatch()


  const [userInfo, setUserInfo] = useState({
    email: '',
    pass: '',
    from: "form"
  });

  const { email, pass } = userInfo;

  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  const [onBlurInput, setOnBlurInput] = useState(false)

  function redirect(){
    navigation.navigate("MyAccount")
  }


  const handleSignIn = async () => {

    signInUser(userInfo)
      .then((res) => {
        if (res.error) {
          let dataError = res.error;
          let dataMessage = dataError.data;
          Alert.alert(dataMessage)

        } else {

          let dataResponse = res.data;
          let dataSuccess = dataResponse.message;

          Alert.alert(dataSuccess)
          dispatch(setUserLogin(res.data.response.user))

          AsyncStorage.setItem('token',JSON.stringify(res.data.response.token))
          redirect()
        }
      })
      .catch((error) => {
        console.log(error);
      });

      const myToken = await AsyncStorage.getItem('token')

    setUserInfo({
      email: '',
      pass: '',
      from: "form"
    })

  }


  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#DCDCDC',
      }}
      contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
        height: "100%"
      }}>
      <ImageBackground
        source={imgBack}
        resizeMode="cover"
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%"
        }}
      >
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
          }}
        >Sign In</Text>

        <View
          style={{
            borderBottomColor: '#F5FCFF',
            backgroundColor: '#FFFFFF',
            borderRadius: 30,
            borderBottomWidth: 1,
            width: 300,
            height: 45,
            marginBottom: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <TextInput
            style={{
              height: 45,
              marginLeft: 16,
              borderBottomColor: '#d3d3d3',
              flex: 1,
            }}
            value={email}
            onChangeText={value => handleOnChangeText(value, 'email')}
            label='email'
            placeholder='example@email.com'
            autoCapitalize='none'
            blurOnSubmit={onBlurInput}
          />
        </View>
        <View
          style={{
            borderBottomColor: '#F5FCFF',
            backgroundColor: '#FFFFFF',
            borderRadius: 30,
            borderBottomWidth: 1,
            width: 300,
            height: 45,
            marginBottom: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <TextInput
            style={{
              height: 45,
              marginLeft: 16,
              borderBottomColor: '#d3d3d3',
              flex: 1,
            }}
            value={pass}
            onChangeText={value => handleOnChangeText(value, 'pass')}
            label='Password'
            placeholder='********'
            autoCapitalize='none'
            secureTextEntry
          />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: 'indigo',
            width: '60%',
            alignItems: 'center',
            borderRadius: 30,
            marginBottom:50
          }}
          onPress={handleSignIn}
        >
          <Text
            style={{
              color: "#d3d3d3",
              fontWeight: 'bold',
              padding: '5%',
            }}
          >Enter!</Text>
        </TouchableOpacity>
                
        <View style={{
                    justifyContent: 'center',
                    alignItems:'center',
                    width: "40%",
                    color: "black"
                }}>
                    <Button
                        title="Don't have an Account? Sign Up!"
                        color="indigo"
                        onPress={() => navigation.navigate('SignUp')}
                    />
                </View>
      </ImageBackground>
    </ScrollView>
  )
}