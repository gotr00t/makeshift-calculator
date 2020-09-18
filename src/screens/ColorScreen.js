import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, FlatList } from 'react-native';

const initialColorsState = [];

const ColorScreen = () => {
  const [colors, setColors] = useState(initialColorsState); //['rgb(0,0,0)', 'rgb(150,0,0)']

  return (
    <View>
      <Text>Color Screen</Text>
      <Button
        title="Reset"
        onPress={() => {
          setColors(initialColorsState);
        }}
      />
      <Button
        title="Add a Color"
        onPress={() => {
          //Java: colors.add(randomRgb());
          setColors([...colors, randomRgb()]);
          // console.log(colors);
        }}
      />

      <FlatList
        data={colors}
        renderItem={({ item }) => {
          // console.log(item);
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

const randomRgb = () => {
  // rgb (0, 0, 0)
  const red = Math.floor(Math.random() * 256); //155
  const green = Math.floor(Math.random() * 256); //27
  const blue = Math.floor(Math.random() * 256); //90

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
