import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { Controller } from 'react-hook-form'

// these are like spaces where text can be inputted
// so far, it's been used as the input for the username and password, as well as inputs in the subsequent startup pages
const CustomInput = ({control, name, rules={}, placeholder, secureTextEntry }) => {
    return (
        <Controller
            control={control}
            name = {name}
            rules={rules}
            render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
                <>
                    <View style={[styles.container]}>
                        <TextInput 
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            placeholder={placeholder}
                            style={styles.input}
                            textAlignVertical="bottom" // Charz: somehow this aligns it to the center, I don't get it either
                            secureTextEntry={secureTextEntry}
                        />
                    </View>
                    {error && (<Text style={{color: 'white', alignSelf: 'stretch'}}>{error.message || 'Error'}</Text>)}
                </>
            )}
        />
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