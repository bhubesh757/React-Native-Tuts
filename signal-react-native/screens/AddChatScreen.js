import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Input } from 'react-native-elements'
import { AntDesign } from '@expo/vector-icons'
import { db } from '../firebase'

const AddChatScreen = ({navigation}) => {

    const [input, setinput] = useState('')

    useLayoutEffect(() => {
      navigation.setOptions({
          title : 'Add a New Chat',

      })
    }, [navigation])

    const createChat = async () => {
        await db.collection('chats').add({
            chatName : input 
        })
        .then (() => {
            navigation.goBack();

        })
        .catch((error)=> alert(error) )

    }


    return (
        <View style = {styles.container}>
            {/* <Text>Chat</Text> */}
            <Input placeholder = 'Enter a Chat Name'
            value = {input}
            onSubmitEditing = {createChat}
            onChangeText = {(text ) => setinput(text)}
            leftIcon =  {
                <View>

                    <AntDesign name = 'wechat'  size = {24} color= 'black'></AntDesign>
                </View>
            }
            >
            </Input>
            <Button disabled = {input} onPress = {createChat} title = 'Add New Chat'> New chat</Button>
        </View>
    )
}

export default AddChatScreen

const styles = StyleSheet.create({
    container : {
        backgroundColor : 'white',
        padding : 30,
        height : '100%'
    }
})
