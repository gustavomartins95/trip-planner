import React, { Component } from 'react';

import { View, Text, StyleSheet, ImageBackground, Image, TouchableWithoutFeedback } from 'react-native';

export default class HomeScreen extends Component {

  state = {
    counter: 0,
  }

  handleCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    })
  }

  render() {
    const txtStyle = this.state.counter % 2 === 1 ? { color: '#24C6DC' } : null

    return (
      <ImageBackground
        source={require('../../assets/background.png')}
        imageStyle={{ resizeMode: 'stretch' }}
        style={styles.background}
      >
        <View style={styles.wrapperLogoTripPlanner}>
          <Image source={require('../../assets/logo-tripplanner.png')} />
        </View>
        <View style={styles.wrapperLogoDevPleno}>
          <Image source={require('../../assets/logo-devpleno.png')} />
        </View>
        <TouchableWithoutFeedback onPress={this.handleCounter}>
          <View style={styles.buttonBackground}>
            <Text style={[styles.buttonText, txtStyle]}>COMEÇAR</Text>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  wrapperLogoTripPlanner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperLogoDevPleno: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingBottom: 32,
  },
  buttonBackground: {
    backgroundColor: '#fff',
    paddingTop: 16,
    paddingBottom: 16,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
  }
})
