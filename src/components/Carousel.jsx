import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'



export default function Carousel() {
    return (
        <View styles='styles.container'>
            <Image
                source='https://i.im.ge/2022/08/31/OE8kcM.baliTemple.png'
                styles={styles.carouselImg} />
            <Text>This is a title</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100',

    }
})