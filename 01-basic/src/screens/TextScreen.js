import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const TextScreen = () => {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  return (
    <View>
      <Text>Enter your name</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      <Text>Enter your password</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      <Text>My name is {name}</Text>
      {password.length < 4 ? <Text>Password must be 4 characters</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  }
})

export default TextScreen