
import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-web";
import { Component } from "react/cjs/react.production.min";
import SearchButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import { useNavigation } from '@react-navigation/native'
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import SearchInput from '../../components/SearchInput/SearchInput'


const Personal = ({route}) => {
    const {action} = route.params;
    const navigation = useNavigation()
    const onPostNowPressed = async () => {
        console.warn('Post pressed')
        navigation.navigate('Item')
    }
    const [clotheType, setClotheType] = useState(" ");
    const [color, setColor] = useState(" ");
    const [size, setSize] = useState(" ");

    console.log('Personal Items options:')
    console.log('Type: '+ clotheType);
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
                    <RadioButtonItem value="wallet" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}>Wallet</Text>} />
                    <RadioButtonItem value="keys" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}>keys</Text>} />
                    <RadioButtonItem value="id" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}>ID</Text>} />
                    <RadioButtonItem value="cards" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}>Cards</Text>} />
                    <RadioButtonItem value="other" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}>Other</Text>} />
                </RadioButtonGroup>
            </View>
            <View style={[styles.position]}>
                <SearchInput
                    name="typeInput"
                    placeholder="What is this Item?"
                />
            </View>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <View style={{ backgroundColor: '#D4D4D6', height: 1, flex: 1, alignSelf: 'center' }} />
            </View>

            <Text style={{ marginLeft: 30, marginTop: 30, fontWeight: 'bold', fontSize: 18 }}>Identification:</Text>
            <View>
                <RadioButtonGroup
                    containerStyle={{ marginTop: 10, marginLeft: 35, marginBottom: 5 }}
                    selected={size}
                    onSelected={(value) => setSize(value)}
                    radioBackground="#436cc9"
                >
                    <RadioButtonItem value="no" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}> No/Don't want to provide</Text>} />
                    <RadioButtonItem value="samsung" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}>Yes           </Text>} />
                </RadioButtonGroup>
            </View>
            <View style={[styles.position]}>
                <Text style={{ marginTop: 10, fontSize: 16 }}>Name/Bank Name:</Text>
                <SearchInput
                    name="infoInput"
                    placeholder="Enter name..."
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
                    <RadioButtonItem value="brown" label={<Text style={{ fontSize: 15, padding: 10, fontWeight: '700' }}>Blue    </Text>} />
                    <RadioButtonItem value="gray" label={<Text style={{ fontSize: 15, padding: 10, fontWeight: '700' }}>Gray    </Text>} />
                </RadioButtonGroup>
                <RadioButtonGroup
                    containerStyle={{ flexDirection: "row", marginTop: 10, marginLeft: 35 }}
                    selected={color}
                    onSelected={(value) => setColor(value)}
                    radioBackground="#436cc9"
                >
                    <RadioButtonItem value="red" label={<Text style={{ fontSize: 15, padding: 10, fontWeight: '700' }}>Green     </Text>} />
                    <RadioButtonItem value="blue" label={<Text style={{ fontSize: 15, padding: 10, fontWeight: '700' }}>Red        </Text>} />
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