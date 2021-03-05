import React from 'react'
import { View, Text } from 'react-native'

// importing createStacknavigator
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import OnboardingScreen from './screens/OnboardingScreen'

const Stack = createStackNavigator();

const App = () => {
  return (
      <Stack.Navigator headerMode = 'none'>
          <Stack.Screen
          name = 'Onboarding'
          component = {OnboardingScreen} 
          >
          </Stack.Screen>
          <Stack.Screen
          name = 'Login'
          component = {LoginScreen}
          >
          </Stack.Screen>
          
      </Stack.Navigator>   
  )
}

export default App
