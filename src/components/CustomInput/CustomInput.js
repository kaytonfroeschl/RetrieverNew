import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

// these are like spaces where text can be inputted
// so far, it's been used as the input for the username and password, as well as inputs in the subsequent startup pages
const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
    return (
        <View style={styles.container}>
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

// defining the styles for the inputs (how they look)
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: 40,
        margin: 8,
        borderRadius: 5,

        paddingHorizontal: 10,
    },

    input: {}
})

export default CustomInput