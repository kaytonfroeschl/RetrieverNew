/* eslint-disable prettier/prettier */
// don't know why this is the index page lol I meant to separate it into index.js and navigation.js
// but it works so I'm not complaining
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// I'm importing all the screens here so that they can be used in the navigation
// If we build more screens, they need to be imported here, and also below wehre we organize them in order of access
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import EmailConfirmationScreen from '../screens/EmailConfirmationScreen/EmailConfirmationScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import ConfirmResetPasswordScreen from '../screens/ConfirmResetPasswordScreen';
import HomeScreen from '../screens/HomeScreen';

// this bit of code I had to look up to get the theme to work
// essentially just defined the background color of the app to be that signature dark blue color
const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: '#3b5998',
    },
};

const Stack = createNativeStackNavigator();

// this is the navigation component that we will use to navigate between screens
// wrapping the entire thing in the NavigationContainer component so that we can use the navigation component
const Navigation = () => {
    return (
        <NavigationContainer theme={MyTheme} >
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name="Sign In" component={SignInScreen} />
                <Stack.Screen name="Sign Up" component={SignUpScreen} />
                <Stack.Screen name="Email Confirmation" component={EmailConfirmationScreen} />
                <Stack.Screen name="Reset Password" component={ResetPasswordScreen} />
                <Stack.Screen name="Confirm Reset Password" component={ConfirmResetPasswordScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

//we can call this screen in different .js files by importing "Navigation"
export default Navigation;