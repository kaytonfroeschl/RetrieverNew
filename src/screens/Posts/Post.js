import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { TextInput } from "react-native-web";
import { Component } from "react/cjs/react.production.min";
import SearchButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'

//import { useAuth } from '../../../providers/AuthProvider';
import Parse from 'parse/react-native.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
Parse.initialize('XwnlQIY0f0GyOzt5DftAZEYLOy9YZmT26ZIktF94', 'L4fRRElgmLuKvanPenznzblgXwqDJGtxIKG0dB8j');
Parse.serverURL = 'https://parseapi.back4app.com/';
te

// building the home screen
const Posts = () => {
    return (
        <ScrollView>
            <View style={styles.root}>
                <Text style={{ fontSize: 30, alignSelf: 'center' }}>You can post items here</Text>
            </View>
        </ScrollView>
    );
}

// making it look pretty
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 40,
        backgroundColor: '#3b5998',
    },
})

// exporting the home screen to be used in the app (so it can be used in other screens)
export default Posts;