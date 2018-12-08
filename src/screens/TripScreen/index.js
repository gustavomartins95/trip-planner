import React, { Component } from 'react';

import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

export default class TripScreen extends Component {

  static navigationOptions = {
    header: null
  }

  renderItem = item => {
    return (
      <View style={styles.item}>
        <View style={styles.wrapperInfo}>
          <Text style={styles.itemName}>{item.item.name}</Text>
          <Text style={styles.itemDescription}>{item.item.description}</Text>
        </View>
        <View style={styles.itemWrapperPrice}>
          <Text style={styles.itemPrice}>{item.item.price}</Text>
        </View>
      </View>
    )
  }

  render() {
    const trip = {
      name: 'Eurotrip 2018',
      price: 'R$5000',
      places: [
        { id: '1', name: 'Amsterdan', description: 'Chegada', price: 'R$200', lat: 0, long: 0 },
        { id: '2', name: 'Bruxelas', description: 'Chegada', price: 'R$100', lat: 0, long: 0 },
        { id: '3', name: 'Amsterdan', description: 'Chegada', price: 'R$200', lat: 0, long: 0 },
        { id: '4', name: 'Bruxelas', description: 'Chegada', price: 'R$100', lat: 0, long: 0 },
        { id: '5', name: 'Amsterdan', description: 'Chegada', price: 'R$200', lat: 0, long: 0 },
        { id: '6', name: 'Bruxelas', description: 'Chegada', price: 'R$100', lat: 0, long: 0 },
        { id: '7', name: 'Amsterdan', description: 'Chegada', price: 'R$200', lat: 0, long: 0 },
        { id: '8', name: 'Bruxelas', description: 'Chegada', price: 'R$100', lat: 0, long: 0 },
        { id: '9', name: 'Amsterdan', description: 'Chegada', price: 'R$200', lat: 0, long: 0 },
        { id: '10', name: 'Bruxelas', description: 'Chegada', price: 'R$100', lat: 0, long: 0 },
      ]
    }
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <View style={styles.backButton}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image source={require('../../../assets/left-arrow.png')} />
            </TouchableOpacity>
          </View>
          <Text style={styles.tripName}>{trip.name}</Text>
          <Text style={styles.tripPrice}>{trip.price}</Text>
        </View>
        <FlatList
          style={{ flex: 1, }}
          contentContainerStyle={{
            paddingTop: 16,
            paddingBottom: 16,
          }}
          data={trip.places}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    )
  }
}
