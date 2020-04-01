import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {
  const myName = "Oscar oceguera"
  return (
    <View>
      <Text style={styles.titleStyle}>Getting started with RN</Text>
      <Text style={styles.subtitleStyle}>My name is {myName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 45
  },
  subtitleStyle: {
    fontSize: 20
  }
})

export default ComponentsScreen