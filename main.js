import Expo from "expo";
import { Provider } from "react-redux";
import store from "./store/index";
import React from "react";
import { StackNavigator } from "react-navigation";
import Router from "./App/router";
import { StatusBar } from "react-native";

// Crash Analytics
import Sentry from "sentry-expo";
import { sentryUrl } from "./config";
// Sentry.enableInExpoDevelopment = true;

// Sentry.config(sentryUrl).install();

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

Expo.registerRootComponent(App);
