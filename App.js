import { StatusBar } from "expo-status-bar";
import { ViewComponent } from "react-native";
import React from "react";
import Extra2 from "./screens/Extra2";
import Travel from "./screens/Travel";
import Report from "./screens/week2/Report";
import { PaperProvider } from "react-native-paper";
import TestPaper from "./screens/week2/TestPaper";

export default function App() {
  return (
    //<Report/>
    <PaperProvider>
    <TestPaper />
    </PaperProvider>
  );
}