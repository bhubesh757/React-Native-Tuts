import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'


import Axios from 'axios'
import { Button, Spinner } from 'native-base';

import User from './Apicomponents/User.js'
const App = () => {


  // const key = 'somerandom keywith784'
  // const URL = `https://randomuser.me/api/${key}/params`

  // saving some states

  const [details, setdetails] = useState(null);


  const fetchDetails = async () => {
    try {
      const {data} = await Axios.get('https://randomuser.me/api/')
      const details = data.results[0];

      setdetails(details);
    }
    catch (error) {
      console.log(error)
    }
  }

  // using thr useEffect

  useEffect(() => {
    fetchDetails()
  }, [])


  if (!details) {
    return (
      <View style = {styles.container}>
      <Spinner> Loading </Spinner>
      </View>
    )
  } else {

    return (
      <>
       <View style = {styles.container}>
         <View> 
           <User 
           details = {details}
           ></User>
           <Button
           rounded
           style = {styles.button}
           onPress = {() => fetchDetails()}
           >
             <Text> New User</Text>
           </Button>
         </View>
       </View>
      </>
    )
  }



}

export default App

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center' ,
    alignItems : 'center' ,
    backgroundColor : '#222831'
  },
  button : {
    marginTop : 30 ,
    paddingHorizontal : 30,
  }
})
