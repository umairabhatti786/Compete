import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer,} from "@react-navigation/native";
import AppStack from "./AppStack";


const RootNavigator = () => {
  const Stack = createNativeStackNavigator();
  return  (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AppStack" component={AppStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
