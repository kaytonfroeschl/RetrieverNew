import ClothesDB from './ClothesDB'
import ShoesDB from './ShoesDB'
import PIDB from './PIDB'

import Parse from 'parse/react-native.js';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import { DrawerContentScrollView } from "@react-navigation/drawer";
  Parse.initialize('XwnlQIY0f0GyOzt5DftAZEYLOy9YZmT26ZIktF94', 'L4fRRElgmLuKvanPenznzblgXwqDJGtxIKG0dB8j');
  Parse.serverURL = 'https://parseapi.back4app.com/';
  
  export default class FoundItem{
      async createNewFound(itemID, category, type, color, size){
        let newLost = new Parse.Object('Found');
        newLost.set('itemID', itemID);
        newLost.set('Type', category);
        try{
            await newLost.save();
            //Sucess
            console.log("Sucess! Found item was created!")

            if(category === "Clothes"){
                console.log('Go into Clothes Database')
                var ClothesObj = new ClothesDB;
                ClothesObj.createNewClothes(itemID, type, color, size);
            } else if(category === "Shoes"){
                console.log('Go into Shoe Database')
                var ShoesObj = new ShoesDB;
                ShoesObj.createNewShoes(itemID, type, color, size);
            } else if (category === "Electronics"){
                console.log('Go into Electronic Database')
            } else{
                console.log('Go into Personal Items Database')
            }

            return true;
        }catch(error){
            Alert.alert('Error!', error.message);
            return false;
        };
    };
  }
