
import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { Alert, TextInput } from "react-native-web";
import { Component } from "react/cjs/react.production.min";
import SearchButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import { useNavigation } from '@react-navigation/native'
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import SearchInput from '../../components/SearchInput/SearchInput'

import Parse from 'parse/react-native.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
Parse.initialize('XwnlQIY0f0GyOzt5DftAZEYLOy9YZmT26ZIktF94', 'L4fRRElgmLuKvanPenznzblgXwqDJGtxIKG0dB8j');
Parse.serverURL = 'https://parseapi.back4app.com/';

// building the home screen


const Clothes = ({route}) => {
    const {action} = route.params;
    const {currUser} = route.params;
    const navigation = useNavigation()

    const onPostNowPressed = async () => {
        console.warn('Post pressed')

        /* creating an ITEM row on backend */
        let category = "Clothes";

        navigation.navigate('Item', {action: action, currUser: currUser, category: category, clotheType: clotheType, color: color, size: size});
    }


    const [clotheType, setClotheType] = useState(" ");
    const [color, setColor] = useState(" ");
    const [size, setSize] = useState(" ");

    console.log('Clothes options:')
    console.log('Clothes Type: '+ clotheType);
    console.log('Color: '+ color);
    console.log('Size: '+ size);
    console.log('Action: '+ action);

    return (
        <ScrollView style={{ backgroundColor: '#E7EAF4' }} >
            <Text style={{ marginLeft: 30, marginTop: 30, fontWeight: 'bold', fontSize: 18 }}>Clothes Type:</Text>
            <View>
                <RadioButtonGroup
                    containerStyle={{ marginTop: 10, marginLeft: 35 }}
                    selected={clotheType}
                    onSelected={(value) => setClotheType(value)}
                    radioBackground="#436cc9"
                >
                    <RadioButtonItem value="coat" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}>Coat</Text>} />
                    <RadioButtonItem value="shirt" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}>Shirt</Text>} />
                    <RadioButtonItem value="hoodie" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}>Hoodie</Text>} />
                    <RadioButtonItem value="sweater" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}>Sweater</Text>} />
                    <RadioButtonItem value="dress" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}>Dress</Text>} />
                    <RadioButtonItem value="skirt" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}>Skirt</Text>} />
                    <RadioButtonItem value="pants/jeans" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}>Pants/Jeans</Text>} />
                    <RadioButtonItem value="scarf" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}>Scarfs, hats and gloves</Text>} />
                </RadioButtonGroup>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <View style={{ backgroundColor: '#D4D4D6', height: 1, flex: 1, alignSelf: 'center' }} />
            </View>

            <Text style={{ marginLeft: 30, marginTop: 30, fontWeight: 'bold', fontSize: 18 }}>Size:</Text>
            <View>
                <RadioButtonGroup
                    containerStyle={{ flexDirection: "row", marginTop: 10, marginLeft: 35, marginBottom: 5 }}
                    selected={size}
                    onSelected={(value) => setSize(value)}
                    radioBackground="#436cc9"
                >
                    <RadioButtonItem value="XS" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}> XS          </Text>} />
                    <RadioButtonItem value="S" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}> S             </Text>} />
                    <RadioButtonItem value="M" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}>M </Text>} />
                </RadioButtonGroup>
                <RadioButtonGroup
                    containerStyle={{ flexDirection: "row", marginLeft: 35 }}
                    selected={size}
                    onSelected={(value) => setSize(value)}
                    radioBackground="#436cc9"
                >
                    <RadioButtonItem value="L" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}> L             </Text>} />
                    <RadioButtonItem value="XL" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}>XL           </Text>} />

                </RadioButtonGroup>
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
                    <RadioButtonItem value="brown" label={<Text style={{ fontSize: 15, padding: 10, fontWeight: '700' }}>Brown    </Text>} />
                    <RadioButtonItem value="gray" label={<Text style={{ fontSize: 15, padding: 10, fontWeight: '700' }}>Gray    </Text>} />
                </RadioButtonGroup>
                <RadioButtonGroup
                    containerStyle={{ flexDirection: "row", marginTop: 10, marginLeft: 35 }}
                    selected={color}
                    onSelected={(value) => setColor(value)}
                    radioBackground="#436cc9"
                >
                    <RadioButtonItem value="red" label={<Text style={{ fontSize: 15, padding: 10, fontWeight: '700' }}>Red        </Text>} />
                    <RadioButtonItem value="blue" label={<Text style={{ fontSize: 15, padding: 10, fontWeight: '700' }}>Blue       </Text>} />
                    <RadioButtonItem value="yellow" label={<Text style={{ fontSize: 15, padding: 10, fontWeight: '700' }}>Yellow</Text>} />
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
                />
            </View>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <View style={{ backgroundColor: '#D4D4D6', height: 1, flex: 1, alignSelf: 'center' }} />
            </View>

            <Text style={{ marginLeft: 30, marginTop: 30, fontWeight: 'bold', fontSize: 18 }}>Brands:</Text>
            <View style={[styles.position]}>
                <SearchInput
                    name="BrandInput"
                    placeholder="Enter your item brand here..."
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

// exporting the home screen to be used in the app (so it can be used in other screens)
export default Clothes;