/** @format */

import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import RestaurantScreen from "./src/features/restaurants/screens/RestaurantScreen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/Theme";

import { useFonts } from "expo-font";
import { Oswald_400Regular } from "@expo-google-fonts/oswald";
import { Lato_400Regular } from "@expo-google-fonts/lato";

export default function App() {
  const [Fonts] = useFonts({
    Oswald_400Regular,
    Lato_400Regular,
  });

  if (!Fonts) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantScreen />
      </ThemeProvider>
      <ExpoStatusBar style='auto' />
    </>
  );
}
