import {
  configureStore,
  createSlice,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

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

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  user: userSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

store.__persistor = persistStore(store);

export const userActions = userSlice.actions;
export default store;
