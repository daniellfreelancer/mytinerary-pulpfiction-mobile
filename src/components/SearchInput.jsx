import { View, TextInput } from 'react-native'
import React from 'react'

export default function SearchInput(props) {

    

    return (
        <View style={{
            width: "100%",
            alignItems: 'center'
        }}>

            <TextInput
                style={{
                    width: "90%",
                    padding: "2%",
                    backgroundColor: '#fff',
                    borderRadius: 34
                }}
                value={props.value}
                placeholder="Find a City..."
                onChangeText={props.onChangeText}

            />

        </View>
    )
}