import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar, ListItem } from 'react-native-elements'
import { db } from '../../firebase';

const CustomListItem = ({id , chatName , enterChat , displayName , message}) => {

    const [chatMessages, setchatMessages] = useState([]);


    useEffect(() => {
       const unsubscribe = db.collection('chats').doc(id)
       .collection('messages').orderBy('timestamp' , 'asc')
       .onSnapshot((snapshot) => 
       setchatMessages(snapshot.docs.map((doc) => doc.data()))
       );
       return unsubscribe
    }, [])
    return (
        <ListItem  key = {id} onPress = {() => enterChat(id , chatName)} key = {id} bottomDivider >
            <Avatar 
            rounded
            source = {{
                uri : chatMessages?.[0]?.photoURL ||  'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'
            }}
            ></Avatar>

            <ListItem.Content>
                <ListItem.Title style = {{fontWeight : '800'}}>
                        {chatName}
                </ListItem.Title>

                <ListItem.Subtitle numberOfLines = {1}
                    
                >
                        {chatMessages?.[0]?.displayName} : {
                            chatMessages?.[0]?.message
                        }
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}

export default CustomListItem

const styles = StyleSheet.create({})
