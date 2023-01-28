import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light", // represent light mode and dark mode and we configure globally
  user: null,
  token: null,
  posts: [],
}; //this will be stored in global state

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light"; //changing from light to dark mode
    },
    setLogin: (state, action) => {
      state.user = action.payload.user; // setting a user parameter from the function
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    }, // when you log out then reset it to have nothing there
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error("user friends non-existent :(");
      }
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    }, // used to set the post
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
      state.posts = updatedPosts; // this is the updated post
    },
  },
}); //updated the current post that we change

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } =
  authSlice.actions;
export default authSlice.reducer;
