import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TournamentsScreen from '../../Screens/Main/Tournaments';
import TournamentDetail from '../../Screens/Auth/TournamentDetail/TournamentDetail';
import CreateTournamentScreen from '../../Screens/Main/CreateTournament';
import SubmitMatchResultScreen from '../../Screens/Main/SubmitMatchResult';
import ScheduleScreen from '../../Screens/Main/Schedule';
const Stack = createNativeStackNavigator();
const TournamentStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TournamentsScreen" component={TournamentsScreen} />
      <Stack.Screen name="TournamentDetail" component={TournamentDetail} />
      <Stack.Screen
        name="CreateTournamentScreen"
        component={CreateTournamentScreen}
      />
       <Stack.Screen
        name="SubmitMatchResultScreen"
        component={SubmitMatchResultScreen}
      />
       <Stack.Screen
        name="ScheduleScreen"
        component={ScheduleScreen}
      />
      
      
    </Stack.Navigator>
  );
};
export default TournamentStack;
