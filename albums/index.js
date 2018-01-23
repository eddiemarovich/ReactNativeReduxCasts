//Import a library to help create  component
import React from 'react'
import { Text, AppRegistry, View } from 'react-native'
import Header from './src/components/header'
import AlbumList from './src/components/album_list'

//create a component

const App = () => (
  <View style= {{ flex: 1}}>
    <Header headerText= {'All The Albums'}/>
    <AlbumList />
  </View>
)


//render to the device
AppRegistry.registerComponent('albums', () => App)
