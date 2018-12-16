import React, { Component } from 'react';

import { View, Text, TextInput, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import styles from './styles';

export default class AddPointScreen extends Component {

  static navigationOptions = {
    header: null
  }

  state = {
    id: new Date().getTime(),
    position: {
      latitude: -22.11963603,
      longitude: -45.51210076,
    },
    pointName: '',
    description: '',
    price: 0,
  }

  handleSave = async () => {
    const id = this.props.navigation.state.params.id
    const pointsAs = await AsyncStorage.getItem('trip-' + id)
    let points = []
    if (pointsAs) {
      points = JSON.parse(pointsAs)
    }
    points.push(this.state)
    await AsyncStorage.setItem('trip-' + id, JSON.stringify(points))

    let total = 0
    points.forEach(p => {
      total += p.price
    })

    const tripsAS = await AsyncStorage.getItem('trips')
    let trips = []
    if (tripsAS) {
      trips = JSON.parse(tripsAS)
    }

    trips.forEach((trip, index) => {
      if (trip.id === id) {
        trips[index].price = total
        // O ponto da 'trips', será o primeiro ponto do 'points'
        trips[index].latitude = points[0].position.latitude
        trips[index].longitude = points[0].position.longitude
      }
    })
    await AsyncStorage.setItem('trips', JSON.stringify(trips))
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <MapView
            style={{ flex: 1, }}
            initialRegion={{
              latitude: -22.11963603,
              longitude: -45.51210076,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={{
                latitude: -22.11963603,
                longitude: -45.51210076,
              }}
              onDragEnd={
                (event) => this.setState({ position: event.nativeEvent.coordinate })
              }
              draggable
            />
          </MapView>
          <View style={styles.backButton}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Trips')}>
              <Image source={require('../../../assets/left-arrow.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <TextInput style={styles.input} placeholder='Nome do ponto' onChangeText={txt => this.setState({ pointName: txt })} />
        <TextInput style={styles.input} placeholder='Descrição' onChangeText={txt => this.setState({ description: txt })} />
        <TextInput style={styles.input} placeholder='Preço' onChangeText={txt => this.setState({ price: parseFloat(txt) })} />
        <TouchableOpacity style={styles.wrapperButton} onPress={this.handleSave}>
          <Text style={styles.button}>Salvar</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
