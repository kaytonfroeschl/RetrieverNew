/* eslint-disable prettier/prettier */
// Charz: don't know why this is the index page lol I meant to separate it into index.js and navigation.js
// Charz: but it works so I'm not complaining
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Charz: I'm importing all the screens here so that they can be used in the navigation
// Charz: If we build more screens, they need to be imported here, and also below where we organize them in order of access
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import EmailConfirmationScreen from '../screens/EmailConfirmationScreen/EmailConfirmationScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import ConfirmResetPasswordScreen from '../screens/ConfirmResetPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import SearchResult from '../screens/SearchResult/SearchResult';
import Chat from '../screens/ChatPage/Chat';
import Settings from '../screens/Setting/Setting';
import Posts from '../screens/Posts/Post';
import Items from '../screens/ItemPage/ItemPage';
import Clothes from '../screens/Posts/Clothes';
import Shoes from '../screens/Posts/Shoes';
import Personal from '../screens/Posts/Personal';
import Electronics from '../screens/Posts/Electronics';
import Profiles from '../screens/Profiles';

// Charz: this bit of code I had to look up to get the theme to work
// Charz: essentially just defined the background color of the app to be that signature dark blue color
const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: '#3b5998',
    },
};

const Stack = createNativeStackNavigator();

// Charz: this is the navigation component that we will use to navigate between screens
// Charz: wrapping the entire thing in the NavigationContainer component so that we can use the navigation component
// Charz: we order them in the order of access (weird hierarchy but it works)
// Charz: important to always have first page as SignInScreen (for now at least)
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
                <Stack.Screen name="Search Result" component={SearchResult} />
                <Stack.Screen name="Chat Page" component={Chat} />
                <Stack.Screen name="Profile" component={Profiles} options={{title: 'Profile', headerShown:true}} />
                <Stack.Screen name="Post" options={{ title: 'Post', headerShown: true }} component={Posts} />
                <Stack.Screen name="Item" options={{ title: 'Item', headerShown: true }} component={Items} />
                <Stack.Screen name="Setting" component={Settings} />
                <Stack.Screen name="clothe" options={{ title: 'Post for Clothes', headerShown: true }} component={Clothes} />
                <Stack.Screen name="shoe" options={{ title: 'Post for Shoes', headerShown: true }} component={Shoes} />
                <Stack.Screen name="personal" options={{ title: 'Post for Personal Items', headerShown: true }} component={Personal} />
                <Stack.Screen name="electronics" options={{ title: 'Post for Electronics', headerShown: true }} component={Electronics} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

//Charz: we can call this screen in different .js files by importing "Navigation"
export default Navigation;