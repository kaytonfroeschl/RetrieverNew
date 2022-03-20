// this is a temporary home screen lol 
import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import Logo from '../../../assets/images/clipart4739493.png'
import { TextInput } from "react-native-web";
import { Component } from "react/cjs/react.production.min";
import CustomButton from '../../components/CustomButton'
import SearchInput from '../../components/SearchInput/SearchInput'
import { useNavigation } from '@react-navigation/native'

// building the home screen
const HomeScreen = () => {

    const navigation = useNavigation()
    const onSearchPressed = async () => {
        console.warn('Search pressed')
        navigation.navigate('Search Result')
    }
    const onFoundPressed = async () => {
        console.warn('Show all Found items')
    }
    const onLostPressed = async () => {
        console.warn('Show all Lost Items')
    }
    const onChatPressed = async () => {
        console.warn('Chat pressed')
        navigation.navigate('Chat Page')
    }
    const onFeedPressed = async () => {
        console.warn('Feed pressed')
        navigation.navigate('Feed')
    }
    const onProfilePressed = async () => {
        console.warn('Profile pressed')
        navigation.navigate('Profile')
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={[styles.flex, styles.topStatus]}>
                <SearchInput
                    placeholder="Brown Jacket"
                />
            </View>
            <View style={[styles.btn]}>
                <CustomButton
                    text="Go"
                    type="SEARCH"
                    foregroundColor="#E7EAF4"
                    onPress={onSearchPressed}
                />
            </View>
            <View style={{ flexDirection: "row", backgroundColor: '#E7EAF4' }}>
                <View style={[styles.btn00]}>
                    <CustomButton
                        text="FOUND"
                        type="SECONDARY"
                        backgroundColor='#436cc9'
                        onPress={onFoundPressed}
                    />
                </View>
                <View style={[styles.btn00]}>
                    <CustomButton
                        text="LOST"
                        type="SECONDARY"
                        backgroundColor='#436cc9'
                        onPress={onLostPressed}
                    />
                </View >
            </View>
            <ScrollView>
                <View style={styles.root}>
                    <Image
                        source={Logo}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                    <Text style={{ fontSize: 24, alignSelf: 'center' }}>Temp Post 1</Text>
                    <Image
                        source={Logo}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                    <Text style={{ fontSize: 24, alignSelf: 'center' }}>Temp Post 2</Text>
                    <Image
                        source={Logo}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                    <Text style={{ fontSize: 24, alignSelf: 'center' }}>Temp Post 3</Text>
                    <Image
                        source={Logo}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                    <Text style={{ fontSize: 24, alignSelf: 'center' }}>Temp Post 4</Text>
                </View>

            </ScrollView>
            <View style={{ flexDirection: "row" }}>
                <View style={[styles.btn01]}>
                    <CustomButton
                        text="Feed"
                        type="TERTIARY"
                        onPress={onFeedPressed}//should refresh the page, still need logic setup
                    />
                </View>
                <View style={[styles.btn01]}>
                    <CustomButton
                        text="Chat"
                        type="PRIMARY"
                        onPress={onChatPressed}
                    />
                </View>
                <View style={[styles.btn01]}>
                    <CustomButton
                        text="Profile"
                        type="TERTIARY"
                        onPress={onProfilePressed}
                    />
                </View >
            </View>

        </View >
    );
}

// making it look pretty
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 40,
        backgroundColor: '#E7EAF4',
    },
    flex: {
        flex: 1,
    },
    flexDirection: {
        flexDirection: "row",
    },
    topStatus:
    {
        marginTop: 60,
        width: 350,
    },
    btn: {
        width: 360,
        marginLeft: 340,
        marginRight: 60,
        marginTop: -2
    },
    btn00: {
        width: 128,
        marginRight: 50,
        marginLeft: 40,
        height: -100,
    },
    btn01: {
        width: 128,
        marginRight: 5,
        marginLeft: 5,
        height: -100,
    },
    logo: {
        width: 200,
        height: 200,
    },
})

// exporting the home screen to be used in the app (so it can be used in other screens)
export default HomeScreen;