import React , { useState, useEffect }from "react";
import { View, Text, StyleSheet, ScrollView, Image ,TouchableOpacity} from "react-native";
import { Button, TextInput } from "react-native-web";
import { Component } from "react/cjs/react.production.min";
import SearchButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import Logo from '../../../assets/images/clipart4739493.png'
import * as ImagePicker from 'expo-image-picker';
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native'

// building the home screen
const Profiles = () => {
    const navigation = useNavigation()
    const Loggingout =()=>{
        navigation.navigate('Sign In')
    }
    const baseprofilepicture = Image.resolveAssetSource(Logo).uri
    const [image, setImage]=useState(baseprofilepicture);
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [10, 10],
          quality: 1,
        });
    
        console.log(result);
        
        if (!result.cancelled) {
            setImage(result.uri);
          }
      };
    return (
        <ScrollView style= {{ backgroundColor: '#E7EAF4' }}>
            <View style ={{marginTop:25} }>
            <TouchableOpacity onPress={pickImage} style={styles.icon}>

            {image && <Image source={{ uri: image }} style={{width:125, height:125, borderRadius: 100/2}}  />}
            <Text style={{marginTop:10}} >Change profile picture</Text>
            </TouchableOpacity>
            
            </View>

            <View style={{ marginTop:50}}>
                <Text style={styles.text}>  Username:</Text>
                <Text style={styles.text}>  Email:</Text>
            </View>
            <View style ={{marginTop: 200}}>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('In App Reset')}>
                <Text style={styles.text1}>Reset Password</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={Loggingout}>
                <Text style={styles.text1}>Log out</Text>
            </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

// making it look pretty
const styles = StyleSheet.create({
    button: {
        marginTop: 30
    },
    icon: {
        resizeMode: 'center',
        borderRadius: 100 / 2,
        alignSelf: 'center',
        alignItems: 'center'
        },
    text:{
        fontSize: 20,
        backgroundColor: 'white',
        borderColor: 'gray',
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
    },  
    text1:{
        fontSize: 20,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        textAlign: 'center',
      
        
        

    },
    
})

export default Profiles;