import React from 'react'
import { Component } from 'react'
import { ScrollView } from 'react-native'
import AlbumDetail from './album_detail'

class AlbumList extends Component {
  state = { albums: [] }

  async componentWillMount() {
    await fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => response.json())
      .then(data => this.setState({ albums: data }))
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key= {album.title} album= {album}/>
    )
  }

  render() {
    console.log(this.state.albums);
    return (
      <ScrollView >
        {this.renderAlbums()}
      </ScrollView>
    )
  }
}

export default AlbumList
