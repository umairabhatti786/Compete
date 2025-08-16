import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Tabs from '../BottomTab/Tab';
import WelComeScreen from '../../Screens/Auth/WelComeScreen';
import LoginSignIn from '../../Screens/Auth/LoginSignIn/LoginSignIn';
import LoginScreen from '../../Screens/Auth/LoginScreen/LoginScreen';
import SignInScreen from '../../Screens/Auth/SignInScreen/SignInScreen';
import ForgotPassword from '../../Screens/Auth/ForgotPassword/ForgotPassword';
import OtpScreen from '../../Screens/Auth/OtpScreen/OtpScreen';
import AddPics from '../../Screens/Auth/AddPics/AddPic';
import ChooseLanguage from '../../Screens/Auth/ChooseLanguage/ChooseLanguage';
import Community from '../../Screens/Auth/Community/Community';
import FavGames from '../../Screens/Auth/FavGames/FavGames';
import CreateTeam from '../../Screens/Auth/CreateTeam/CreateTeam';
import TeamMember from '../../Screens/Auth/TeamMember/TeamMember';
import TeamStack from '../TeamStack/TeamStack';
import MatcPrep from '../../Screens/Auth/MatcPrep/MatchPrep';
import ContactUsScreen from '../../Screens/Main/ContactUs';
import EditProfileScreen from '../../Screens/Main/EditProfile';
import LiveMatchesScreen from '../../Screens/Main/LiveMatches';
import BanScreen from '../../Screens/Main/Ban';
const Stack = createNativeStackNavigator();
const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="WelComeScreen" component={WelComeScreen} />
      <Stack.Screen name="LoginSignIn" component={LoginSignIn} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="OtpScreen" component={OtpScreen} />
      <Stack.Screen name="AddPics" component={AddPics} />
      <Stack.Screen name="ChooseLanguage" component={ChooseLanguage} />
      <Stack.Screen name="Community" component={Community} />
      <Stack.Screen name="FavGames" component={FavGames} />
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="CreateTeam" component={CreateTeam} />
      <Stack.Screen name="TeamMember" component={TeamMember} />
      <Stack.Screen name="MatcPrep" component={MatcPrep} />
            <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
            <Stack.Screen name="BanScreen" component={BanScreen} />

    </Stack.Navigator>
  );
};
export default AppStack;
