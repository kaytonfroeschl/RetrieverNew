// this is a temporary home screen lol 
import React, {useState} from "react";
import { Alert, View, Text, StyleSheet, ScrollView, Image, RefreshControl, SafeAreaView, TouchableOpacity } from "react-native";
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
import { List, Title, Button as PaperButton, Text as PaperText } from 'react-native-paper';
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

        /*const clearQueryResults = async function () {
            setQueryResults(null);
            return true;
        };*/

        /* //OLD Query the Lost Items
         let parseQuery = new Parse.Query('Item');
         parseQuery.equalTo('Action', false);
         let queryResults = await parseQuery.findAll();
         //results of all lost items
         console.log(queryResults);*/

    const onChatPressed = async () => {
        console.warn('Chat pressed')
        navigation.navigate('Chat Page')
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

        //state variable
        const [queryResults, setQueryResults] = useState(null);


        //START HERE. Feed may need a different page than lost and found do.
        const onFeedPressed = async function () {
            console.warn('Refresh the feed page')
            console.log("Showing all items in Item Database:");

            // This will create your query
            const parseQuery = new Parse.Query('Item');
            parseQuery.descending('createdAt');
   
           try {
               console.log('entered try block');
              let allItems = await parseQuery.find();
              setQueryResults(allItems);
              for (let result of allItems) {
                   // You access `Parse.Objects` attributes by using `.get`
                   console.log(`object id: ${result.get('objectId')}, type: ${result.get('Action')}`);
               };
               return true;
           } catch (error) {
               // Error can be caused by lack of Internet connection
               Alert.alert('Error!', error.message);
               return false;
           }
        };

        const onFoundPressed = async function () {
            console.warn('Show all Found items');
            console.log("Found Items:");

            // This will create your query
            const parseQuery = new Parse.Query('Found');
            parseQuery.descending('createdAt');
   
           try {
               console.log('entered try block');
              let foundItems = await parseQuery.find();
              setQueryResults(foundItems);
              for (let result of foundItems) {
                   // You access `Parse.Objects` attributes by using `.get`
                   console.log(`name: ${result.get('itemID')}, type: ${result.get('Type')}`);
               };
               return true;
           } catch (error) {
               // Error can be caused by lack of Internet connection
               Alert.alert('Error!', error.message);
               return false;
           }
        };
        
        const onLostPressed = async function () {
            console.warn('Show all Lost Items');
            console.log("Lost Items:");
    
            // This will create your query
             const parseQuery = new Parse.Query('Lost');
             parseQuery.descending('createdAt');
    
            try {
                console.log('entered try block');
               let lostItems = await parseQuery.find();
               setQueryResults(lostItems);
               for (let result of lostItems) {
                    // You access `Parse.Objects` attributes by using `.get`
                    console.log(`name: ${result.get('itemID')}, type: ${result.get('Type')}`);
                };
                return true;
            } catch (error) {
                // Error can be caused by lack of Internet connection
                Alert.alert('Error!', error.message);
                return false;
            }
        };


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
                            onPress={() => onLostPressed()}
                        />
                    </View >
                </View>
                <ScrollView contentContainerStyle={styles.scrollView}
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                    <View style={styles.root}>
                        <Title>{'Result List'}</Title>
                        {/* Results List */}
                        {queryResults !== null &&
                            queryResults !== undefined &&
                            queryResults.map((lost) => (
                                <List.Item
                                    key={lost.id}
                                    title={lost.get('Name')}
                                    description={`Location: ${lost.get(
                                        'Location',
                                    )}`}
                                    titleStyle={{fontSize: 20}}
                                    style={{width: '90%', borderBottomWidth: 1, fontSize: 15, borderBottomColor: 'rgba(0, 0, 0, 0.12)'}}
                                 />
                                ))}
                            {queryResults === null ||
                             queryResults === undefined ||
                            (queryResults !== null &&
                                queryResults !== undefined &&
                                queryResults.length <= 0) ? (
                                <Text>{'No results here!'}</Text>
                              ) : null}
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