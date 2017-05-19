import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  Linking,
  TouchableOpacity
} from 'react-native'

// import { Card , Button } from 'react-native-material-design'
import {
  Card,
  CardImage,
  CardTitle,
  CardContent,
  CardAction
} from 'react-native-card-view';

class Results extends Component {
  constructor(props) {
    super(props)

    let dataStore = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2})

    this.state = {
      results: dataStore.cloneWithRows(props.data.businesses)
    }
    console.log('Results:: ',this.state.results)
  }

  render() {
    return (
      <View>

      <Text style={styles.header}>Tacos Near You</Text>
        <ListView
          style={{marginTop: 100}}
          initialListSize={10}
          dataSource={this.state.results}
          renderRow={(result) => {return this.renderResult(result)}}
         />
      </View>
    )
  }

  renderResult(result) {
    return (
        <Card onPress={() => Linking.openURL(result.url)}>
          <CardImage>
            <Image
              style={styles.stretch}
              source={{uri: result.image_url}} />
          </CardImage>
          <CardContent>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>{`${result.name}`}</Text>
            <Text>Price:{`${result.price}`}</Text>
            <Text>Rating:{`${result.rating}`}</Text>
            <Text>Phone:{`${result.display_phone}`}</Text>
          </CardContent>
        </Card>
    )
  }
}
const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    position: 'relative',
    top: 60,
    fontSize: 30
  },
  resultRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    marginBottom: 20,
    padding: 5
  },
  stretch: {
    width: 365,
    height: 200
  },
  content: {

  }

});


module.exports = Results
