/* eslint-disable prettier/prettier */
import React, { useState} from 'react'
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import Logo from '../../../assets/images/clipart4739493.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'

//import { useAuth } from '../../../providers/AuthProvider';
import Parse from 'parse/react-native.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
Parse.initialize('XwnlQIY0f0GyOzt5DftAZEYLOy9YZmT26ZIktF94', 'L4fRRElgmLuKvanPenznzblgXwqDJGtxIKG0dB8j');
Parse.serverURL = 'https://parseapi.back4app.com/';



// building the screen for signing in (essentially the first page new users see)
const SignInScreen = () => {
    //const [username, setUsername] = useState('')
    //const [password, setPassword] = useState('')
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    //const { user, signUp, signIn } = useAuth();

    const {height} = useWindowDimensions()
    const navigation = useNavigation()


    function logIn(){
        var user = Parse.User.logIn(username, password).then(function(user){
            console.log('User created successful with name: ' + user.get("username") + ' and email: ' + user.get("email"));
            navigation.navigate('Home');
        }).catch(function(error){
            console.log("Error: " + error.code + " " + error.message);
            //FRONT END: maybe add an error message saying either username or password was invalid
         });
    }

    const logInFacebook = async function () {
        try {
          // Login using the Facebook login dialog asking form email permission
          return await LoginManager.logInWithPermissions(['email']).then(
            (loginResult) => {
              if (loginResult.isCancelled) {
                console.log('Login cancelled');
                return false;
              } else {
                // Retrieve access token from FBSDK to be able to linkWith Parse
                AccessToken.getCurrentAccessToken().then((data) => {
                  const facebookAccessToken = data.accessToken;
                  // Callback that will be called after FBSDK successfuly retrieves user email and id from FB
                  const responseEmailCallback = async (
                    error,
                    emailResult,
                  ) => {
                    if (error) {
                      console.log('Error fetching data: ' + error.toString());
                    } else {
                      // Format authData to provide correctly for Facebook linkWith on Parse
                      const facebookId = emailResult.id;
                      const facebookEmail = emailResult.email;
                      const authData = {
                        id: facebookId,
                        access_token: facebookAccessToken,
                      };
                      // Log in or sign up on Parse using this Facebook credentials
                      let userToLogin = new Parse.User();
                      // Set username and email to match provider email
                      userToLogin.set('username', facebookEmail);
                      userToLogin.set('email', facebookEmail);
                      return await userToLogin
                        .linkWith('facebook', {
                          authData: authData,
                        })
                        .then(async (loggedInUser) => {
                          // logIn returns the corresponding ParseUser object
                          console.log(
                            'Success!',
                            `User ${loggedInUser.get(
                              'username',
                            )} has successfully signed in!`,
                          );
                          // To verify that this is in fact the current user, currentAsync can be used
                          const currentUser = await Parse.User.currentAsync();
                          console.log(loggedInUser === currentUser);
                          // Navigation.navigate takes the user to the screen named after the one
                          // passed as parameter
                          navigation.navigate('Home');
                          return true;
                        })
                        .catch(async (error) => {
                          // Error can be caused by wrong parameters or lack of Internet connection
                          console.log('Error!', error.message);
                          return false;
                        });
                    }
                  };
      
                  // Formats a FBSDK GraphRequest to retrieve user email and id
                  const emailRequest = new GraphRequest(
                    '/me',
                    {
                      accessToken: facebookAccessToken,
                      parameters: {
                        fields: {
                          string: 'email',
                        },
                      },
                    },
                    responseEmailCallback,
                  );
      
                  // Start the graph request, which will call the callback after finished
                  new GraphRequestManager().addRequest(emailRequest).start();
      
                  return true;
                });
              }
            },
            (error) => {
              console.log('Login fail with error: ' + error);
              return false;
            },
          );
        } catch (error) {
          console.log('Error!', error.code);
          return false;
        }
      };


    // what happens when user presses "Sign In"
    const onSignInPressed = async () => {
        console.warn('Sign In pressed')
        //console.log("Press sign in");
        //validate username and password
        //backend call needed here (@kayton, @celia)
        //if success, navigate to home screen

        logIn();
    }

    // what happens when user presses "Forgot Password"
    const onForgotPasswordPressed = () => {
        console.warn('Forgot Password pressed')
        //navigate to forgot password screen

        navigation.navigate('Reset Password')
    }

    // what happens when user presses "Sign Up"
    const onSignUpPressed = () => {
        console.warn('Sign Up pressed')
        //navigate to sign up screen

        navigation.navigate('Sign Up')
    }

    // what happens when user presses "Sign In with Facebook"
    const onSignInFacebookPressed = () => {
        console.warn('Sign In with Facebook pressed')

        logInFacebook();
    }

    // what happens when user presses "Sign In with Google"
    const onSignInGooglePressed = () => {
        console.warn('Sign In with Google pressed')

        // need to set up logic here
    }

    // what happens when user presses "Sign In with Apple"
    const onSignInApplePressed = () => {
        console.warn('Sign In with Apple pressed')

        // need to set up logic here
    }

    // setting up how the actual page looks
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image 
                    source={Logo}
                    style={styles.logo, {height: height * 0.15, marginTop: 25}}
                    resizeMode="contain" 
                />

                <Text 
                    style={styles.headerText}                
                    >
                        Retriever
                </Text>

                <CustomInput 
                    placeholder="Username" 
                    value={username} //was username
                    setValue={setUsername} //was setUsername
                />

                <CustomInput 
                    placeholder="Password"
                    value={password} 
                    setValue={setPassword} 
                    secureTextEntry={true}
                />

                <CustomButton
                    text="Sign In"
                    onPress={onSignInPressed}
                />

                <CustomButton
                    text="Forgot Password"
                    onPress={onForgotPasswordPressed}
                    type="TERTIARY"
                />

                <CustomButton
                    text= "Sign in with Facebook" 
                    onPress={onSignInFacebookPressed}
                    foregroundColor="#E7EAF4"
                    backgroundColor="#436cc9"
                />

                <CustomButton
                    text= "Sign in with Google"
                    onPress={onSignInGooglePressed}
                    foregroundColor="#FAE9EA"
                    backgroundColor="#Bb6551"
                />

                <CustomButton
                    text= "Sign in with Apple"
                    onPress={onSignInApplePressed}
                    foregroundColor="#e3e3e3"
                    backgroundColor="#424242"
                />

                <CustomButton
                    text="Don't have an account? Create one"
                    onPress={onSignUpPressed}
                    type="TERTIARY"
                />
            </View>
        </ScrollView>
    ) 
}

// making the screen look pretty
const styles = StyleSheet.create({
    
    root: {
        alignItems: 'center',
        padding: 40,
        backgroundColor: '#3b5998',
    },

    logo: {
        width:  '70%', 
        maxWidth: 300,
        maxHeight: 200,
    },

    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 5,
        color: 'white',

    },
   
})

// exporting the screen to be used in the app (as "SignInScreen")
export default SignInScreen