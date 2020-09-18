import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const TextScreen = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text style={styles.label}>Enter Name</Text>
      <TextInput
        style={styles.textInput}
        autoCapitalize="words"
        placeholder="Enter name..."
        onChangeText={(text) => {
          setName(text);
        }}
      />

      <Text>Your name is: {name}</Text>

      <Text style={styles.label}>Enter Password</Text>

      <TextInput
        style={styles.textInput}
        onChangeText={(pwd) => setPassword(pwd)}
        secureTextEntry
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    marginVertical: 10,
    borderColor: 'gray',
    borderWidth: 1,
    height: 30,
  },
  label: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default TextScreen;
