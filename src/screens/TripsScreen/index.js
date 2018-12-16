import React, { Component } from 'react';

import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';

import Trip from './Trip';
import isIphoneX from '../../utils/isIphoneX';

export default class TripsScreen extends Component {

  static navigationOptions = {
    header: null
  }

  renderItem = item => {
    return <Trip
      onPress={() => this.props.navigation.navigate('Trip')}
      title={item.item.name}
      price={item.item.price}
    />
  }

  render() {
    const trips = [
      { id: '1', name: 'Eurotrip 2018', price: 'R$5.000' },
      { id: '2', name: 'Expedição Atacama', price: 'R$3.500' },
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
          <TouchableOpacity
            style={{
              position: 'absolute',
              bottom: 10,
              right: 10,
              padding: 10,
            }}
            onPress={() => this.props.navigation.navigate('AddTrip')}
          >
            <Image source={require('../../../assets/add.png')} />
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            style={[
              isIphoneX() ? { marginBottom: 28 } : null
            ]}
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
