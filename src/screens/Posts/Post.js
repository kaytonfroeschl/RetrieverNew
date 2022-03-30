import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image, Picker, Button, TouchableOpacity } from "react-native";
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import { TextInput } from "react-native";
import { Component } from "react";
import { useNavigation } from '@react-navigation/native'
import SearchInput from '../../components/SearchInput/SearchInput'
//import { useAuth } from '../../../providers/AuthProvider';
import Parse from 'parse/react-native.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import Logo from '../../../assets/images/clipart4739493.png'

Parse.initialize('XwnlQIY0f0GyOzt5DftAZEYLOy9YZmT26ZIktF94', 'L4fRRElgmLuKvanPenznzblgXwqDJGtxIKG0dB8j');
Parse.serverURL = 'https://parseapi.back4app.com/';

const Posts = () => {
  const navigation = useNavigation()
  const onClothePressed = async () => {
    console.warn('go to clothes options')
    navigation.navigate('clothe')
  }
  const onShoesPressed = async () => {
    console.warn('go to shoes options')
    navigation.navigate('shoe')
  }
  const onPersonalPressed = async () => {
    console.warn('go to personal item options')
    navigation.navigate('personal')
  }
  const onElectronicsPressed = async () => {
    console.warn('go to electronics options')
    navigation.navigate('electronics')
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

  const [current, setCurrent] = useState("test");
  const [selectedValue, setSelectedValue] = useState('');
  const [value, onChangeText] = React.useState('');

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

      <Text style={{ marginLeft: 30, marginTop: 20, fontWeight: 'bold', fontSize: 20 }}>Post Title:</Text>
      <View style={[styles.position]}>
        <SearchInput
          placeholder="Enter Post Title..."
        />
      </View>

      <Text style={{ marginLeft: 30, marginTop: 20, fontWeight: 'bold', fontSize: 20 }}>Location:</Text>
      <View style={[styles.position]}>
        <SearchInput
          placeholder="Enter Your Location..."
        />
      </View>

      <Text style={{ marginLeft: 30, marginTop: 20, fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>More Details:</Text>
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
          style={[styles.btn03]}
          onPress={pickImage}
        >
          <Text style={{ color: 'white', fontSize: 17, marginTop: 8 }}>Pick one additional Image</Text>
        </TouchableOpacity>
        {image && <Image source={{ uri: image }} style={{ width: 250, height: 200, marginTop: 10 }} />}
      </View>


      <Text style={{ marginLeft: 30, marginTop: 30, fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>Item Type Selctions:</Text>
      <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
        <TouchableOpacity
          style={styles.btn02}
          onPress={onClothePressed}
        >
          <Text style={{ color: 'white', fontSize: 17, marginTop: 8 }}> Clothes</Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
        <TouchableOpacity
          style={styles.btn02}
          onPress={onShoesPressed}
        >
          <Text style={{ color: 'white', fontSize: 17, marginTop: 8 }}> Shoes</Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
        <TouchableOpacity
          style={styles.btn02}
          onPress={onPersonalPressed}
        >
          <Text style={{ color: 'white', fontSize: 17, marginTop: 8 }}> Personal Items</Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10, marginBottom: 30 }}>
        <TouchableOpacity
          style={styles.btn02}
          onPress={onElectronicsPressed}
        >
          <Text style={{ color: 'white', fontSize: 17, marginTop: 8 }}> Electronics</Text>
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
    marginLeft: 20,
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
  btn02: {
    width: 310,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#5873AA',
    alignItems: "center",
  },

  btn03: {
    width: 310,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#6D94C7',
    alignItems: "center",
  }

})

// exporting the home screen to be used in the app (so it can be used in other screens)
export default Posts;