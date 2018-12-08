import React, { Component } from 'react';

import { View, Text, ImageBackground, Image, TouchableWithoutFeedback } from 'react-native';

import assets from './assets';
import styles from './styles';

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
