import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ListScreen = () => {
  const friends = [
    { name: 'Ross', job: 'Paleontologist' },
    { name: 'Monica', job: 'Chef' },
    { name: 'Rachel', job: 'Assistant Buyer' },
    { name: 'Chandler', job: 'Advertising' },
    { name: 'Joey', job: 'Actor' },
    { name: 'Phoebe', job: 'Masseuse' },
  ];

  return (
    <View>
      <Text style={styles.fontBig}>Friends List</Text>
      <FlatList
        data={friends}
        renderItem={({ item }) => {
          console.log(item);
          return (
            <Text style={{ fontSize: 30 }}>
              {item.name} - {item.job}
            </Text>
          );
        }}
        keyExtractor={(friend) => friend.name}
        // horizontal
        // showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fontBig: {
    fontSize: 45,
  },
});

export default ListScreen;
