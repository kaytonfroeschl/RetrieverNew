/* eslint-disable prettier/prettier */
import React, {useState} from 'react'
import {View, Text, StyleSheet, ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'

// building the screen for confirming the email 
// like to see if the user inputs a valid email
// this is where they input the code they got from the email
const EmailConfirmationScreen = () => {
    const [code, setCode] = useState('')

    const navigation = useNavigation()

    // what happens when user presses "Sign In"
    const onSignInPressed = () => {
        console.warn('Sign In pressed')

        navigation.navigate('Sign In')
    }

    const onResendCodePressed = () => {
        console.warn('Resend Code pressed')
        //need to set up resend code programatically
    }

    // what happens when user presses "Confirm"
    const onConfirmPressed = () => {
        console.warn('Confirm pressed')
        
        // need to set verification system up, where we see if the  actual code and the code the user entered are the same
        // only after that should they be able to sign in and actually go to the home screen
        navigation.navigate('Home')
    }

    // setting up how the actual page looks
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>

                <Text style={styles.headerText}>
                        Confirm your Email
                </Text>

                <CustomInput 
                    placeholder="Enter your code" 
                    value={code}
                    setValue={setCode}
                />

                <CustomButton
                    text="Confirm Code"
                    onPress={onConfirmPressed}
                />

                <CustomButton
                    text="Resend Code"
                    type='SECONDARY'
                    onPress={onResendCodePressed}
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

// making the styles for the page (how it looks)
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

// exporting the component so it can be used in other pages
export default EmailConfirmationScreen