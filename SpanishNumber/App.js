import React from 'react'
import { View,
   Text,
  ScrollView,
Image ,
StyleSheet, 
TouchableOpacity} from 'react-native'
import Sound from 'react-native-sound'


const soundList = [
  require('/home/bhubesh/React-Native-Awesomeproject/assets/one.wav'),
  require('/home/bhubesh/React-Native-Awesomeproject/assets/two.wav'),
  require('/home/bhubesh/React-Native-Awesomeproject/assets/three.wav'),
  require('/home/bhubesh/React-Native-Awesomeproject/assets/four.wav'),
  require('/home/bhubesh/React-Native-Awesomeproject/assets/five.wav'),
  require('/home/bhubesh/React-Native-Awesomeproject/assets/six.wav'),
  require('/home/bhubesh/React-Native-Awesomeproject/assets/seven.wav'),
  require('/home/bhubesh/React-Native-Awesomeproject/assets/eight.wav'),
  require('/home/bhubesh/React-Native-Awesomeproject/assets/nine.wav'),
  require('/home/bhubesh/React-Native-Awesomeproject/assets/ten.wav')
]
const App = () => {

  const playSound = (sound) => {
    const whoosh = new Sound(sound.Sound.MAIN_BUNDLE , (err) => {
      if (err) {
        console.log('Not Playing Sound');
      }
    });

    setTimeout(() => {
      whoosh.play()
    } , 1000)

    whoosh.release();

  }



  return (
    <>
    <ScrollView style = {styles.container}>
      <Image style = {styles.image} source = {require('/home/bhubesh/React-Native-Awesomeproject/assets/logo.png')} style={{ resizeMode: 'center', width: 200, height: 200 }}></Image>
    <View style = {styles.gridContainer}>
      {soundList.map((sound)=> (
        <TouchableOpacity key = {sound} 
        onPress = {() => {
          playSound(sound)
        }}
        style = {styles.box}>
          <Text style = {styles.text} > press </Text>
        </TouchableOpacity>
      ))}
    </View>
    </ScrollView>
    </>
  )
}

export default App


const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : '#1b262c'
  },
  image : {
      alignSelf : 'center' ,
      // alignItems : 'center',
      marginTop : 15,
  },
  gridContainer : {
    flex : 1,
    margin : 5,
    flexDirection : 'row',
    flexWrap : 'wrap',
    alignItems : 'flex-start',
    justifyContent : 'space-around',
  },
    box : {
      height : 110,
      alignItems : 'center',
      justifyContent : 'center',
      width : '46%',
      marginVertical : 6,
      backgroundColor : '#0f4c75',
      borderRadius : 10,

      shadowColor : '#393e34',
      elevation : 5,
      shadowRadius : 10,
    },
    text : {
      fontSize : 50 ,
      color : '#ff4301',
    }
})
