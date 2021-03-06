
import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-web";
import { Component } from "react/cjs/react.production.min";
import SearchButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import { useNavigation } from '@react-navigation/native'
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import SearchInput from '../../components/SearchInput/SearchInput'

const Electronics = ({ route }) => {

    /* Yuying: I don't know if we need different value to handle the custom color input,
               So I comment the code I write about the custom color. 
               Set them free if you think needed.  
    */

    const { action } = route.params;
    const navigation = useNavigation()
    const onPostNowPressed = async () => {
        console.warn('Post pressed')
        navigation.navigate('Item')
    }
    const [Type, setType] = useState(" ");
    const [color, setColor] = useState(" ");
    const [brand, setBrand] = useState(" ");
    const [Custombrand, setCustomBrand] = useState(" ");
    // const [customColor, setCustomColor] = useState("");

    /* FRONT-END!
        Need variable for the value of brand
    */
    //Added
    console.log('Electronic options:')
    console.log('Type: ' + Type);
    console.log('Color: ' + color);
    //console.log('Custom Color: ' + customColor);
    console.log('Brand: ' + brand);
    console.log('Custom Brand' + Custombrand);
    console.log('Action: ' + action);

    return (
        <ScrollView style={{ backgroundColor: '#E7EAF4' }} >
            <Text style={{ marginLeft: 30, marginTop: 30, fontWeight: 'bold', fontSize: 18 }}>Clothes Type:</Text>
            <View>
                <RadioButtonGroup
                    containerStyle={{ marginTop: 10, marginLeft: 35 }}
                    selected={Type}
                    onSelected={(value) => setType(value)}
                    radioBackground="#436cc9"
                >
                    <RadioButtonItem value="phone" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}>Phone</Text>} />
                    <RadioButtonItem value="tablet" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}>Tablet</Text>} />
                    <RadioButtonItem value="laptop" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}>Laptop</Text>} />
                    <RadioButtonItem value="earphone" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}>Earphone</Text>} />
                </RadioButtonGroup>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <View style={{ backgroundColor: '#D4D4D6', height: 1, flex: 1, alignSelf: 'center' }} />
            </View>

            <Text style={{ marginLeft: 30, marginTop: 30, fontWeight: 'bold', fontSize: 18 }}>Brands:</Text>
            <View>
                <RadioButtonGroup
                    containerStyle={{ marginLeft: 35 }}
                    selected={brand}
                    onSelected={(value) => setBrand(value)}
                    radioBackground="#436cc9"
                >
                    <RadioButtonItem value="apple" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}> Apple         </Text>} />
                    <RadioButtonItem value="samsung" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}>Samsung           </Text>} />
                    <RadioButtonItem value="sony" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}>Sony </Text>} />
                    <RadioButtonItem value="nokia" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}> Nokia         </Text>} />
                    <RadioButtonItem value="dell" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}>DELL                   </Text>} />
                    <RadioButtonItem value="lenovo" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}>Lenovo            </Text>} />
                    <RadioButtonItem value="micro" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}> Microsoft  </Text>} />
                    <RadioButtonItem value="jbl" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}>JBL                     </Text>} />
                    <RadioButtonItem value="beats" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}>Beats           </Text>} />
                </RadioButtonGroup>

            </View>
            <View>
                <RadioButtonGroup
                    containerStyle={{ flexDirection: "row", marginLeft: 35 }}
                    selected={brand}
                    onSelected={(value) => setBrand(value)}
                    radioBackground="#436cc9"
                >
                    <RadioButtonItem value="other" label={<Text style={{ fontSize: 15, padding: 10, fontWeight: '700' }}>Other Brands:    </Text>} />
                </RadioButtonGroup>
            </View>
            <View style={[styles.position]}>
                <SearchInput
                    name="BrandInput"
                    placeholder="Enter brands"
                    value={Custombrand}
                    setValue={setCustomBrand}
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

export default Electronics;