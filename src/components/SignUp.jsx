import { View, Text, TouchableOpacity, ScrollView, ImageBackground, Button , Alert} from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { useSignUpUserMutation } from '../features/userAPI'
import { useDispatch } from 'react-redux'

export default function SignUp({navigation}) {
    const imgBack = { uri: "https://th.bing.com/th/id/R.961925371291f3512aeac8aaedb6fc40?rik=cCqbFXwxpqCcvA&riu=http%3a%2f%2fwallpapershome.com%2fimages%2fpages%2fpic_v%2f660.jpg&ehk=6NbNZMXb4CkpW8%2f20M1%2bXi8898xTJEBy6wc4D3b%2f1xE%3d&risl=&pid=ImgRaw&r=0" }
    const [signUpUser] = useSignUpUserMutation()
    const dispatch = useDispatch()

    const [userInfo, setUserInfo] = useState({
        name: '',
        lastName: '',
        country: '',
        photo: '',
        email: '',
        pass: '',
        from: "form",
        role:'user'
    });

    const { name, lastName, country, photo, email, pass } = userInfo;

    const handleOnChangeText = (value, fieldName) => {
        setUserInfo({ ...userInfo, [fieldName]: value });
    };
    

    const [onBlurInput, setOnBlurInput] = useState(false)
    function redirect(){
        navigation.navigate("SignIn")
      }
    

    const handleSignUp = async ()  =>{
        signUpUser(userInfo)
        .then((res) => {
          if (res.error) {
            let dataError = res.error;
            let dataMessage = dataError.data;
            Alert.alert(dataMessage)
  
          } else {
  
            let dataResponse = res.data;
            let dataSuccess = dataResponse.message;
  
            Alert.alert(dataSuccess)


            redirect()
          }
        })
        .catch((error) => {
          console.log(error);
        });
  
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
                        fontSize: 25,
                        color: 'indigo',
                        borderRadius: 30,
                        backgroundColor: '#d3d3d3'
                    }}
                >Sign Up</Text>

                <View
                    style={{
                        borderBottomColor: '#F5FCFF',
                        backgroundColor: '#FFFFFF',
                        borderRadius: 30,
                        borderBottomWidth: 1,
                        width: 300,
                        height: 35,
                        marginBottom: 15,
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
                        value={name}
                        onChangeText={value => handleOnChangeText(value, 'name')}
                        label='name'
                        placeholder='Your Name..'
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
                        height: 35,
                        marginBottom: 15,
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
                        value={lastName}
                        onChangeText={value => handleOnChangeText(value, 'lastName')}
                        label='lastName'
                        placeholder='Your Last Name..'
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
                        height: 35,
                        marginBottom: 15,
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
                        value={country}
                        onChangeText={value => handleOnChangeText(value, 'country')}
                        label='country'
                        placeholder='Your Country..'
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
                        height: 35,
                        marginBottom: 15,
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
                        value={photo}
                        onChangeText={value => handleOnChangeText(value, 'photo')}
                        label='photo'
                        placeholder='Url of your photo..'
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
                        height: 35,
                        marginBottom: 15,
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
                        placeholder='Your Email..'
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
                        height: 35,
                        marginBottom: 15,
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
                        label='pass'
                        placeholder='Your password..'
                        autoCapitalize='none'
                        blurOnSubmit={onBlurInput}
                    />
                </View>


                <TouchableOpacity
                    style={{
                        backgroundColor: 'indigo',
                        width: '60%',
                        alignItems: 'center',
                        borderRadius: 30,
                        marginBottom:30
                    }}
                    onPress={handleSignUp}
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
                        title="Got an Account? Sign In!"
                        color="indigo"
                        onPress={() => navigation.navigate('SignIn')}
                    />
                </View>
            </ImageBackground>
        </ScrollView>
    )
}