import Parse from 'parse/react-native.js';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import { DrawerContentScrollView } from "@react-navigation/drawer";
  Parse.initialize('XwnlQIY0f0GyOzt5DftAZEYLOy9YZmT26ZIktF94', 'L4fRRElgmLuKvanPenznzblgXwqDJGtxIKG0dB8j');
  Parse.serverURL = 'https://parseapi.back4app.com/';
  
  export default class ClothesDB{
      async createNewClothes(itemID, type, color, size){
        let newClothes = new Parse.Object('Clothes');
        newClothes.set('itemID', itemID);
        newClothes.set('Type', type);
        newClothes.set('Color', color);
        newClothes.set('Size', size);
        try{
            await newClothes.save();
            //Sucess
            console.log("Sucess! Clothing item was created!")
            return true;
        }catch(error){
            Alert.alert('Error!', error.message);
            return false;
        };
    };
  }
