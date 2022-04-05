import Parse from 'parse/react-native.js';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import { DrawerContentScrollView } from "@react-navigation/drawer";
  Parse.initialize('XwnlQIY0f0GyOzt5DftAZEYLOy9YZmT26ZIktF94', 'L4fRRElgmLuKvanPenznzblgXwqDJGtxIKG0dB8j');
  Parse.serverURL = 'https://parseapi.back4app.com/';
  
  /* need to add size into the database but need frontend first*/
  export default class ShoesDB{
      constructor(size){
          //convert string size to number size then pass into createNewShoes
      }
      async createNewShoes(itemID, type, color, size){
        let newShoes = new Parse.Object('Shoes');
        newShoes.set('itemID', itemID);
        newShoes.set('Type', type);
        newShoes.set('Color', color);
        //newShoes.set('Size', size);
        try{
            await newShoes.save();
            //Sucess
            console.log("Sucess! Shoe item was created!")
            return true;
        }catch(error){
            Alert.alert('Error!', error.message);
            return false;
        };
    };
  }
