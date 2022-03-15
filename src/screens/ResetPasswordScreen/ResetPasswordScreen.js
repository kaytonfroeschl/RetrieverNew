/* eslint-disable prettier/prettier */
import React, {useState} from 'react'
import {View, Text, StyleSheet, ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'

import Parse from 'parse/react-native.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
Parse.initialize('XwnlQIY0f0GyOzt5DftAZEYLOy9YZmT26ZIktF94', 'L4fRRElgmLuKvanPenznzblgXwqDJGtxIKG0dB8j');
Parse.serverURL = 'https://parseapi.back4app.com/';

// screen used to reset the password
const ResetPasswordScreen = () => {
    const [email, setEmail] = useState('')

    const navigation = useNavigation()

    function resetPassword() {
        Parse.User.requestPasswordReset(email).then(function() {
          console.log("Password reset request was sent successfully");
        }).catch(function(error) {
          console.log("The login failed with error: " + error.code + " " + error.message);
        });
    }

    // what happens when user presses "Sign In"
    const onSignInPressed = () => {
        console.warn('Sign In pressed')
        
        navigation.navigate('Sign In')
    }

    // what happens when user presses "Send"
    const onSendPressed = () => {
        console.warn('Send pressed')
        resetPassword();
        //FRONT END: SCREEN THAT SAYS GO CHECK YOUR EMAIL
        navigation.navigate('Sign In')

        //need to set up send code programatically
        //navigation.navigate('Confirm Reset Password')
    }

    // setting up how the actual page looks
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>

                <Text style={styles.headerText}>
                        Reset Your Password
                </Text>

                <CustomInput 
                    placeholder="Enter your email" 
                    value={email}
                    setValue={setEmail}
                />

                <CustomButton
                    text="Send"
                    onPress={onSendPressed}
                />

                <CustomButton
                    text="Back to Sign In"
                    type='TERTIARY'
                    onPress={onSignInPressed}
                />
                
            </View>
        </ScrollView>
    ) 
}

// making the screen look pretty
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 40,
    },  

    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'white',
    },

    text: {
        color: 'white',
        marginTop: 10,
    },

    linkedText: {
        color: '#F3A747',
        fontWeight: 'bold',

    },

    SignInText: {
        color: 'white',
        marginTop: 10,
    }
})

// exporting the screen as "ResetPasswordScreen" so it can be used in other screens 
export default ResetPasswordScreen