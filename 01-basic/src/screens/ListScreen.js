import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
  const friends = [
    {name: 'Friend #1', age: 20},
    {name: 'Friend #2', age: 21},
    {name: 'Friend #3', age: 22},
    {name: 'Friend #4', age: 23},
    {name: 'Friend #5', age: 24},
    {name: 'Friend #6', age: 25},
    {name: 'Friend #7', age: 26},
    {name: 'Friend #8', age: 27},
    {name: 'Friend #9', age: 28},
  ]

  return (
    <FlatList
      // horizontal
      // showsVerticalScrollIndicator={false}
      data={friends}
      keyExtractor={friend => friend.name}
      renderItem={({ item }) => {
        return <Text style={styles.testStyle}>{item.name} - {item.age}</Text>;
      }}
    />
  );
}

const styles = StyleSheet.create({
  testStyle: {
    marginVertical: 50
  }
})

export default ListScreen;