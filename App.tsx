import React, { useEffect } from "react";
import { StatusBar, Text, View } from "react-native";
import RootNavigator from "./src/routes/AppStack";
const App = () => {
  // type bar={
  //   color:boolean
  //   light:boolean
  //   immersive:boolean
  // }
 
  return (
    <View style={{flex:1}}>
    <RootNavigator />

    </View>
  );
};

export default App;
