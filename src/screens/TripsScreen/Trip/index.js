import React from 'react';

import { View, Text, Dimensions } from 'react-native';

import styles from './styles';

export default Trip = props => {
  const dim = Dimensions.get('window');
  return (
    <View style={styles.wrapperTrip}>
      <View style={[styles.image, { width: dim.width - 28 }]}><Text>Imagem</Text></View>
      <Text style={styles.price}>{props.price}</Text>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
}
