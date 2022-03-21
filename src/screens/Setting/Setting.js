import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { TextInput } from "react-native-web";
import { Component } from "react/cjs/react.production.min";
import SearchButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'

// building the home screen
const Setting = () => {
    return (
        <ScrollView>
            <View style={styles.root}>
                <Text style={{ fontSize: 30, alignSelf: 'center' }}>This is the Setting Page</Text>
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
export default Setting;