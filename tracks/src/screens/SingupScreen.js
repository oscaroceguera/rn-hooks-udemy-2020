import React, {useState, useContext} from "react";
import { View, StyleSheet } from "react-native";
import {Text, Input, Button} from 'react-native-elements'
import Spacer from '../components/Spacer'
import {Context as AuthContext} from "../context/AuthContext";

const SignupScreen = () => {
  const { state, signup } = useContext(AuthContext);
  console.log("SignupScreen -> state", state)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Spacer />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCorrect={false}
        autoCapitalize="none"
      />
      {state.errorMessage ? (
        <Text style={styles.errorMsg}>{state.errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button title="Sign Up" onPress={() => signup({ email, password })} />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250
  },
  errorMsg: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
    marginTop: 15
  }
});

export default SignupScreen;
