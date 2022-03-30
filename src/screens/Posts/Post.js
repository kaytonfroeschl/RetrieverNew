import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image, Picker, Button, TouchableOpacity } from "react-native";
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import { TextInput } from "react-native";
import { Component } from "react";
import { useNavigation } from '@react-navigation/native'
import SearchInput from '../../components/SearchInput/SearchInput'
//import { useAuth } from '../../../providers/AuthProvider';
import * as ImagePicker from 'expo-image-picker';
import Logo from '../../../assets/images/clipart4739493.png'

import Parse from 'parse/react-native.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
Parse.initialize('XwnlQIY0f0GyOzt5DftAZEYLOy9YZmT26ZIktF94', 'L4fRRElgmLuKvanPenznzblgXwqDJGtxIKG0dB8j');
Parse.serverURL = 'https://parseapi.back4app.com/';

//Yuying: finished the very basic setup, the type slection drow down menu missed important logic set up
//        ex: maybe can consider write a function, when the Picker.Value = 1, display the following menu for Picker 1.

//Also missed the upload picture button. I do saw some tutorial online, it is shouldn't be a big problem.

/*async function createNewItem(){
    let newItem = new Parse.Object('Item');
      
}*/

const Posts = () => {

    const [current, setCurrent] = useState("test");
    const [selectedValue, setSelectedValue] = useState('');
    const [value, onChangeText] = React.useState('');

  const navigation = useNavigation()

  const onPostNowPressed = async data => {
    console.log("lost or found: "+ current + " ");
    console.log("selected Value: "+ selectedValue + " ");
    console.log("value: "+ value + " ");
    console.warn('Post pressed')
    navigation.navigate('Item')
  }

  const [image, setImage] = useState(null);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [10, 11],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };



  return (
    <ScrollView style={{ backgroundColor: '#E7EAF4' }}>

      <Text style={{ marginLeft: 30, marginTop: 10, fontWeight: 'bold', fontSize: 20 }}>Select your post Type:</Text>
      <View>
        <RadioButtonGroup
          containerStyle={{ flexDirection: "row", marginTop: 10, marginLeft: 30 }}
          selected={current}
          onSelected={(value) => setCurrent(value)}
          radioBackground="#436cc9"
        >
          <RadioButtonItem value="Lost" label={<Text style={{ fontSize: 20, padding: 10, fontWeight: '700' }}>Lost          </Text>} />
          <RadioButtonItem value="Found" label={<Text style={{ fontSize: 20, padding: 10, fontWeight: '700' }}>Found</Text>} />
        </RadioButtonGroup>
      </View>

      <Text style={{ marginLeft: 30, marginTop: 30, fontWeight: 'bold', fontSize: 20 }}>Post Title:</Text>
      <View style={[styles.position]}>
        <SearchInput
          placeholder="Enter Post Title..."
        />
      </View>

      <Text style={{ marginLeft: 30, marginTop: 30, fontWeight: 'bold', fontSize: 20 }}>Item Type Selction:</Text>
      <View style={[styles.menu]}>
        <Picker
          selectedValue={selectedValue}
          style={{ height: 45, width: 350 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}

        >
          <Picker.Item label="Jackets/Shoes" value="jacket/shone" itemIndex="1" />
          <Picker.Item label="Personal Items" value="Personal" itemIndex="2" />
          <Picker.Item label="Electronics" value="electro" itemIndex="3" />
        </Picker>

        <Picker
          selectedValue={selectedValue}
          style={{ height: 45, width: 350 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}

        >
          <Picker.Item label="Size 00" value="sel01" itemIndex="01" />
          <Picker.Item label="Size 01" value="sel02" itemIndex="02" />
          <Picker.Item label="Size 02" value="sel03" itemIndex="03" />
        </Picker>

        <Picker
          selectedValue={selectedValue}
          style={{ height: 45, width: 350 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}

        >
          <Picker.Item label="Brown" value="col01" itemIndex="001" />
          <Picker.Item label="Black" value="col02" itemIndex="002" />
          <Picker.Item label="Blue" value="col03" itemIndex="003" />
        </Picker>
      </View>

      <Text style={{ marginLeft: 30, marginTop: 30, fontWeight: 'bold', fontSize: 20, marginBottom: 15 }}>More Details:</Text>
      <TextInput
        style={{ borderColor: 'transparent', marginLeft: 30, width: 350 }}
        onChangeText={text => onChangeText(text)}
        backgroundColor="white"
        borderRadius={5}
        placeholder="Enter more details about your item..."
        placeholderTextColor="#ABA6A8"
        paddingTop={8}
        paddingHorizontal={10}
        autoCapitalize="none"
        multiline={true}
        numberOfLines={8}
        textAlignVertical="top"
        fontSize={17}
        returnKeyType="done"
        value={value}
      />

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
        <TouchableOpacity
          style={[styles.btn02]}
          onPress={pickImage}
        >
          <Text style={{ color: 'white', fontSize: 17, marginTop: 8 }}>Pick one additional Image</Text>
        </TouchableOpacity>
        {image && <Image source={{ uri: image }} style={{ width: 250, height: 200, marginTop: 10 }} />}
      </View>

      <Text style={{ marginLeft: 30, marginTop: 20, fontWeight: 'bold', fontSize: 20 }}>Location</Text>
      <View style={[styles.position]}>
        <SearchInput
          placeholder="Enter Your Location..."
        />
      </View>

      <View style={{ flexDirection: "row", justifyContent: 'center' }}>
        <TouchableOpacity
          style={styles.btn01}
          onPress={onPostNowPressed}
        >
          <Text style={{ color: 'white', fontSize: 18, marginTop: 18 }}>Post Now</Text>
        </TouchableOpacity>
      </View>


    </ScrollView>
  )
}


const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#E7EAF4',
  },
  flex: {
    flex: 1,
  },
  position:
  {
    marginLeft: 35,
    width: 350,
    alignSelf: 'center',
    marginRight: 35,
  },
  input: {
    margin: 15,
    paddingLeft: 8,
    height: 40,
    borderColor: '#eeeeee',
    borderWidth: 1
  },
  menu: {
    width: 350,
    marginTop: 15,
    borderRadius: 5,
    marginLeft: 30,
    backgroundColor: 'white',
    marginLeft: 30
  },
  btn01: {
    width: 180,
    marginTop: 30,
    height: 60,
    marginBottom: 50,
    borderRadius: 10,
    backgroundColor: '#F3A747',
    alignItems: "center",
  },
  btn02: {
    width: 310,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#5873AA',
    alignItems: "center",
  }

})

// exporting the home screen to be used in the app (so it can be used in other screens)
export default Posts;