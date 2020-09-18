import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ComponentScreen from './src/screens/ComponentScreen';
import HomeScreen from './src/screens/HomeScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import ColorGeneratorScreen from './src/screens/ColorGeneratorScreen';
import TextScreen from './src/screens/TextScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home App">
        <Stack.Screen name="Home App" component={HomeScreen} />
        <Stack.Screen name="Components" component={ComponentScreen} />
        <Stack.Screen name="Lists" component={ListScreen} />
        <Stack.Screen name="Image Screen" component={ImageScreen} />

        {/* State Management Lecture */}
        <Stack.Screen name="Counter Screen" component={CounterScreen} />
        <Stack.Screen name="Color Screen" component={ColorScreen} />
        <Stack.Screen
          name="Color Generator Screen"
          component={ColorGeneratorScreen}
        />
        <Stack.Screen name="Text Screen" component={TextScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
