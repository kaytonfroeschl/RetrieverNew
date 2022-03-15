// this is a temporary home screen lol 
import React from "react";
import { View, Text, StyleSheet } from "react-native";

// building the home screen
const HomeScreen = () => {
    return (
        <View style={styles.root}>
            <Text style={{ fontSize: 24, alignSelf: 'center' }}>You are now in the app</Text>
        </View>
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
export default HomeScreen;