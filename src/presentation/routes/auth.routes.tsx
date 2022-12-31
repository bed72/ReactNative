import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Routes } from "./type.routes";

import SignUpScreen from "@presentation/screens/auth/signup";

export function AuthRoutes() {
  const { Screen, Navigator } = createNativeStackNavigator<Routes.LoggedOut>();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="signUp" component={SignUpScreen} />
    </Navigator>
  );
}
