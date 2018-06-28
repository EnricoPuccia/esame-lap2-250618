import React, { Component } from 'react'
import { View, Image, StyleSheet, Text, TouchableHighlight } from 'react-native'

export default class Place extends Component {
  //urlImage = this.props.data.img ? this.props.data.img : "http://via.placeholder.com/350x150"
  render() {
    return(
      <TouchableHighlight onPress={this.props.navigation.navigate("Details")}>
        <Image style={styles.container}
          source={this.props.data.img}
        />
        <View>
          <Text>this.props.data.name</Text>
          <Text>this.props.data.address</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center',
  }
})