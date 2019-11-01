import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

import Colors from '../constants/Colors';
import BodyText from './BodyText';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <BodyText>{title}</BodyText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 32,
    backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Header;
