import React, { Component } from 'react';

import { View, Text, FlatList, TouchableOpacity, Image, AsyncStorage } from 'react-native';

import Trip from './Trip';
import isIphoneX from '../../utils/isIphoneX';
import MapView from 'react-native-maps';

export default class TripsScreen extends Component {

  static navigationOptions = {
    header: null
  }

  state = {
    trips: [],
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

    this.setState({ trips })
  }

  renderItem = item => {
    return <Trip
      onPress={() =>
        this.props.navigation.navigate('Trip', { id: item.item.id, refresh: this.loadData })
      }
      title={item.item.trip}
      price={item.item.price}
    />
  }

  handleItemChange = info => {
    const { viewableItems } = info
    if (viewableItems && viewableItems.length > 0) {
      const [item] = viewableItems
      this.map.animateToRegion(
        this.regionFrom(item.item.latitude, item.item.longitude, 300),
        2500
      )
    }
  }

  regionFrom = (lat, lon, distance) => {
    distance = distance / 2
    const circumference = 40075
    const oneDegreeOfLatitudeInMeters = 111.32 * 1000
    const angularDistance = distance / circumference

    const latitudeDelta = distance / oneDegreeOfLatitudeInMeters
    const longitudeDelta = Math.abs(
      Math.atan2(
        Math.sin(angularDistance) * Math.cos(lat),
        Math.cos(angularDistance) - Math.sin(lat) * Math.sin(lat)
      )
    )

    return result = {
      latitude: lat,
      longitude: lon,
      latitudeDelta,
      longitudeDelta,
    }
  }

  render() {
    const { trips } = this.state
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
          <MapView
            style={{ flex: 1, }}
            initialRegion={{
              latitude: -22.11963603,
              longitude: -45.51210076,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            ref={ref => this.map = ref}
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              bottom: 10,
              right: 10,
              padding: 10,
            }}
            onPress={() => this.props.navigation.navigate('AddTrip', { refresh: this.loadData })}
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
            keyExtractor={item => item.id.toString()}
            horizontal
            pagingEnabled
            onViewableItemsChanged={this.handleItemChange}
          />
        </View>
      </View>
    );
  }
}
