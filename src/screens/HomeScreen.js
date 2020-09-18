import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  console.log(navigation);
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40 }}>Components Lecture</Text>
      <StatusBar style="auto" />

      {/* Button example */}
      <Button
        title="Go to Components Demo"
        onPress={() => {
          navigation.navigate('Components');
        }}
      />

      {/* Touchable opacity */}
      <TouchableOpacity
        // title="Go to Lists Demo"
        onPress={() => {
          navigation.navigate('Lists');
        }}
      >
        {/* icon, image */}
        <Text>Go to Lists Demo</Text>
      </TouchableOpacity>

      <Button
        title="Go to Image Screen Demo"
        onPress={() => {
          navigation.navigate('Image Screen');
        }}
      />

      <Text style={{ fontSize: 40 }}>States Lecture</Text>

      <Button
        title="Go to Counter Screen Demo"
        onPress={() => {
          navigation.navigate('Counter Screen');
        }}
      />
      <Button
        title="Go to Color Screen Demo"
        onPress={() => {
          navigation.navigate('Color Screen');
        }}
      />
      <Button
        title="Go to Color Generator Demo"
        onPress={() => {
          navigation.navigate('Color Generator Screen');
        }}
      />
      <Button
        title="Go to Text Screen Demo"
        onPress={() => {
          navigation.navigate('Text Screen');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
