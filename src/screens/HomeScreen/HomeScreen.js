// this is a temporary home screen lol 
import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, RefreshControl, SafeAreaView, TouchableOpacity } from "react-native";
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
import Profiles from '../Profiles';

import Parse from 'parse/react-native.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
Parse.initialize('XwnlQIY0f0GyOzt5DftAZEYLOy9YZmT26ZIktF94', 'L4fRRElgmLuKvanPenznzblgXwqDJGtxIKG0dB8j');
Parse.serverURL = 'https://parseapi.back4app.com/';



const Drawer = createDrawerNavigator()

function CustomDrawerContent(props) {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={{flex:1}}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Image
        source={Logo}
        style={styles.icon}
        label="profile image"
        />
        </TouchableOpacity>
        <DrawerContentScrollView {...props}>
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
        </SafeAreaView>
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
        //there are no found items yet
    }
    const onLostPressed = async () => {
        console.warn('Show all Lost Items')
        console.log("Lost Items:")
        
        //Query the Lost Items
        let parseQuery = new Parse.Query('Item');
        parseQuery.equalTo('Action', false);
        let queryResults = await parseQuery.findAll();
        //results of all lost items
        console.log(queryResults);
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
    const wait = timeout => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    };

    const Home = () => {
        const [refreshing, setRefreshing] = React.useState(false);
        const onRefresh = React.useCallback(() => {
            setRefreshing(true);
            wait(1000).then(() => setRefreshing(false));
        }, []);
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
                <View style={{ flexDirection: "row", backgroundColor: '#E7EAF4', justifyContent: 'center' }}>
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
                <ScrollView contentContainerStyle={styles.scrollView}
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
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
                <View style={{ flexDirection: "row", justifyContent: 'center' }}>
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
                name="Home Screen" component={Home}
            />
            <Drawer.Screen
                name="Profile" component={Profiles}
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
        marginLeft: 50,
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
    icon: {
        resizeMode: 'center',
        width: 110,
        height: 110,
        borderRadius: 100 / 2,
        alignSelf: 'center',
        },

})

// exporting the home screen to be used in the app (so it can be used in other screens)
export default HomeScreen;