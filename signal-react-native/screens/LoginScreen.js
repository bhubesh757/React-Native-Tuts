import { StatusBar } from 'expo-status-bar'
import { auth } from '/home/bhubesh/signal-react-native/firebase.js';
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'

// react native elements

import { Button, Input , Image } from 'react-native-elements';

const LoginScreen = ({navigation}) => {

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    useEffect(() => {
     const unsubscribe =  auth.onAuthStateChanged((authUser) => {
         console.log(authUser);
          if (authUser) {
              navigation.replace('Home');
          }
      })

      return unsubscribe;
    }, [])

    // signIn

    const signIn = () => {
            auth.signInWithEmailAndPassword(email , password ) 
            .catch((error) => alert(error));
    }
    return (
        <KeyboardAvoidingView style = {styles.container}>
            <StatusBar style = 'light'></StatusBar>
            {/* <Text>I am Login Screen</Text> */}
            <Image source = {{
                uri : 'https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png'
            }}
            style = {{ width : 200 , height : 200}}
            />

            <View style = {styles.inputContainer}>
                <Input placeholder = 'Email' 
                autoFocus type = 'Email'
                value = {email} onChangeText = {(text) =>setemail(text) }
                ></Input>
                <Input placeholder = 'Password' secureTextEntry type = 'password'
                value = {password} onChangeText = {(text) =>setpassword(text) }
                onSubmitEditing = {signIn}
                ></Input>
            </View>

            <Button containerStyle = {styles.button} title = 'Login' onPress = {signIn}></Button>
            <Button onPress = {() => navigation.navigate('Register')} containerStyle = {styles.button} title = 'Register' type = 'outline'></Button>
            <View style = {{height : 100}}></View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({

    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
        padding : '10',


    },
    inputContainer : {
        width : 300
    },

    button : {
        width : 200 ,
        marginTop : 10
    }
})
