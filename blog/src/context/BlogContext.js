import createDataContext from './createDataContext'

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'edit_blogpost':
      return state.map(blogPost => {
        return blogPost.id === action.payload.id
          ? action.payload
          : blogPost;
      })
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content
        },
      ];
    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    default:
      return state;
  }
}

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: "add_blogpost", payload: { title, content } });
    if (callback) {
      callback();
    }
  }
};

const deleteBlogPost = (dispatch) => (id) => dispatch({ type: "delete_blogpost", payload: id });

const EditBlogPost = dispatch => (id, title, content, callback) => {
  dispatch({
    type: 'edit_blogpost',
    payload: {
      id,
      title,
      content
    }
  })

  if (callback) {
    callback();
  }
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, EditBlogPost },
  [{ title: "TEST POST", content: "TEST CONTENNT", id: 1 }]
);