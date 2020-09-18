import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const MULTIPLIER = 15;
const COLOR_RED = 'red';
const COLOR_BLUE = 'blue';
const COLOR_GREEN = 'green';

const ColorGeneratorScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    //color === 'red', 'blue', 'green'
    //change === +15 || -15

    switch (color) {
      case COLOR_RED:
        red + change < 0 || red + change > 255 ? null : setRed(red + change);
        break;

      case COLOR_BLUE:
        blue + change < 0 || blue + change > 255
          ? null
          : setBlue(blue + change);
        break;

      case COLOR_GREEN:
        green + change < 0 || green + change > 255
          ? null
          : setGreen(green + change);
        break;

      default:
        break;
    }
  };

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => setColor(COLOR_RED, MULTIPLIER)}
        onDecrease={() => setColor(COLOR_RED, MULTIPLIER * -1)}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => setColor(COLOR_GREEN, MULTIPLIER)}
        onDecrease={() => setColor(COLOR_GREEN, MULTIPLIER * -1)}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => setColor(COLOR_BLUE, MULTIPLIER)}
        onDecrease={() => setColor(COLOR_BLUE, MULTIPLIER * -1)}
      />

      <View
        style={{
          width: 500,
          height: 300,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />

      <Text style={styles.font}>red: {red}</Text>
      <Text style={styles.font}>green: {green}</Text>
      <Text style={styles.font}>blue: {blue}</Text>

      <Button
        title="reset"
        onPress={() => {
          setRed(0);
          setGreen(0);
          setBlue(0);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  font: {
    fontSize: 32,
  },
});

export default ColorGeneratorScreen;
