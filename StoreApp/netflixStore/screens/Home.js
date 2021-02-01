// import { Fab } from 'native-base'
import React, { useEffect, useState } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
// import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons'; 
// import { Fab , Icon } from 'native-base';

import {useIsFocused} from '@react-navigation/native'

import {
    List ,
    ListItem,
    Button ,
    Icon , Body,
    Right,
    Text,
    CheckBox,Title , H1,Fab ,Subtitle,container, Container, Left, Spinner
} from 'native-base'


import AsyncStorage from '@react-native-async-storage/async-storage'



const Home = ({navigation , route}) => {
    const isFocused = useIsFocused(); // what it does is , it makes the page refresh and

    const [listofSeasons, setlistofSeasons] = useState(['title']);
    const [loading, setloading] = useState(false)


    useEffect(() => {
        getList()
    }, [isFocused])


    const getList = async ()  => {
            setloading(true)

            const storedValue = await AsyncStorage.getItem('@season_list');

            if(!storedValue){
                setlistofSeasons([])
            }else{

                const list = JSON.parse(storedValue)
                setlistofSeasons(list)
            }


            setloading(false)
    }

    const deleteSeason = async (id) => {
        const newList = await listofSeasons.filter((list) => list.id !== id)
        await AsyncStorage.setItem('@season_list' , JSON.stringify(newList));

        setlistofSeasons(newList)
    }

    const markComplete = async (id) => {
        const newArr = listofSeasons.map((list) => {
            if (list.id == id) {
                list.isWatched = !list.isWatched
            }

            return list
        })

        await AsyncStorage.setItem('' , JSON.stringify(newArr))
        setlistofSeasons(newArr)
    }

    // loading

    if(loading) {
        return (
            <Container style ={styles.container}>
                <Spinner color = '#00b7c2'></Spinner>
            </Container>
        )
    }
    return (
        <ScrollView contentContainerStyle = {styles.container}>
           
            {
     listofSeasons.length == 0? (
     <Container style = {styles.container} > 
         <H1 style = {styles.heading}>WatchList is Empty , Add a Season</H1>
     </Container>
     ):(
     <>
     <H1 style = {styles.heading}>Next Series to Watch</H1>
     <List>
     {listofSeasons.map((season) => (
                 <ListItem key = {season.id } style ={styles.listItem}>
                 <Left>
                     <Button onPress = {() => deleteSeason(season.id)} style = {styles.button} danger>
                         <Icon name ='trash' active></Icon>
                     </Button>
                     <Button 
                     onPress = {() => navigation.navigate('Edit' , {season})}
                     style = {styles.button}>
                         <Icon name ='edit' type = 'Feather' ></Icon>
                     </Button>
                 </Left>

             <Body>
                     <Title style = {styles.seasonName}>
                         {season.name}
                     </Title >
                     <Text note> {season.totalNoSeason} seasons to Watch</Text>
                 </Body>
             

         <Right>
                 <CheckBox checked = {season.isWatched} onPress = {() => markComplete(season.id)} ></CheckBox>
             </Right>


         </ListItem>
         ))}
         
     </List>
                    </>
                )
            }

            <Fab
            style = {{backgroundColor : '#5067FF'}}
            position = 'bottomRight'
            onPress = {() => navigation.navigate('Add')}
            >
                <Icon name ='add' ></Icon>
            </Fab>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({

    heading : {
        textAlign : 'center',
        color : '#00b7c2',
        marginVertical : 15,
        marginHorizontal : 5,
    },
    container: {
        backgroundColor: '#1b262c',
        flex: 1,
      },
      Icons : {
        position: 'absolute',
        bottom: 8,
        right: 16,
      },
      listItem : {
        marginLeft: 0,
        marginBottom: 20,
      },
      button : {
        marginLeft: 5,
      },
      seasonName : {
        color: '#fdcb9e',
        textAlign: 'justify',
      }

})
