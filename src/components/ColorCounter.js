import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  //color - string
  //onIncrease, onDecrease - functions
  //() => setRed/B/G(red + 1)

  return (
    <View>
      <Text>{color}</Text>
      <Button title={`Increase ${color}`} onPress={() => onIncrease()} />
      <Button title={`Decrease ${color}`} onPress={() => onDecrease()} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;