import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const LoginScreen = () => {
    return (
        <View style = {styles.conntainer}>
            <Text>Login Screen</Text>
            <Button
            title = 'Click Here'
            onPress = {() => alert('Button Clicked')}
            ></Button>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    }
})
