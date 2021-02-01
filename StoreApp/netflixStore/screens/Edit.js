import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import {
    List ,
    ListItem,
    Button ,
    Icon , Body,
    Right,
    Text,
    CheckBox,Title , H1,Fab ,Subtitle,container, Container, Left, Spinner, Form, Item, Input
} from 'native-base'


import AsyncStorage from '@react-native-async-storage/async-storage'

const Edit = (navigation , route) => {

    // usestate

    const [name, setname] = useState('');
    const [totalNoSeason, settotalNoSeason] = useState('');
    const [id, setid] = useState(null);

    const update = async () => {
        try {
            if (!name || ! totalNoSeason){
                return alert (
                    'Please Eenter the Value in Both Fields'
                )
            } 
            const seasontoUpdate = {
                id,
                name, 
                totalNoSeason,
                isWatched: false
            }

            const storedValue = await AsyncStorage.getItem('@season_list')
            const list = await JSON.parse(storedValue)
            
            list.map((singleSeason) => {
                if (singleSeason.id == id) {
                    singleSeason.name = name;
                    singleSeason.totalNoSeason = totalNoSeason;
                }
                return singleSeason;
            })

            await AsyncStorage.setItem('@season_list', JSON.stringify(list))

            navigation.navigate("Home");


        } catch (error) {
            console.log(error)
        }
    }


    // useEffect

    useEffect(() => {
        const {season} = route.params

        const {id , name  , totalNoSeason} = season ;

        setid(id)
        setname(name)
        settotalNoSeason(totalNoSeason)
    }, [])


    return (
        <Container style = {styles.container}>
        <ScrollView>
            <H1 style = {styles.heading}>Add to Watch List</H1>
            <Form>
                <Item rounded style ={styles.formItem}>
                    <Input
                    placeholder = 'Season Name'
                    style ={{color : '#eee'}}
                    value = {name}
                    onChangeText = {(text) => setname(text)}
                    ></Input>
                </Item>
                <Item rounded style ={styles.formItem}>
                    <Input
                    placeholder = 'Total No of Seasons'
                    style ={{color : '#eee'}}
                    value = {totalNoSeason}
                    onChangeText = {(text) => settotalNoSeason(text)}
                    ></Input>
                </Item>
                <Button ronded block
                onPress = {update}
                >
                    <Text style = {{color :'#eee'}}>Update Now</Text>
                </Button>
            </Form>
        </ScrollView>
      </Container>
    )
}

export default Edit

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1b262c',
        flex: 1,
        justifyContent: 'flex-start',
      },
      heading: {
        textAlign: 'center',
        color: '#00b7c2',
        marginHorizontal: 5,
        marginTop: 50,
        marginBottom: 20,
      },
      formItem: {
        marginBottom: 20,
      },
})
