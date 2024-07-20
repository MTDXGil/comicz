import {
  configureStore,
  createSlice,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogin: false,
    favoriteComics: [],
  },
  reducers: {
    login: (state) => {
      state.isLogin = true;
    },
    logout: (state) => {
      state.isLogin = false;
    },
    addFavoriteComics: (state, action) => {
      state.favoriteComics.unshift(action.payload.comicSlug);
    },
    removeFavoriteComics: (state, action) => {
      state.favoriteComics = state.favoriteComics.filter(
        (favSlug) => favSlug !== action.payload.comicSlug
      );
    },
    clearFavoriteComics: (state) => {
      state.favoriteComics = [];
    },
  },
});

const store = configureStore({
  reducer: combineReducers({
    user: userSlice.reducer,
  }),
});

export const userActions = userSlice.actions;
export default store;
