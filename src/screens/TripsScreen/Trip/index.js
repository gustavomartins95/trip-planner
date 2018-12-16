import React from 'react';

import { View, Text, Dimensions, TouchableOpacity } from 'react-native';

import styles from './styles';

export default Trip = props => {
  const dim = Dimensions.get('window');
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.wrapperTrip}>
      <View style={[styles.image, { width: dim.width - 28 }]}><Text>Imagem</Text></View>
      <Text style={styles.price}>R${props.price.toFixed(2)}</Text>
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
}
