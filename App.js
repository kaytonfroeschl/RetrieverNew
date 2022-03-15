/* eslint-disable prettier/prettier */
import * as React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import { useState, useEffect } from "react";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

//we need to import the navigation library from @react-navigation/native in order to navigate between screens
import Navigation from './src/navigation/index';


// In a React Native application
import Parse from 'parse/react-native.js';
import AsyncStorage from '@react-native-async-storage/async-storage';


//Initializing the SDK
Parse.setAsyncStorage(AsyncStorage);
//Paste below the Back4App Application ID AND the JavaScript KEY
Parse.initialize('XwnlQIY0f0GyOzt5DftAZEYLOy9YZmT26ZIktF94', 'L4fRRElgmLuKvanPenznzblgXwqDJGtxIKG0dB8j');
//Point to Back4App Parse API address 
Parse.serverURL = 'https://parseapi.back4app.com/';

const App = () => {
 /*const [person, setPerson] = useState(new Parse.Object('Person'));

  async function addPerson() {
    try {
      //create a new Parse Object instance
      const newPerson = new Parse.Object('Person');
      //define the attributes you want for your Object
      newPerson.set('name', 'John');
      newPerson.set('email', 'john@back4app.com');
      //save it on Back4App Data Store
      await newPerson.save();
    } catch (error) {
      console.log('Error saving new person: ', error);
    }
  }

  async function fetchPerson() {
    //create your Parse Query using the Person Class you've created
    let query = new Parse.Query('Person');
    //run the query to retrieve all objects on Person class, optionally you can add your filters
    let queryResult = await query.find();
    //the resul is an arry of objects. Pick the first result 
    const currentPerson = queryResult[0];
    //access the Parse Object attributes
    console.log('person id: ', currentPerson.get('id'));
    console.log('person name: ', currentPerson.get('name'));
    console.log('person email: ', currentPerson.get('email'));
    setPerson(currentPerson);
  }

  useEffect(() => {
    fetchPerson()
  }, []);

 /* return (
    <SafeAreaView>
      <View>
        <Text>Name: {person.get('name')}</Text>
        <Text>email: {person.get('email')}</Text>
        <Button title='Add person' onPress={addPerson} />
        <Button title='Fetch person' onPress={fetchPerson} />
        {/* Your other components here ....*///}
  /*    </View>
    </SafeAreaView>
  )*/

//}

return (
  //we need to wrap the entire app in a SafeAreaView to prevent the status bar from covering the top of the screen
  //safe area view is a view that automatically adjusts its height to account for the status bar
  //then, we wrap the entire app in a navigation object
  <SafeAreaProvider>
    <View style={styles.root}>
      <Navigation />
    </View>

  </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#3b5998', //code doesn't work, working code is actually in ./src/navigation/index.js under MyTheme
  },
});

export default App;