import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

import 'react-native-gesture-handler'
import Home from './netfilxStore/screens/Home';
import Add from './netfilxStore/screens/Add';
import Edit from './netfilxStore/screens/Edit';


const Stack = createStackNavigator()

const App = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName = 'Home'>
      <Stack.Screen name = 'Home' component = {Home} options = {{
        headerStyle : {
          backgroundColor : '0f4c75'
        },
        title : 'Netflix Store',
        headerTitleStyle : {
          textAlign : 'center',
          color : '00b7c2'
        }
      }} ></Stack.Screen>
      <Stack.Screen name = 'Add' component = {Add}
      options = {{
        headerStyle : {
          backgroundColor : '0f4c75'
        },
        title : 'Netflix Store',
        headerTitleStyle : {
          textAlign : 'center',
          color : '00b7c2'
        }
      }}
      ></Stack.Screen>
      <Stack.Screen name = 'Edit' component = {Edit} 
      options = {{
        headerStyle : {
          backgroundColor : '0f4c75'
        },
        title : 'Netflix Store',
        headerTitleStyle : {
          textAlign : 'center',
          color : '00b7c2'
        }
      }}
      ></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
   
  )
}

export default App

const styles = StyleSheet.create({})


// gonna learn react navigation and other stuffs
