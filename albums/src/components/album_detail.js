import React from 'react'
import { Text, View, Image, Linking } from 'react-native'
import Card from './card'
import CardItem from './card_item'
import Button from './button'


const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album
  const {
    thumbnailStyle,
    headerContentStyle,
    headerTextStyle,
    thumbnailContainerStyle,
    imageStyle
  } = styles

  return (
    <Card>
      <CardItem>
        <View style= {thumbnailContainerStyle}>
          <Image style= {thumbnailStyle} source= {{ uri: thumbnail_image }}/>
        </View>
        <View style= {headerContentStyle}>
          <Text style= {headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardItem>
      <CardItem>
        <Image style= {imageStyle} source = {{ uri: image}}/>
      </CardItem>
      <CardItem>
        <Button onPress= {() => Linking.openURL(url)}>
          BUY NOW
        </Button>
      </CardItem>
    </Card>
  )
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18,
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 10
  }
}

export default AlbumDetail
