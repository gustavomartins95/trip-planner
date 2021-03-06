import React, { Component } from 'react';

import { View, Text, TextInput, TouchableOpacity, AsyncStorage, KeyboardAvoidingView } from 'react-native';

import styles from './styles';

export default class AddTripScreen extends Component {

  static navigationOptions = {
    header: null
  }

  state = {
    trip: '',
  }

  handleSalve = async () => {
    const trip = {
      id: new Date().getTime(),
      trip: this.state.trip,
      price: 0,
      latitude: -22.11963603,
      longitude: -45.51210076,
    }

    const tripsAS = await AsyncStorage.getItem('trips')
    let trips = []
    if (tripsAS) {
      trips = JSON.parse(tripsAS)
    }
    trips.push(trip)
    await AsyncStorage.setItem('trips', JSON.stringify(trips))

    this.props.navigation.state.params.refresh()
    this.props.navigation.navigate('Trips')
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.wrapper}>
          <Text style={styles.title}>ADICIONAR NOVA VIAGEM</Text>
          <TextInput style={styles.input} placeholder='Nome da viagem' onChangeText={txt => this.setState({ trip: txt })} />
          <TouchableOpacity style={styles.wrapperButton} onPress={this.handleSalve}>
            <Text style={styles.button}>Salvar viagem</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
}
