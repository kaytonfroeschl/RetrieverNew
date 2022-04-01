import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { TextInput } from "react-native-web";
import { Component } from "react/cjs/react.production.min";
import SearchButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import LostItem from './LostItem'
import FoundItem from './FoundItem'

import Parse from 'parse/react-native.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DrawerContentScrollView } from "@react-navigation/drawer";
Parse.initialize('XwnlQIY0f0GyOzt5DftAZEYLOy9YZmT26ZIktF94', 'L4fRRElgmLuKvanPenznzblgXwqDJGtxIKG0dB8j');
Parse.serverURL = 'https://parseapi.back4app.com/';


// building the home screen
const ItemPage = ({route}) => {
    const {action} = route.params;
    const {currUser} = route.params;
    const {category} = route.params;
    const {clotheType} = route.params;
    const {color} = route.params;
    const {size} = route.params;

    console.log('Parameters in ITEM Page:')
    console.log(action);
    console.log(currUser);
    console.log(category);
    console.log(clotheType);
    console.log(color);
    console.log(size);


   

    function getLostOrFound(action){
        if(action === "Lost"){
            return false;
        } else{
            return true;
        }
    };
    
    var globalItemID = " ";

    /*ITEM DB*/
    async function createNewItem(userVar, actionVar, categoryP, clotheTypeP, colorP, sizeP){
        let newItem = new Parse.Object('Item');
        newItem.set('UserID', userVar);
        newItem.set('Action', getLostOrFound(actionVar));
        newItem.set('Active', true);    
        try{
            await newItem.save();
            globalItemID = newItem.id;
            if(getLostOrFound(actionVar) === false){
                //Call Lost Class
                var LostObj = new LostItem;
                LostObj.createNewLost(globalItemID, categoryP, clotheTypeP, colorP, sizeP);
            }
            else{
                //Call Found Class
                var FoundObj = new FoundItem;
                FoundObj.createNewFound(globalItemID, categoryP, clotheTypeP, colorP, sizeP);
            }
            
            //Sucess
            console.log("Sucess! Item was created!")
            return true;
        } catch(error){
            Alert.alert('Error!', error.message);
            return false;
        };
    };



    /* Creates new ITEM row in DB */
    createNewItem(currUser, action, category, clotheType, color, size);


    return (
        <ScrollView>
            <View style={styles.root}>
                <Text style={{ fontSize: 30, alignSelf: 'center' }}>Your Item Here</Text>
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
export default ItemPage;