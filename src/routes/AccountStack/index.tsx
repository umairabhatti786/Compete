import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TeamsScreen from '../../Screens/Main/Teams';
import TeamRoles from '../../Screens/Auth/TeamRoles/TeamRoles';
import Lineup from '../../Screens/Auth/Lineup/Lineup';
import AccountScreen from '../../Screens/Main/Account';
import ContactUsScreen from '../../Screens/Main/ContactUs';
import YourTeamsScreen from '../../Screens/Main/YourTeams';
import EditProfileScreen from '../../Screens/Main/EditProfile';
import YourTournamentsScreen from '../../Screens/Main/YourTournaments';
import LiveMatchesScreen from '../../Screens/Main/LiveMatches';
import ArchivedTournamentsScreen from '../../Screens/Main/ArchivedTournaments';
import InAppPurchasesScreen from '../../Screens/Main/InAppPurchases';
import CashPrizesScreen from '../../Screens/Main/CashPrizes';
import PaymentConfirmationScreen from '../../Screens/Main/PaymentConfirmation';
import TeamAlphaChatScreen from '../../Screens/Main/TeamAlphaChat';
const Stack = createNativeStackNavigator();
const AccountStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AccountScreen" component={AccountScreen} />
      <Stack.Screen name="ContactUsScreen" component={ContactUsScreen} />
      <Stack.Screen name="YourTeamsScreen" component={YourTeamsScreen} />
     <Stack.Screen name="YourTournamentsScreen" component={YourTournamentsScreen} />
     <Stack.Screen name="LiveMatchesScreen" component={LiveMatchesScreen} />
     <Stack.Screen name="ArchivedTournamentsScreen" component={ArchivedTournamentsScreen} />
     <Stack.Screen name="InAppPurchasesScreen" component={InAppPurchasesScreen} />
     <Stack.Screen name="CashPrizesScreen" component={CashPrizesScreen} />
      <Stack.Screen name="PaymentConfirmationScreen" component={PaymentConfirmationScreen} />



    </Stack.Navigator>
  );
};
export default AccountStack;
