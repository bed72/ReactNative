import "reflect-metadata";

import React from "react";

import { StatusBar } from "react-native";

import { ThemeProvider } from "styled-components/native";

import themes from "@presentation/themes";
import { Routes } from "@presentation/routes";

export default function App() {
  return (
    <ThemeProvider theme={themes}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <Routes />
    </ThemeProvider>
  );
}
