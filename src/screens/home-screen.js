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
        source={assets.background}
        imageStyle={{ resizeMode: 'stretch' }}
        style={styles.background}
      >
        <View style={styles.wrapperLogoTripPlanner}>
          <Image source={assets.logoTripPlanner} />
        </View>
        <View style={styles.wrapperLogoDevPleno}>
          <Image source={assets.logoDevPleno} />
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

const assets = {
  background: require('../../assets/background.png'),
  logoTripPlanner: require('../../assets/logo-tripplanner.png'),
  logoDevPleno: require('../../assets/logo-devpleno.png')
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
