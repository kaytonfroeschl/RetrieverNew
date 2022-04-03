/* eslint-disable prettier/prettier */
import React, {useState} from 'react'
import {View, Text, StyleSheet, ScrollView, Modal, TextInput, SafeAreaView, TouchableOpacity, Alert } from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import SearchInput from '../../components/SearchInput/SearchInput'
import { Button } from 'react-native-web'

// screen used to reset the password
const InAppReset = () => {
    const navigation = useNavigation()
    const verifyPassword = () =>
    {
        Alert.alert( ' ', 'Password reset succesful!', [
            { text: 'OK'},
          ]);
       navigation.navigate('Profile')
       
    }
  

    return (
    
        <SafeAreaView style={{flex:1, backgroundColor: '#E7EAF4' }}>
         <View style={[styles.position]}>
             <Text style={styles.txt}>Enter old password:</Text>
                <SearchInput
                    name="old password"
                    placeholder="Old Password"
                    secureTextEntry={true}
                />
            <Text style={styles.txt}>Enter new password:</Text>
                <SearchInput
                    name="new password"
                    placeholder="New password"
                    secureTextEntry={true}
                />
            <Text style={styles.txt}>Enter new password again:</Text>
                <SearchInput
                    name="new password verify"
                    placeholder="New password again"
                    secureTextEntry={true}
                />
             <View style={{ flexDirection: "row", justifyContent: 'center' }}>
            <TouchableOpacity
                    style={{width: 160,
                        marginTop: 35,
                        height: 45,
                        marginBottom: 50,
                        borderRadius: 10,
                        backgroundColor: '#F3A747',
                        alignItems: "center",
                        }}
                        onPress={verifyPassword}
                >
                    <Text style={{ color: 'white', fontSize: 18, marginTop: 12 }}>Submit</Text>
            </TouchableOpacity>
            </View>
        </View>
        </SafeAreaView>
    )
}

// making the screen look pretty
const styles = StyleSheet.create({

    position:
    {
        marginLeft: 25,
        width: 350,
        alignSelf: 'center',
        marginRight: 35,

    },
    txt:
    {
        marginTop: 30,
        marginLeft: 15,
        fontSize: 15,
    },
    button:
    {
        width: '100%',
        padding: 10,
        marginVertical: 10,
        alignItems: 'center',
        borderRadius: 5,
    },

})
export default InAppReset