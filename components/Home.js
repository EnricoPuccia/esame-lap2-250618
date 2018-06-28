import React, { Component } from 'react';
import { View, FlatList } from 'react-native';

import Place from './Place';

export default class Home extends Component {
  state = {
    placeslist: [],
  };

  componentDidMount() {
    this.takePlaces();
  }

  takePlaces() {
    let places;
    try {
      fetch('http://www.dmi.unict.it/~calanducci/LAP2/favorities.json')
        .then(function(response) {
          //return response.json();
          this.setState({
            placeslist: response,
          });
        })
        .then(function(myJson) {
          places = myJson;
          console.log(myJson);
        });

      this.setState({
        placeslist: places,
      });
    } catch (err) {
      console.log('something went wrong!');
      console.error(err);
    }
  }

  renderPlace = ({ item }) => <Place data={item} />;

  _keyExtractor = (item, index) => {
    return String(index);
  };

  render() {
    return (
      <View>
        <FlatList
          data={this.state.placeslist}
          renderItem={this.renderPlace}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}
