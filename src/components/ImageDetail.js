import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, Image } from 'react-native';

const ImageDetail = ({ title, image }) => {
  return (
    <View>
      <Image source={image} />
      <Text style={styles.fontSmall}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  fontSmall: {
    fontSize: 30,
    color: 'red',
  },
});

export default ImageDetail;
