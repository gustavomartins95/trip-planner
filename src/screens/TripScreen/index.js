import React, { Component } from 'react';

import { View, Text, FlatList, Image, TouchableOpacity, AsyncStorage } from 'react-native';

import styles from './styles';

export default class TripScreen extends Component {

  static navigationOptions = {
    header: null
  }

  state = {
    trip: [],
    points: [],
  }

  componentDidMount() {
    this.loadData()
  }

  loadData = async () => {
    const tripsAs = await AsyncStorage.getItem('trips')
    let trips = []
    if (tripsAs) {
      trips = JSON.parse(tripsAs)
    }

    const id = this.props.navigation.state.params.id
    const pointsAs = await AsyncStorage.getItem('trip-' + id)
    let points = []
    if (pointsAs) {
      points = JSON.parse(pointsAs)
    }

    let trip = {
      trip: '',
      price: 0,
    }
    trips.forEach(t => {
      if (t.id === id) {
        trip.trip = t.trip
        trip.price = t.price ? t.price : 0
      }
    })

    this.setState({ trip, points })
  }

  renderItem = item => {
    return (
      <View style={styles.item}>
        <View style={styles.wrapperInfo}>
          <Text style={styles.itemName}>{item.item.pointName}</Text>
          <Text style={styles.itemDescription}>{item.item.description}</Text>
        </View>
        <View style={styles.itemWrapperPrice}>
          <Text style={styles.itemPrice}>R${item.item.price.toFixed(2)}</Text>
        </View>
      </View>
    )
  }

  render() {
    const { points, trip } = this.state
    const id = this.props.navigation.state.params.id
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <View style={styles.backButton}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.state.params.refresh()
                this.props.navigation.goBack()
              }}
            >
              <Image source={require('../../../assets/left-arrow.png')} />
            </TouchableOpacity>
          </View>
          <Text style={styles.tripName}>{trip.trip}</Text>
          <Text style={styles.tripPrice}>R${parseFloat(trip.price).toFixed(2)}</Text>
          <TouchableOpacity
            style={{
              position: 'absolute',
              top: 30,
              right: 10,
              paddingTop: 10,
              paddingRight: 10,
              paddingBottom: 10,
              paddingLeft: 10,
            }}
            onPress={() => this.props.navigation.navigate('AddPoint', { id: id, refresh: this.loadData })}
          >
            <Image source={require('../../../assets/add.png')} />
          </TouchableOpacity>
        </View>
        <FlatList
          style={{ flex: 1, }}
          contentContainerStyle={{
            paddingTop: 16,
            paddingBottom: 16,
          }}
          keyExtractor={item => item.id.toString()}
          data={points}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}
