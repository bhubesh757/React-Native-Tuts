import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, TextInput,Text , TouchableOpacity, View , SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, Keyboard, TouchableWithoutFeedback} from 'react-native'
import { Avatar } from 'react-native-elements'
import { auth, db } from '/home/bhubesh/signal-react-native/firebase.js'
// import {firebase} from '/home/bhubesh/signal-react-native/firebase.js'
import * as firebase from 'firebase'

import { YellowBox } from 'react-native';
import _ from 'lodash';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

const ChatScreen = ({navigation , route }) => {

    const [input, setinput] = useState('');
    const [messages, setmessages] = useState([])

    useLayoutEffect(() => {
       navigation.setOptions({
        title : 'chat',
        headerTitleAlign : 'left',
        headerTitle : () => (
            <View
            style = {{
                flexDirection : "row",
                alignItems : 'center',
                paddingRight : 50,
            }}
            >
                {/* its important */}
                <Avatar rounded source = {{uri : messages[0]?.data.photoURL}} ></Avatar>
                <Text
                style = {{color : 'white' , marginLeft : 10 , fontWeight : '700'}}
                > {route.params.chatName} </Text>
            </View>
        ),
        headerLeft : () => (
            <TouchableOpacity
            style = {{marginLeft : 10}}
            onPress = {navigation.goBack}
            >
                <AntDesign name="arrowleft" size={24} color="white" />
            </TouchableOpacity>
        ),
        headerRight : () => (
            <View
            style = {{
                flexDirection : 'row',
                justifyContent : 'space-between',
                width : 80 ,
                marginRight  : 20
            }}
            >
                <TouchableOpacity>
                    <FontAwesome name = 'video-camera' size = {22} color = 'white'></FontAwesome>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name = 'call' size = {22} color = 'white'></Ionicons>
                </TouchableOpacity>
            </View>
        )
       })
       
    }, [navigation , messages])

    const sendMessage = () => {
        Keyboard.dismiss(); //it dismisses the keyboard after dismissing
        db.collection('chats').doc(route.params.id)
        .collection('messages').add({
            timestamp : firebase.firestore.FieldValue.serverTimestamp(),
            message :input ,
            displayName : auth.currentUser.displayName,
            email : auth.currentUser.email,
            photoURL : auth.currentUser.photoURL
        })

        setinput('')
    }


    // useLayout

    useLayoutEffect(() => {
        const unsubscribe = db.collection('chats')
        .doc(route.params.id).collection('messages')
        .orderBy('timestamp' ,'asc')
        .onSnapshot((snapshot) => setmessages(
            snapshot.docs.map(doc => ({
                id : doc.id,
                data : doc.data()
            }))
        ))
        return unsubscribe;
    }, [route])

    return (
        <SafeAreaView style = {{
            flex : 1 ,
            backgroundColor : 'white'
        }}>
            <StatusBar style = 'light'></StatusBar>
            <KeyboardAvoidingView
            behaviour = {Platform.OS === 'ios' ? "padding" : 'height'}
            style = {styles.container}
            keyboardVerticalOffset = {90}
            >

                    {/* <> */}
                <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
                    <>
                <ScrollView contentContainerStyle = {{paddingTop : 15}}>
                    {/* chatmessage */}
            {messages.map(({id , data}) => (
                data.email == auth.currentUser.email ? (
                    <View key = {id} style = {styles.reciever}>
                    <Avatar
                    position = "absolute"
                    rounded
                    containerStyle = {{
                        position : 'absolute',
                        bottom   : -17 ,
                        right : -6 
                    }}
                    size = {25}
                    source = {{
                        uri : data.photoURL,
                    }}
                    ></Avatar>
                       <Text style = {styles.senderText}>
                           {data.message}
                       </Text>
                       {/* <Text style = {styles.senderName}>
                           {data.displayName}
                       </Text> */}
               </View>
                ):(
                    <View key = {id} style = {styles.sender}>
                         <Avatar
                         position = "absolute"
                         rounded
                         containerStyle = {{
                             position : 'absolute',
                             bottom   : -17 ,
                             right : -6 
                         }}
                         size = {25}
                         source = {{
                             uri : data.photoURL,
                         }}
                         ></Avatar>
                            <Text style = {styles.senderText}>
                                {data.message}
                            </Text>
                            {/* <Text style = {styles.senderName}>
                                {data.displayName}
                            </Text> */}
                    </View>
                )
                    ))}
                </ScrollView>

                <View style = {styles.footer}>
                <TextInput value = {input} 
                onChangeText = {(text => setinput(text))}
                onSubmitEditing = {sendMessage} 
                placeholder = 'Signal Message'
                style = {styles.textInput}
                >
                </TextInput>
                <TouchableOpacity 
                    onPress = {sendMessage}
                    activeOpacity = {0.5}>
                        <Ionicons name="send" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                </>
                </TouchableWithoutFeedback>

                
            </KeyboardAvoidingView>
            {/* <Text> {route.params.chatName} </Text> */}
        </SafeAreaView>
    )
}

export default ChatScreen

const styles = StyleSheet.create({

    container : {
        flex : 1,

    },
    footer : {
        flexDirection : 'row',
        alignItems : 'center',
        width : '100%',
        padding : 15,
    },

    reciever : {
        padding : 15,
        backgroundColor : '#ECECEC',
        alignSelf : 'flex-end',
        borderRadius : 20 ,
        marginRight : 15 ,
        marginBottom : 20 ,
        maxWidth : '80%',
        position : 'relative',
        

    },

    sender : {
        padding : 15,
        backgroundColor : '#50DBB4',
        alignSelf : 'flex-start',
        borderRadius : 20 ,
        marginLeft : 15 ,
        marginBottom : 20 ,
        maxWidth : '80%',
        position : 'relative',
    },

    senderName : {
        left  : 5 ,
        paddingRight : 10 ,
        fontSize : 0.5 ,
        color : 'white'
    },
    textInput : {
        bottom : 0,
        height : 40 ,
        flex: 1 ,
        marginRight : 15 ,
        borderColor : 'transparent',
        backgroundColor : '#ECECEC',
        borderWidth : 1 ,
        padding : 10 ,
        color : 'gray' ,
        borderRadius : 30
    }
})
