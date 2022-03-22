/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'

// Charz: email for regex is presented here, I had to google it
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

import Parse from 'parse/react-native.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
Parse.initialize('XwnlQIY0f0GyOzt5DftAZEYLOy9YZmT26ZIktF94', 'L4fRRElgmLuKvanPenznzblgXwqDJGtxIKG0dB8j');
Parse.serverURL = 'https://parseapi.back4app.com/';

const SignUpScreen = () => {
    //const [username, setUsername] = useState('')
    //const [email, setEmail] = useState('')
    //const [password, setPassword] = useState('')
    //const [confirmPassword, setConfirmPassword] = useState('')
    const { control, handleSubmit, watch } = useForm();
    const pwd = watch('password');

    const navigation = useNavigation()



    async function signUp(usernameF, emailF, passwordF) {
        var user = new Parse.User();
        //var result = password.localeCompare(confirmPassword);
        user.set("username", usernameF);
        user.set("email", emailF);
        user.set("password", passwordF);
        user.signUp().then(function (user) {
            console.log('User created successful with name: ' + user.get("username") + ' and email: ' + user.get("email"));
            navigation.navigate('Home')
        }).catch(function (error) {
            console.log("Error: " + error.code + " " + error.message);
            navigation.navigate('Sign In')
        });
    }



    // what happens when user presses "Sign In"
    const onSignInPressed = () => {
        console.warn('Sign In pressed')

        navigation.navigate('Sign In');
    }

    // what happens when user presses "Register"
    const onRegisterPressed = data => {
        console.warn('Register pressed')
        // navigate to home screen
        signUp(data.username, data.email, data.password);
        //navigation.navigate('Home');

        //TO FRONT END: maybe a screen that says to go verify your email

    }

    // what happens when user presses "Terms of Use"
    const onTermOfUSePressed = () => {
        console.warn('Term of Use pressed')
        //need to navigate to term of use screen
        //need to set up terms of use page
    }

    // what happens when user presses "Privacy Policy"
    const onPrivacyPolicyPressed = () => {
        console.warn('Privacy Policy pressed')
        //need to navigate to privacy policy screen
        //need to set up privacy policy page
    }

    // setting up how the actual page looks
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>

                <Text style={styles.headerText}>
                    Create an account
                </Text>

                <CustomInput
                    name="username"
                    control={control}
                    placeholder="Username"
                    rules={{
                        required: 'Username is required',
                        minLength: { value: 3, message: 'Username must be at least 3 characters' },
                        maxLength: { value: 20, message: 'Username must be at most 20 characters' },
                    }}
                />

                <CustomInput
                    name="email"
                    control={control}
                    placeholder="Email"
                    rules={{
                        required: 'Please enter your email',
                        pattern: { value: EMAIL_REGEX, messgae: 'Please enter a valid email' }
                    }}
                />

                <CustomInput
                    name="password"
                    control={control}
                    placeholder="Password"
                    rules={{
                        required: 'Please enter your password',
                        minLength: { value: 6, message: 'Password must be at least 6 characters' },
                    }}
                />

                <CustomInput
                    name="confirmPassword"
                    control={control}
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                    rules={{
                        required: 'Please confirm your password',
                        validate: value => value === pwd || 'Passwords do not match'
                    }}

                />

                <CustomButton
                    text="Register"
                    onPress={handleSubmit(onRegisterPressed)}
                />

                <Text style={styles.text}>
                    By registering, you confirm that you accept our <Text style={styles.linkedText} onPress={onTermOfUSePressed}>Terms of Use </Text>
                    and <Text style={styles.linkedText} onPress={onPrivacyPolicyPressed}>Privacy Policy</Text>.
                </Text>

                <Text style={styles.SignInText}>
                    Already have an account? <Text style={styles.linkedText} onPress={onSignInPressed}>Sign In</Text>
                </Text>

            </View>
        </ScrollView>
    )
}

// making the page look pretty
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 40,
    },

    headerText: {
        fontSize: 30,
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
        marginTop: 30,
    }
})

// exporting the page as "SignUpScreen" so it can be used in other screens
export default SignUpScreen