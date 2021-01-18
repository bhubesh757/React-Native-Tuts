import React, {  useState } from 'react'
import { Text, 
  View ,
   StyleSheet, 
   TouchableOpacity ,
  StatusBar} from 'react-native'

  const  App = () =>  {


  const [randomcolor, setrandomcolor] = useState('green');
    // changBgcolor


    const changBgcolor  = () => {
     let color = "rgb(" + 
     Math.floor (Math.random() * 256)+
     ","+
     Math.floor (Math.random() * 256)+
     "," +
     Math.floor (Math.random() * 256)+
     ")";

     setrandomcolor(color)
    }

    // instead of 
    const resetcolor = () => {
      setrandomcolor('red')
    }

    return (
      <View style = {[styles.container , {backgroundColor : randomcolor}]}>
        <TouchableOpacity onPress = {changBgcolor}>
        <Text   style = {styles.text}> 
          Tap Here !!
          </Text>
          <br>
          </br>
          <TouchableOpacity onPress = {resetcolor} >
          <Text style = {styles.textReset}>
            Reset
          </Text>

          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    )
  }

export default App ;

const styles = StyleSheet.create({
  container: {
    flex : 1,
    alignItems: 'center',
    justifyContent : 'center'
  },
  text : {
    fontSize : 30,
    backgroundColor : '#5232a8',
    paddingVertical : 10,
    paddingHorizontal : 40,
    color : '#SSSSSS',
    borderRadius : 50 ,
    textTransform : 'uppercase'
  },
  textReset : {
    fontSize : 20,
    backgroundColor : '#d3cae8',
    paddingVertical : 5,
    paddingHorizontal : 90,
    color : '#SSSSSS',
    borderRadius : 90 ,
    // textTransform : 'uppercase'
  }
})


