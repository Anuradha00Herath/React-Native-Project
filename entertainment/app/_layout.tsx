import React from "react";
import { Slot } from "expo-router";
import { Provider } from "react-redux";
import { store } from "../store/store"; // Path to your Redux store

export default function Layout() {
  return (
    <Provider store={store}>
      <Slot />
    </Provider>
  );
}
