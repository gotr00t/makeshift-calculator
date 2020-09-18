import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, Image } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <ImageDetail title="Beach" image={require('../../assets/beach.jpg')} />
      <ImageDetail title="Forest" image={require('../../assets/forest.jpg')} />
      <ImageDetail
        title="Mountain"
        image={require('../../assets/mountain.jpg')}
      />

      {/* <Image source={require('../../assets/beach.jpg')} />
      <Text style={styles.fontSmall}>Beach</Text>

      <Image source={require('../../assets/forest.jpg')} />
      <Text style={styles.fontSmall}>Forest</Text>

      <Image source={require('../../assets/mountain.jpg')} />
      <Text style={styles.fontSmall}>Mountain</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  fontBig: {
    fontSize: 45,
  },
  fontSmall: {
    fontSize: 30,
  },
});

export default ImageScreen;
