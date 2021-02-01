import React, { useState } from 'react'
import {  ScrollView, StyleSheet, Text, View } from 'react-native'


import shortid from 'shortid'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {Container , Item , Input , Button , H1, Form} from 'native-base'


const Add = ({navigation , Route}) => {

    const [name, setname] = useState('');
    const [totalNoSeason, settotalNoSeason] = useState('')

    const addToList = async () => {
        try {
            if(!name || ! totalNoSeason) {
                return  alert ('Please add both Fields')
            }

            const seasonToAdd = {
                id : shortid.generate(),
                name : name,
                totalNoSeason : totalNoSeason,
                isWatched : false
            }

            const storedValue = await AsyncStorage.getItem('@season_list')
            const prevList = await JSON.parse(storedValue)

            if(!prevList){
                const newList = [seasonToAdd]
                await AsyncStorage.setItem('@season_list' , JSON.stringify(newList))
            }else {
                prevList.push(seasonToAdd)
                await AsyncStorage.setItem('@season_list' ,JSON.stringify(prevList))
            }

            navigation.navigate('Home')

        }
        catch (error){
            console.log(error);
        }

    }
    
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
                    onPress = {addToList}
                    >
                        <Text style = {{color :'#eee'}}>Add</Text>
                    </Button>
                </Form>
            </ScrollView>
          </Container>
    )
}

export default Add

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1b262c',
        flex: 1,
        justifyContent: 'flex-start',
      },
      heading: {
        textAlign: 'center',
        fontSize : 25,
        color: '#00b7c2',
        marginHorizontal: 5,
        marginTop: 50,
        marginBottom: 20,
      },
      formItem: {
        marginBottom: 20,
      },
      input : {
        width : 300
      }
})
