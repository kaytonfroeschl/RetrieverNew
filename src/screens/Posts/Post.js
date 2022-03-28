import React, {useState} from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import RadioButtonGroup, {RadioButtonItem} from "expo-radio-button";
import { TextInput } from "react-native-web";
import { Component } from "react/cjs/react.production.min";
import SearchButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'

//import { useAuth } from '../../../providers/AuthProvider';
import Parse from 'parse/react-native.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
Parse.initialize('XwnlQIY0f0GyOzt5DftAZEYLOy9YZmT26ZIktF94', 'L4fRRElgmLuKvanPenznzblgXwqDJGtxIKG0dB8j');
Parse.serverURL = 'https://parseapi.back4app.com/';


// building the home screen
const Posts = () => {
    const [current, setCurrent] = useState("test");

  return (
    <ScrollView>
    <Text style={{marginLeft:20, marginTop: 20, fontWeight: 'bold', fontSize: 25 }}>It is a.....</Text>
    <View>
      <RadioButtonGroup
        containerStyle={{ marginTop: 10, marginLeft: 20 }}
        selected={current}
        onSelected={(value) => setCurrent(value)}
        radioBackground="yellow"
       >
        <RadioButtonItem value="Lost" label={<Text style={{fontSize: 20, padding: 10, fontWeight: '700'}}>Lost</Text>} />
        <RadioButtonItem value ="Found" label={<Text style={{fontSize: 20, padding: 10, fontWeight: '700'}}>Found</Text>}/>
      </RadioButtonGroup>
      </View>
    </ScrollView>
  )}

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