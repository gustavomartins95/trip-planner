import React, { Component } from 'react';

import { View, Text, FlatList } from 'react-native';

import Trip from './Trip';

export default class TripsScreen extends Component {

  static navigationOptions = {
    header: null
  }

  renderItem = item => {
    return <Trip title={item.item.name} price={item.item.price} />
  }

  render() {
    const trips = [
      { id: '1', name: 'Eurotrip 2018', price: 'R$5000' },
      { id: '2', name: 'Expedição Atacama', price: 'R$3500' },
    ]
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
      }}>
        <View style={{
          backgroundColor: '#DDDDDD',
          flex: 1,
        }}>
          <Text style={{ paddingTop: 25 }}>Mapa</Text>
        </View>
        <View>
          <FlatList
            data={trips}
            renderItem={this.renderItem}
            keyExtractor={item => item.id}
            horizontal
            pagingEnabled
          />
        </View>
      </View>
    );
  }
}
