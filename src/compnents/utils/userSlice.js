import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userData",
  initialState: {
    loggedIn: false,
    data: {
      name: "Username",
      profilePic:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      email: "example@gmail.com",
      headline: "Headline",
      whoViewed: 0,
      totalConnections: 0,
    },
  },
  reducers: {
    userLogIn: (state, action) => {
      state.loggedIn = true;
      const details = action.payload;
      state.data = {
        name: details.displayName,
        profilePic: details.photoURL,
        email: details.email,
        headline: details.headline,
        whoViewed: details.whoViewed,
        totalConnections: details.totalConnections,
      };
      // console.log(state.data);
    },
    // userLogOut: (state) => {
    //   (state.loggedIn = false),
    //     (state.data = {
    //       name: "Username",
    //       profilePic:
    //         "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    //       headline: "Headline",
    //       whoViewed: 0,
    //       totalConnections: 0,
    //     });
    // },
  },
});

export const { userLogIn, userLogOut } = userSlice.actions;

export default userSlice.reducer;
