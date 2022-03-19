/* eslint-disable prettier/prettier */
import React, {useState} from 'react'
import {View, Text, StyleSheet, ScrollView, Modal } from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'

import { Controller, useForm } from 'react-hook-form'

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

import Parse from 'parse/react-native.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { handleError } from 'parse/lib/browser/RESTController'
import { send } from 'parse/lib/browser/Push'
Parse.initialize('XwnlQIY0f0GyOzt5DftAZEYLOy9YZmT26ZIktF94', 'L4fRRElgmLuKvanPenznzblgXwqDJGtxIKG0dB8j');
Parse.serverURL = 'https://parseapi.back4app.com/';

// screen used to reset the password
const ResetPasswordScreen = () => {
    //const [email, setEmail] = useState('')
    const {control, handleSubmit} = useForm();

    // Charz: initializing pop up modal to be used when user clicks "Send"
    const [modalVisible, setModalVisible] = useState(false);

    const navigation = useNavigation()

    /*function resetPassword() {
        Parse.User.requestPasswordReset(email).then(function() {
          console.log("Password reset request was sent successfully");
        }).catch(function(error) {
          console.log("The login failed with error: " + error.code + " " + error.message);
        });
    }*/

    // what happens when user presses "Sign In"
    const onSignInPressed = () => {
        console.warn('Sign In pressed')
        
        navigation.navigate('Sign In')
    }

    // what happens when user presses "Send"
    const onSendPressed = () => {
        //resetPassword();
        
        //FRONT END: SCREEN THAT SAYS GO CHECK YOUR EMAIL
        setModalVisible(true);
        
        //navigation.navigate('Sign In')

        //need to set up send code programatically
        //navigation.navigate('Confirm Reset Password')
    }


    //if there is an error, this function will be called
    const onError = () => {
        console.warn('Error')
        setModalVisible(false);
    }

    // setting up how the actual page looks
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>

                <Text style={styles.headerText}>
                        Reset Your Password
                </Text>
                <>
                    <CustomInput 
                        name="email"
                        placeholder="Enter your email" 
                        control={control}
                        rules={{
                            required: 'Email is required',
                            pattern: {value: EMAIL_REGEX, message: 'Invalid email address'}
                        }}
                    />

                    <CustomButton
                        text="Send"
                        onPress={handleSubmit(onSendPressed, onError)}
                    />
                </>

                    <CustomButton
                        text="Back to Sign In"
                        type='TERTIARY'
                        onPress={handleSubmit(onSignInPressed)}
                    />

                <Modal
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}                
                >
                    <View style={styles.modal}>
                        <Text style={styles.modalText}>
                            Check your email for a code.
                        </Text>
                        <CustomButton
                            text="Close"
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        />
                    </View>
                </Modal>
                
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
    },

    modal: {
        marginTop: '70%',
        marginHorizontal: '5%',
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
       },

    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 20,
        fontWeight: 'bold',
    },

})

// exporting the screen as "ResetPasswordScreen" so it can be used in other screens 
export default ResetPasswordScreen