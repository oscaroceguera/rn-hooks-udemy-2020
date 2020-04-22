import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import AccountScreen from './src/screens/AccountScreen'
import SigninScreen from "./src/screens/SigninScreen";
import SingupScreen from "./src/screens/SingupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

const NavStack = () => {
  return (
    <Stack.Navigator initialRouteName="Signup">
      <Stack.Screen
        name="Signup"
        component={SingupScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Signin" component={SigninScreen} />
    </Stack.Navigator>
  );
}

const TrackListFlow = () => {
  return (
    <Tab.Navigator initialRouteName="TrackList">
      <Tab.Screen name="TrackList" component={TrackListScreen} />
      <Tab.Screen name="TrackDetail" component={TrackDetailScreen} />
    </Tab.Navigator>
  );
}

const NavTab = () => {
  return (
    <Tab.Navigator initialRouteName="Account">
      <Tab.Screen name="Account" component={AccountScreen} />
      <Tab.Screen name="TrackListFlow" component={TrackListFlow} />
      <Tab.Screen name="TrackCreate" component={TrackCreateScreen} />
    </Tab.Navigator>
  );
}

const isLoggedIn = true

const RooStack = () => {
  return (
    <NavigationContainer>
      {/* {isLoggedIn ? <NavStack /> : <NavTab />} */}
      <Tab.Navigator initialRouteName="TrackList">
        <Stack.Screen name="loginFlow" component={NavStack} />
        <Stack.Screen name="mainFlow" component={NavTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default RooStack;