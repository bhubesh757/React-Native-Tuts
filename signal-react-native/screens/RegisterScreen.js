import { StatusBar } from 'expo-status-bar'
import { auth } from '/home/bhubesh/signal-react-native/firebase.js'
import React, { useLayoutEffect, useState } from 'react'
import {  KeyboardAvoidingView, StyleSheet, View } from 'react-native'
import { Input , Button , Text } from 'react-native-elements'

const RegisterScreen = ({navigation}) => {

    // useState

    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [profilepic, setprofilepic] = useState('');


    useLayoutEffect(() => {
        navigation.setOptions({
          headerTruncatedBackTitle : 'Back to Login'
        })
      }, [navigation])  //passing navigation as dependency

    //   ios
    // Register 

    const register = () => {
            auth.createUserWithEmailAndPassword(email , password)
            .then((authUser) => {
                authUser.user.updateProfile({
                    displayName : name ,
                    photoURL : profilepic || 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png' ,

                }) 
            })
            .catch((error) => alert(error.message))
    }

    const Register = () => {

    }



    return (
        <KeyboardAvoidingView behaviour = 'padding' 
        style = {styles.container}>
            <StatusBar style = 'light'></StatusBar>
            <Text
            h3 style = {{marginBottom : 50}}
            >Create a Signal Account
            </Text>


            <View style = {styles.inputcontainer}>
                <Input placeholder = 'Full Name ' autoFocus type = 'text' 
                value = {name} 
                onChangeText = {(text) => setname(text)}
                ></Input>
                <Input placeholder = 'Email ' autoFocus type = 'email' 
                value = {email} 
                onChangeText = {(text) => setemail(text)}
                ></Input>
                <Input placeholder = 'Password' autoFocus secureTextEntry type = 'password' 
                value = {password} 
                onChangeText = {(text) => setpassword(text)}
                ></Input>
                <Input placeholder = 'Profilepic Url' autoFocus type = 'text' 
                value = {profilepic} 
                onChangeText = {(text) => setprofilepic(text)}
                onSubmitEditing = {register}
                ></Input>
            </View>

            <Button
            containerStyle = {styles.button}
            raised 
            title = 'Register'
            onPress = {register}
            ></Button>
            <View style = {{height : 100}} ></View>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems :'center',
        justifyContent : 'center',
        padding : 10,
        backgroundColor : 'white'
    },
    button : {
        width : 200,
        marginTop : 10
    },
    inputcontainer : {
        width : 300
    }
})
