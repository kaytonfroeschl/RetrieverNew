/* eslint-disable prettier/prettier */
import React, {useState} from 'react'
import {View, Text, StyleSheet, ScrollView, Alert } from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'

import Parse from 'parse/react-native.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
Parse.initialize('XwnlQIY0f0GyOzt5DftAZEYLOy9YZmT26ZIktF94', 'L4fRRElgmLuKvanPenznzblgXwqDJGtxIKG0dB8j');
Parse.serverURL = 'https://parseapi.back4app.com/';

const SignUpScreen = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const navigation = useNavigation()



    async function signUp(){
        var user = new Parse.User();
        var result = password.localeCompare(confirmPassword);
        if (result === 0){
            user.set("username", username);
            user.set("email", email);
            user.set("password", password);
            user.signUp().then(function(user) {
                console.log('User created successful with name: ' + user.get("username") + ' and email: ' + user.get("email"));
                navigation.navigate('Home')
            }).catch(function(error){
                console.log("Error: " + error.code + " " + error.message);
                navigation.navigate('Sign In')
            });
        }
        else {
            navigation.navigate('Sign In')
        }
    }
        
    

    // what happens when user presses "Sign In"
    const onSignInPressed = () => {
        console.warn('Sign In pressed')
        
        navigation.navigate('Sign In');
    }

    // what happens when user presses "Register"
    const onRegisterPressed = () => {
        console.warn('Register pressed')
        // navigate to home screen
        navigation.navigate('Home');

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
                    placeholder="Username" 
                    value={username} 
                    setValue={setUsername}
                />

                <CustomInput
                    placeholder="Email"
                    value={email}
                    setValue={setEmail}
                />

                <CustomInput 
                    placeholder="Password"
                    value={password} 
                    setValue={setPassword} 
                    secureTextEntry={true}
                />

                <CustomInput 
                    placeholder="Confirm Password"
                    value={confirmPassword} 
                    setValue={setConfirmPassword} 
                    secureTextEntry={true}
                />

                <CustomButton
                    text="Register"
                    onPress={onRegisterPressed}
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