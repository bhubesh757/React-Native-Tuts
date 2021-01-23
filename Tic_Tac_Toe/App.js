import React from 'react'
import { View, 
  StyleSheet ,
TouchableOpacity } from 'react-native'

import 
{Text ,
  Container ,
  Content ,
  Header,
  Body,
  Card ,
  H1 , H3 ,
  Button ,
  Title
 } from 'native-base'
import Icons from './components/Icons'
import Snackbar from 'react-native-snackbar';


const itemArray = new Array(9).fill('empty');

const App = () => {

  // using the useState to set the value of the cross section
  const [isCross, setisCross] = useState(false);
  const [winMessage, setwinMessage] = useState('')

  const changeItems = (itemNumber) => {
    // 
    if(winMessage){
      return Snackbar.show({
        text : winMessage,
        backgroundColor : '#000',
        textColor : '#FFF'
      })
    }

    if(itemArray[itemNumber] == 'empty'){
      itemArray[itemNumber] = isCross ? 'cross' : 'circle';
      setisCross(!isCross)

    }else {
      return Snackbar.show({
        text : 'Position is Already Filled Dude',
        backgroundColor : 'red',
        color : '#FFF'
      })
    }


  }

  const reloadGame = () => {
    // 
    setisCross(false)
    setwinMessage('')
    itemArray.fill('empty' , 0 , 9 )
  }

  const checkIsWinner = () => {
    //  checking  winner of the game
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== 'empty'
    ) {
      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[3] !== 'empty' &&
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5]
    ) {
      setWinMessage(`${itemArray[3]} won`);
    } else if (
      itemArray[6] !== 'empty' &&
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[6]} won`);
    } else if (
      itemArray[0] !== 'empty' &&
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[1] !== 'empty' &&
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7]
    ) {
      setWinMessage(`${itemArray[1]} won`);
    } else if (
      itemArray[2] !== 'empty' &&
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[2]} won`);
    } else if (
      itemArray[0] !== 'empty' &&
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[2] !== 'empty' &&
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[2]} won`);
    }
  };

  return (
    <>
    <Container style = {{backgroundColor : '#333945' , padding : 5}}>
    <Header>
      <Body>
        <Title>
          Tic Tac Toe!!
        </Title>
      </Body>
    </Header>
    <Content>

      <View>
      <Icons style = {styles.grid} name = 'circle'></Icons>

      {itemArray.map((item , index ) => (
        <TouchableOpacity style = {styles.box} 
          key = {index}
          onPress = {() => changeItems(index)}
       >
         <Card style = {styles.card}></Card>
         <Icons name = {item}></Icons>
        </TouchableOpacity>
      ))}
      </View>


        {winMessage ? (
          <View>
            <H1 style = {styles.message}>{winMessage}</H1>
            <Button onPress = {realodGame}
            primary block rounded >
              <Text>Reload Game</Text>
            </Button>
          </View>
        ): (
          <H3 style = {styles.message}>
              {isCross ? 'Cross' : 'Circle'} turns
          </H3>
        )}

    </Content>
    </Container>
    </>
  )
}

export default App


const styles = StyleSheet.create ({
  grid : {
    flex : 1,
    flexDirection : 'row',
    flexWrap : 'wrap',
    marginTop : 20 , 

  },
   box : {
     width : '33%',
     marginBottom : 6 ,
   },
   card : {
     height : 120 ,
    justifyContent : 'center' ,
    alignItems : 'center' ,
   }  ,
   message : {
     textAlign : 'center' ,
     textTransform : 'uppercase' ,
     color : 'white' ,
     marginTop : 20 ,
     backgroundColor : '#3944F7',
     paddingVertical : 10,
     marginVertical : 10,
   }
})
