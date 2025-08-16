import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TeamsScreen from '../../Screens/Main/Teams';
import TeamRoles from '../../Screens/Auth/TeamRoles/TeamRoles';
import Lineup from '../../Screens/Auth/Lineup/Lineup';
const Stack = createNativeStackNavigator();
const TeamStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TeamsScreen" component={TeamsScreen} />
      <Stack.Screen name="TeamRoles" component={TeamRoles} />
      <Stack.Screen name="Lineup" component={Lineup} />
    </Stack.Navigator>
  );
};
export default TeamStack;
