import React from 'react'
// import { View, Text } from 'react-native'
// vector icons
import Icon from 'react-native-vector-icons'
const Icons = ({name}) => {
    switch (key) {
        case "circle":
                return <Icon name = 'circle-thin' size = {45}
                color = '#F4C724'></Icon>
            
        case "cross":
            return <Icon name = 'times' size = {45}
            color = '#BF3325'></Icon>
            
    
        default:
            return <Icon name = 'pencil' size = {45}
                color = '#5DA3FA'></Icon>
           
    }
}

export default Icons
