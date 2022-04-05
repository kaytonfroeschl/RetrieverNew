
import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-web";
import { Component } from "react/cjs/react.production.min";
import SearchButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import { useNavigation } from '@react-navigation/native'
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import SearchInput from '../../components/SearchInput/SearchInput'


const Personal = ({ route }) => {
    /* Yuying: I don't know if we need different value to handle the custom color input,
               So I comment the code I write about the custom color. 
               Set them free if you think needed.  
    */

    const { action } = route.params;
    const { currUser } = route.params;
    const navigation = useNavigation()
    const onPostNowPressed = async () => {
        console.warn('Post pressed')
        let category = "Personal";
        navigation.navigate('Item')
    }
    const [Type, setType] = useState(" ");
    const [color, setColor] = useState(" ");
    const [theboolean, setboolean] = useState(" ");
    const [customType, setcustomType] = useState(" ");
    // const [customColor, setCustomColor] = useState("");
    const [ID_name, setID_name] = useState("");
    const [bank_name, setBank_name] = useState("");


    /*
    FRONT-END!
    Need some variables from the users input. 
    On the App: "Does the item have an ID? (Y/N)"-> need boolean value
                if Y: 
                ID_name -> need string value
                bank_name -> need string value
    */
    console.log('Personal Items options:')
    console.log('Type: ' + Type);
    console.log('Custom Type' + customType);
    console.log('Color: ' + color);
    // console.log('Custom Color: ' + customColor);
    console.log('Boolean: ' + theboolean);
    console.log('Action: ' + action);
    console.log('Bank Name: ' + bank_name);
    console.log('ID Name ' + ID_name);



    return (
        <ScrollView style={{ backgroundColor: '#E7EAF4' }} >
            <Text style={{ marginLeft: 30, marginTop: 30, fontWeight: 'bold', fontSize: 18 }}>Item Type:</Text>
            <View>
                <RadioButtonGroup
                    containerStyle={{ marginTop: 10, marginLeft: 35 }}
                    selected={Type}
                    onSelected={(value) => setType(value)}
                    radioBackground="#436cc9"
                >
                    <RadioButtonItem value="wallet" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}>Wallet</Text>} />
                    <RadioButtonItem value="keys" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}>Keys</Text>} />
                    <RadioButtonItem value="id" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}>ID</Text>} />
                    <RadioButtonItem value="cards" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}>Cards</Text>} />
                    <RadioButtonItem value="other" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}>Other</Text>} />
                </RadioButtonGroup>
            </View>
            <View style={[styles.position]}>
                <SearchInput
                    name="typeInput"
                    placeholder="What is this Item?"
                    value={customType}
                    setValue={setcustomType}
                />
            </View>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <View style={{ backgroundColor: '#D4D4D6', height: 1, flex: 1, alignSelf: 'center' }} />
            </View>

            <Text style={{ marginLeft: 30, marginTop: 30, fontWeight: 'bold', fontSize: 18 }}>Identification:</Text>
            <View>
                <RadioButtonGroup
                    containerStyle={{ marginTop: 10, marginLeft: 35, marginBottom: 5 }}
                    selected={theboolean}
                    onSelected={(value) => setboolean(value)}
                    radioBackground="#436cc9"
                >
                    <RadioButtonItem value="false" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}> No/Don't want to provide</Text>} />
                    <RadioButtonItem value="true" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}>Yes           </Text>} />
                </RadioButtonGroup>
            </View>
            <View style={[styles.position]}>
                <Text style={{ marginTop: 10, fontSize: 16 }}>ID Name:</Text>
                <SearchInput
                    name="ID_nameInput"
                    placeholder="Enter the ID name..."
                    value={ID_name}
                    setValue={setID_name}
                />
            </View>
            <View style={[styles.position]}>
                <Text style={{ marginTop: 10, fontSize: 16 }}>Bank Name:</Text>
                <SearchInput
                    name="bank_nameInput"
                    placeholder="Enter the Bank name..."
                    value={bank_name}
                    setValue={setBank_name}
                />
            </View>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <View style={{ backgroundColor: '#D4D4D6', height: 1, flex: 1, alignSelf: 'center' }} />
            </View>

            <Text style={{ marginLeft: 30, marginTop: 30, fontWeight: 'bold', fontSize: 18 }}>Color:</Text>
            <View>
                <RadioButtonGroup
                    containerStyle={{ flexDirection: "row", marginTop: 10, marginLeft: 35 }}
                    selected={color}
                    onSelected={(value) => setColor(value)}
                    radioBackground="#436cc9"
                >
                    <RadioButtonItem value="black" label={<Text style={{ fontSize: 15, padding: 10, fontWeight: '700' }}>Black     </Text>} />
                    <RadioButtonItem value="blue" label={<Text style={{ fontSize: 15, padding: 10, fontWeight: '700' }}>Blue    </Text>} />
                    <RadioButtonItem value="gray" label={<Text style={{ fontSize: 15, padding: 10, fontWeight: '700' }}>Gray    </Text>} />
                </RadioButtonGroup>
                <RadioButtonGroup
                    containerStyle={{ flexDirection: "row", marginTop: 10, marginLeft: 35 }}
                    selected={color}
                    onSelected={(value) => setColor(value)}
                    radioBackground="#436cc9"
                >
                    <RadioButtonItem value="green" label={<Text style={{ fontSize: 15, padding: 10, fontWeight: '700' }}>Green     </Text>} />
                    <RadioButtonItem value="red" label={<Text style={{ fontSize: 15, padding: 10, fontWeight: '700' }}>Red        </Text>} />
                    <RadioButtonItem value="silver" label={<Text style={{ fontSize: 15, padding: 10, fontWeight: '700' }}>Silver</Text>} />
                </RadioButtonGroup>
                <RadioButtonGroup
                    containerStyle={{ flexDirection: "row", marginTop: 10, marginLeft: 35 }}
                    selected={color}
                    onSelected={(value) => setColor(value)}
                    radioBackground="#436cc9"
                >
                    <RadioButtonItem value="other" label={<Text style={{ fontSize: 15, padding: 10, fontWeight: '700' }}>Other color:    </Text>} />
                </RadioButtonGroup>
            </View>
            <View style={[styles.position]}>
                <SearchInput
                    name="ColorInput"
                    placeholder="Enter custom color"
                // value={customColor}
                // setValue={setCustomColor}
                />
            </View>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <View style={{ backgroundColor: '#D4D4D6', height: 1, flex: 1, alignSelf: 'center' }} />
            </View>

            <View style={{ flexDirection: "row", justifyContent: 'center' }}>
                <TouchableOpacity
                    style={styles.btn01}
                    onPress={onPostNowPressed}
                >
                    <Text style={{ color: 'white', fontSize: 18, marginTop: 15 }}>Post Now !</Text>
                </TouchableOpacity>
            </View>
        </ScrollView >
    );
}


const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 40,
        backgroundColor: '#3b5998',
    },
    btn01: {
        width: 160,
        marginTop: 30,
        height: 55,
        marginBottom: 50,
        borderRadius: 10,
        backgroundColor: '#F3A747',
        alignItems: "center",
    },
    position:
    {
        marginLeft: 35,
        width: 350,
        alignSelf: 'center',
        marginRight: 35,
    },
})

export default Personal;