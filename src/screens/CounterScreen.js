import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const CounterScreen = () => {
  // let counter = 0;
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Text>Counter Screen</Text>
      <Button
        title="Increase"
        onPress={() => {
          setCounter(counter + 1);
          console.log(counter);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          setCounter(counter - 1);
          console.log(counter);
        }}
      />

      <Text style={{ fontSize: 32 }}>Current count: {counter}</Text>

      <Button
        title="Reset"
        onPress={() => {
          setCounter(0);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
