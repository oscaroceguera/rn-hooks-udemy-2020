import React, { useContext} from 'react'
import { StyleSheet } from 'react-native'
import {Context} from '../context/BlogContext'
import BlogPostForm from "../component/BlogPostForm";

const EditScreen = ({ route, navigation }) => {
  const id = route.params.id;
  const { state, EditBlogPost } = useContext(Context);

  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        EditBlogPost(id, title, content, () => navigation.pop());
      }}
    />
  );
};

const styles = StyleSheet.create({})

export default EditScreen