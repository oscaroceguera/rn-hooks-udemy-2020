import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import IndexScreen from './src/screen/IndexScreen'
import ShowScreen from './src/screen/ShowScreen'
import CreateScreen from './src/screen/CreateScreen'
import { Provider } from './src/context/BlogContext'
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Index">
          <Stack.Screen
            name="Index"
            component={IndexScreen}
            options={({ navigation }) => ({
              headerTitle: "Blogs",
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                  <Feather name="plus" size={30} />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen name="Show" component={ShowScreen} />
          <Stack.Screen name="Create" component={CreateScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default RootStack;