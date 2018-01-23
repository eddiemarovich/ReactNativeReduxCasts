//Import a library to help create  component
import React from 'react'
import { Text, View } from 'react-native'

//create a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles

  return (
   <View style= {viewStyle}>
   <Text style= {textStyle}>{props.headerText}</Text>
   </View>
 )
}

const styles = {
  textStyle: {
    fontSize: 25
  },
  viewStyle: {
    backgroundColor: '#DAF7A6',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 20,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.35,
    elevation: 2,
    position: 'relative'
  }
}

//make component available to the rest of application

export default Header
