import React, { useState } from 'react'
import { View, 
  Text,
  Image ,
  TouchableOpacity,
StyleSheet } from 'react-native'

  import DiceOne from '/home/bhubesh/React-Native-Awesomeproject/assets/dice1.png'
  import DiceTwo from   '/home/bhubesh/React-Native-Awesomeproject/assets/dice2.png'
  import DiceThree from '/home/bhubesh/React-Native-Awesomeproject/assets/dice3.png'
  import DiceFour from  '/home/bhubesh/React-Native-Awesomeproject/assets/dice4.png'
  import DiceFive from  '/home/bhubesh/React-Native-Awesomeproject/assets/dice5.png'
  import DiceSix from  '/home/bhubesh/React-Native-Awesomeproject/assets/dice6.png'

const App = () => {
  const [uri, seturi] = useState(DiceOne)


  const playbuttonpress = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    console.log(randomNumber);
    switch (randomNumber) {
      case 1:
        seturi(DiceOne)
        break;
      case 2:
        seturi(DiceTwo)
        break;
      case 3:
        seturi(DiceThree)
        break;
      case 4:
        seturi(DiceFour)
        break;
      case 5:
        seturi(DiceFive)
        break;
      case 6:
        seturi(DiceSix)
        break;
    
      default:
        seturi(DiceOne)
        break;
    }
  }
  return (
    <>
    <View style = {styles.container}>
      <Image source = {{uri}} style={{ resizeMode: 'center', width: 200, height: 200 }}></Image>
      <TouchableOpacity onPress = {playbuttonpress}>
      <Text style = {styles.gamePlayButton}>Play Me</Text>
      </TouchableOpacity>
    </View> 
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container  : {
    flex : 1,
    backgroundColor : '#8e61ad',
    alignItems : 'center',
    justifyContent : 'center',
  },
  gamePlayButton : {
    fontSize : 20,
    marginTop : 30,
    color : '#F2A365',
    paddingHorizontal : 40 ,
    paddingVertical : 10 ,
    borderColor : '#30475E',
    borderRadius : 5,
    borderWidth : 3,
    fontWeight : 'bold'
  }
})
