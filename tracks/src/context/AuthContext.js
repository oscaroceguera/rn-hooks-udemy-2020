import createDataContext from "./createDataContext";
import trackerApi from  '../api/tracker'

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return {
        ...state,
        errorMessage: action.payload
      }
    default:
      return state
  }
}

const signup = dispatch => {
  return async ({ email, password }) => {
    try {
      const respose = await trackerApi.post('/signup', {email, password})
      console.log("respose =>", respose.data)
    } catch (err) {
      console.log("err", err.response.data)
      dispatch({
        type: 'add_error',
        payload: 'Something went wront sign up'
      })
    }
  }
}
const signin = dispatch => {
  return ({ email, password }) => { }
    // Try to signin
    // Handle success by updating state
    // Handle failure by showing error message (somehow)
}
const signout = dispatch => {
  return ({ email, password }) => { }
    // some sign out
}

export const { Provider, Context } = createDataContext(
  authReducer,
  {signup,signin,signout},
  {isSignedIn: false, errorMessage: ''}
)
