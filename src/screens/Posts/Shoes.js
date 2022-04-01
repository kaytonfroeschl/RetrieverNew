
import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-web";
import { Component } from "react/cjs/react.production.min";
import SearchButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import { useNavigation } from '@react-navigation/native'
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import SearchInput from '../../components/SearchInput/SearchInput'

// building the home screen
//FRONTEND: shouldnt it say shoepage?
const jacketPage = ({route}) => {
    const {action} = route.params;
    const {currUser} = route.params;
    const navigation = useNavigation()
    const onPostNowPressed = async () => {
        console.warn('Post pressed')
        let category = "Shoes";
        navigation.navigate('Item', {action: action, currUser: currUser, category: category, clotheType: clotheType, color: color, size: size});
    }

     /* FRONT-END!
        Need variable for the value of brand
    */
    const [clotheType, setClotheType] = useState(" ");
    const [color, setColor] = useState(" ");
    const [size, setSize] = useState(" ");

    console.log('Shoe options:')
    console.log('Shoe Type: '+ clotheType);
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
                    <RadioButtonItem value="sandals" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}>Sandals</Text>} />
                    <RadioButtonItem value="boot" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}>Boots</Text>} />
                    <RadioButtonItem value="sneaker" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}>Sneakers</Text>} />
                    <RadioButtonItem value="leather" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}>Leather shoes</Text>} />
                    <RadioButtonItem value="highheel" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}>High Heels</Text>} />
                    <RadioButtonItem value="flipflop" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}>Flip Flops</Text>} />
                </RadioButtonGroup>
            </View>
            <View style={{ marginTop: 20 }}>
                <View style={{ backgroundColor: '#D4D4D6', height: 1, flex: 1, alignSelf: 'center' }} />
            </View>

            <Text style={{ marginLeft: 30, marginTop: 30, fontWeight: 'bold', fontSize: 18 }}>Size:</Text>
            <View>
                <RadioButtonGroup
                    containerStyle={{ marginTop: 10, marginLeft: 35, marginBottom: 5 }}
                    selected={size}
                    onSelected={(value) => setSize(value)}
                    radioBackground="#436cc9"
                >
                    <RadioButtonItem value="XS" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}>3 or3.5                   </Text>} />
                    <RadioButtonItem value="S" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}> 4 or 4.5             </Text>} />

                </RadioButtonGroup>
                <RadioButtonGroup
                    containerStyle={{ marginLeft: 35 }}
                    selected={size}
                    onSelected={(value) => setSize(value)}
                    radioBackground="#436cc9"
                >
                    <RadioButtonItem value="M" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}>5 or 5.5                   </Text>} />
                    <RadioButtonItem value="6" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}>6 or 6.5            </Text>} />

                </RadioButtonGroup>
                <RadioButtonGroup
                    containerStyle={{ marginLeft: 35 }}
                    selected={size}
                    onSelected={(value) => setSize(value)}
                    radioBackground="#436cc9"
                >
                    <RadioButtonItem value="7" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}>7 or 7.5                    </Text>} />
                    <RadioButtonItem value="8" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}>8 or 8.5             </Text>} />
                </RadioButtonGroup>
                <RadioButtonGroup
                    containerStyle={{ marginLeft: 35 }}
                    selected={size}
                    onSelected={(value) => setSize(value)}
                    radioBackground="#436cc9"
                >
                    <RadioButtonItem value="9" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}>9 or 9.5                   </Text>} />
                    <RadioButtonItem value="10" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}>10 or 10.5          </Text>} />
                </RadioButtonGroup>
                <RadioButtonGroup
                    containerStyle={{ marginLeft: 35 }}
                    selected={size}
                    onSelected={(value) => setSize(value)}
                    radioBackground="#436cc9"
                >
                    <RadioButtonItem value="11" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}>11 or 11.5                 </Text>} />
                    <RadioButtonItem value="12" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}>12 or12.5        </Text>} />
                </RadioButtonGroup>
                <RadioButtonGroup
                    containerStyle={{ marginLeft: 35 }}
                    selected={size}
                    onSelected={(value) => setSize(value)}
                    radioBackground="#436cc9"
                >
                    <RadioButtonItem value="13" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}>13 or 13.5                </Text>} />
                    <RadioButtonItem value="14" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}>14 or 14.5             </Text>} />
                </RadioButtonGroup>
                <RadioButtonGroup
                    containerStyle={{ marginLeft: 35 }}
                    selected={size}
                    onSelected={(value) => setSize(value)}
                    radioBackground="#436cc9"
                >
                    <RadioButtonItem value="15" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}>15 or 15.5                </Text>} />
                    <RadioButtonItem value="16" label={<Text style={{ fontSize: 15, padding: 7, fontWeight: '700' }}>16 or 16.5             </Text>} />
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
export default jacketPage;