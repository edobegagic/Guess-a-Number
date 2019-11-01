import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';
import Colors from '../constants/Colors';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <BodyText>The Game is Over</BodyText>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/success.png')}
          resizeMode='contain'
        />
      </View>
      <View style={styles.resultContainer}>
        <TitleText style={styles.resultText}>
          You're phone needed{' '}
          <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
          guess the number{' '}
          <Text style={styles.highlight}>{props.userNumber}</Text>
        </TitleText>
      </View>
      <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    borderRadius: 200,
    borderWidth: 3,
    borderColor: 'black',
    height: 300,
    width: 300,
    overflow: 'hidden',
    marginVertical: 15
  },
  image: {
    width: '100%',
    height: '100%'
  },
  highlight: {
    color: Colors.secondary,
    fontFamily: 'open-sans-bold'
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 12
  },
  resultText: {
    textAlign: 'center',
    fontSize: 16
  }
});

export default GameOverScreen;
