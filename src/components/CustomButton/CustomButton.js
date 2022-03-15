import React from 'react'
import {View, Text, StyleSheet, Pressable } from 'react-native'

// setting up the buttons used in the login page as well as several subsequent pages
// the buttons are defined as pressable so that they can be pressed
// this is done here so as to not repeat the same code in multiple places


// pretty much defining that we're making a button, and explaining what it does and how it looks
const CustomButton = ({onPress, text, type = "PRIMARY", backgroundColor, foregroundColor}) => {
    return (
        <Pressable 
            onPress={onPress} 
            style={[
                styles.container, 
                styles[`container_${type}`],
                backgroundColor ? {backgroundColor: backgroundColor} : {},
            ]}>
            <Text 
                style={[
                    styles.text, 
                    styles[`text_${type}`],
                    foregroundColor ? {color: foregroundColor} : {},
                ]}>
                    {text}
                </Text>
        </Pressable>
    ) 
}

// creating the styles for the buttons (how they look)
const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
        marginVertical: 10,

        alignItems: 'center',
        borderRadius: 5,
    },

    container_PRIMARY: {
        backgroundColor: '#F3A747',
    },

    container_SECONDARY: {
        borderColor: '#5873AA',
        borderWidth: 2,
    },

    container_TERTIARY: {

    },

    text: {
        fontWeight: 'bold',
    },

    text_PRIMARY: {
        color: 'white',
        
    },

    text_SECONDARY: {
        color: 'white',
    },

    text_TERTIARY: {
        color: 'white',
        fontWeight: 'normal',
    },
})

export default CustomButton