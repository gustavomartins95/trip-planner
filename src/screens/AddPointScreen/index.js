import React, { Component } from 'react';

import { View, Text } from 'react-native';

export default class AddPointScreen extends Component {

  static navigationOptions = {
    header: null
  }

  render() {
    const id = this.props.navigation.state.params.id
    return (
      <View style={{ paddingTop: 25 }}>
        <Text>Add Point</Text>
        <Text>ID: {id}</Text>
      </View>
    )
  }
}
