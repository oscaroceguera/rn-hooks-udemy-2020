import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";
import {Context} from '../context/BlogContext'

const ShowScreen = ({ route }) => {
  const { state } = useContext(Context);
  console.log("ShowScreen -> state", state)

  const blogPost = state.find((blogPost) => blogPost.id === route.params.id)
  console.log("ShowScreen -> blogPost", blogPost)
  
  return (
    <View>
      <Text>{blogPost.id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({})

export default ShowScreen;