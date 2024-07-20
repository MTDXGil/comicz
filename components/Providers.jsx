"use client";
import { Provider } from "react-redux";
import store from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";

export default function Providers({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={store.__persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
