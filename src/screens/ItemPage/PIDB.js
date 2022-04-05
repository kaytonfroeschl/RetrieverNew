import Parse from 'parse/react-native.js';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import { DrawerContentScrollView } from "@react-navigation/drawer";
  Parse.initialize('XwnlQIY0f0GyOzt5DftAZEYLOy9YZmT26ZIktF94', 'L4fRRElgmLuKvanPenznzblgXwqDJGtxIKG0dB8j');
  Parse.serverURL = 'https://parseapi.back4app.com/';
  
  /* need to add size into the database but need frontend first*/
  export default class PIDB{
      async createnewPI(itemID, type, haveID, id_name, id_bank, color){
        let newPI = new Parse.Object('PIDB');
        newPI.set('itemID', itemID);
        newPI.set('Type', type);
        newPI.set('Color', color);
        //newPI.set('Size', size);
        try{
            await newPI.save();
            //Sucess
            console.log("Sucess! Shoe item was created!")
            return true;
        }catch(error){
            Alert.alert('Error!', error.message);
            return false;
        };
    };
  }
