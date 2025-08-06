import React, { useEffect } from "react";
import { StatusBar, Text, View } from "react-native";
import RootNavigator from "./src/routes/AppStack";
import changeNavigationBarColor from "react-native-navigation-bar-color";
const App = () => {
  // type bar={
  //   color:boolean
  //   light:boolean
  //   immersive:boolean
  // }
  useEffect(()=>{
      changeNavigationBarColor('#000000', false, false); // background black, light icons, immersive mode

  })
  return (
    <RootNavigator />
  );
};

export default App;
