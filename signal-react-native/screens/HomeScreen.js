import { auth, db } from '/home/bhubesh/signal-react-native/firebase.js'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, View , SafeAreaView , TouchableOpacity} from 'react-native'
import { Avatar } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'
// import { SafeAreaView } from 'react-native-safe-area-context'
import CustomListItem from './components/CustomListItem'
import {AntDesign , Entypo, SimpleLineIcons} from '@expo/vector-icons'
const HomeScreen = ({navigation}) => { 


    const [chats, setchats] = useState([])

    // signout
    // it logouts the from the current user
    const signOutUser = () => {
        auth.signOut()
        .then(() => {
            navigation.replace('Login')
        })
    }

// using the useEfect function

    useEffect(() => {
       const unsubscribe = db.collection('chats')
       .onSnapshot(snapshot => (
           setchats(snapshot.docs.map(doc => ({
               id : doc.id,
               data : doc.data(),
           })))
       ))

       return unsubscribe;
    }, [])

    useLayoutEffect(() => {
       navigation.setOptions({
           title : 'Signal',
           headerTitleAlign : 'center',
           headerStyle : {backgroundColor : '#fff'},
            headerTitleStyle : {color : 'black'},
            headerTintcolor : 'black',
            headerLeft : () => (
                <View style = {{marginLeft : 20 }}>
                    <TouchableOpacity onPress = {signOutUser} activeOpacity = {0.5}  >
                    <Avatar
                    rounded
                    source = {{
                        uri : auth?.currentUser?.photoURL
                    }}
                    >
                    </Avatar>
                    </TouchableOpacity>
                </View>
       ),

       headerRight : () => (
           <View style = {{
               flexDirection : 'row',
               justifyContent : 'space-between',
               width : 80 , 
               marginRight : 20
           }}>
               <TouchableOpacity>
                   <Entypo name = 'camera' size = {24} color = 'black'></Entypo>
               </TouchableOpacity>
               <TouchableOpacity>
                   <SimpleLineIcons 
                   onPress = {() => navigation.navigate('AddChat')}
                   name = 'pencil' color = 'black' size = {24}></SimpleLineIcons>
               </TouchableOpacity>
           

           </View>
       ),
    });
    }, [navigation])


    const enterChat = (id , chatName) => {
        navigation.navigate('Chat' , {
            id ,
            chatName ,
        })
    }

    return (
        <SafeAreaView>
            <ScrollView style = {styles.container}>
                {chats.map(({id , data : {chatName }}) => (
                    <CustomListItem 
                    key = {id}
                    id = {id} 
                    enterChat = {enterChat}
                    chatName = {chatName}
                    ></CustomListItem>
                ))}
            {/* <Text>This is HomePage!! Boom</Text> */}
            {/* <CustomListItem></CustomListItem> */}
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container : {
        height : '100%',

    }
})
