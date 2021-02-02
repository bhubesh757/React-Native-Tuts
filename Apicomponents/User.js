import React from 'react'
import { StyleSheet, Text, View , Image} from 'react-native'
// import {} from 'native-base '

import moment from 'moment'
import { Card, CardItem, H1 } from 'native-base'

const User = ({details}) => {
    console.log(details);
    return (
       <Card style = {styles.card}>
          <CardItem cardBody style = {styles.cardItem}>
          <Image 
           
           source = {{
               uri : details.picture?.large,
               width : 150,
               height : 250,
           }}
           style = {styles.image}

           >

           </Image>
          </CardItem>

          {/* Title and some other stuffs includes name , number . */}

          <CardItem style = {styles.cardItem}>
            <H1 style = {styles.text}> 
            {details.name?.title}
             {details.name?.first}
             {details.name?.last}
              </H1>
          </CardItem>

          <CardItem bordered style = {styles.cardItem}>
            <Text style = {styles.text}> 
                {details.phone}
              </Text>
          </CardItem>


          <CardItem footer style = {styles.cardItem}>
            <Text style = {{colr : '#efre'}}> 
                Recorded At {moment (details.registered?.text).format('DD-MM-YY')}
              </Text>
          </CardItem>
       </Card>
    )
}

export default User

const styles = StyleSheet.create({
    card: {
        width: '90%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#4f8a8b',
        borderColor: '#4f8a8b',
        borderWidth: 2,
      },
      cardItem: {
        backgroundColor: '#4f8a8b',
      },
      image: {
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        overflow: 'hidden',
        borderWidth: 3,
        borderColor: '#fbd46d',
        marginTop: -50,
      },
      text: {
        color: '#eeeeee',
      },
})
