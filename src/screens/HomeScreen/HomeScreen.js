// this is a temporary home screen lol 
import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import Logo from '../../../assets/images/clipart4739493.png'
import { TextInput } from "react-native-web";
import { Component } from "react/cjs/react.production.min";
import CustomButton from '../../components/CustomButton'
import SearchInput from '../../components/SearchInput/SearchInput'
import { useNavigation } from '@react-navigation/native'
import Setting from '../Setting/Setting';
import 'react-native-gesture-handler';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import Logout from '../SignInScreen/SignInScreen';
const Drawer = createDrawerNavigator()
function CustomDrawerContent(props) {
    return (
        //Yuying: These for the User profile.
        //Yuying: The user can upload self images here, and also check their account infos.
        //Yuying: Still need some logic setup
        <DrawerContentScrollView {...props}>
            <DrawerItem
                label="User Image"
                onPress={() => alert("Change User Image here")}
            />
            <DrawerItem
                label="User Name"
            />
            <DrawerItem
                label="#123456"
            />
            <DrawerItem
                label="More User Information"
            />
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}
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
        console.warn('Refresh the feed page')
        navigation.navigate('Home')
    }
    const onPostPressed = async () => {
        console.warn('Post pressed')
        navigation.navigate('Post')
    }

    const Home = () => {
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
                            text="Post"
                            type="PRIMARY"
                            onPress={onPostPressed}
                        />
                    </View>
                    <View style={[styles.btn01]}>
                        <CustomButton
                            text="Chat"
                            type="TERTIARY"
                            onPress={onChatPressed}
                        />
                    </View >
                </View>

            </View >);
    }

    return (
        //Yuying: These are the side menu navigate to the App setting and Logout
        //Yuying：The problem with logout is the user will no longer need password to login in
        //        after logout using the side menu tab.
        //        Still need some logic setup.
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            headerShown={false}
            screenOptions={{
                drawerStyle: {
                    backgroundColor: '#E7EAF4',
                    width: 270,
                }

            }}
        >

            <Drawer.Screen
                name="Home" component={Home}
            />
            <Drawer.Screen
                name="Settings" component={Setting}
            />
            <Drawer.Screen
                name="Logout" component={Logout}
            />
        </Drawer.Navigator>
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
        marginTop: 0,
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