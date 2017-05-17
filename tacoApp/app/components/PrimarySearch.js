import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  Image,
  View,
  ListView,
  Linking,
  TouchableOpacity
} from 'react-native'

import YelpApi from 'v3-yelp-api'
import config from '../../config'

export default class PrimarySearch extends Component {
  state = {
    position: 'unknown'
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({position})
      },
      (error) => alert(error),
      {enableHighAccuracy: true, timeout: 2000, maximumAge: 1000}
    )
  }

  getData() {
    const credentials = {
      appId: config.consumer_key,
      appSecret: config.consumer_secret
    }
    const yelp = new YelpApi(credentials)

    let lat = this.state.position.coords.latitiude
    let lng = this.state.position.coords.longitude
    let latlng = String(lat) + "," + String(lng)
    let params = {
      term: 'tacos',
      location: latlng,
      limit: '50'
    }

    let nav = this.props.navigator

    console.log(yelp)

    // return yelp.search(params)
    //   .then(data => console.log(data))
    //   .catch(err => err)

    return yelp.search(params)
      .then((searchResults) => {
        nav.push({
          ident: "Results",
          data: searchResults
        })
      })

  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../images/taco.png')}
        style={{height: 300, width: 300}} />
        <TouchableOpacity
          style={{borderRadius: 7, padding: 10, backgroundColor: 'rgb(139, 33, 61)'}}
          onPress={this.getData.bind(this)}>
          <Text style={{fontSize: 15, color: 'white'}}>TacoTime</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },

})
