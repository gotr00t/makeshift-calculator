import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

const ComponentScreen = () => {
  const name = 'Mina';

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.fontBig}>I am a title</Text>
      <Text style={styles.fontSmall}>Hello, {name}!</Text>
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
  fontBig: {
    fontSize: 45,
  },
  fontSmall: {
    fontSize: 30,
  },
});

export default ComponentScreen;
