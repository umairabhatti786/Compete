import React from "react";
import{createNativeStackNavigator} from "@react-navigation/native-stack"

import Tabs from "../BottomTab/Tab";
import WelComeScreen from "../../Screens/Auth/WelComeScreen";
import LoginSignIn from "../../Screens/Auth/LoginSignIn/LoginSignIn";
import LoginScreen from "../../Screens/Auth/LoginScreen/LoginScreen";
import SignInScreen from "../../Screens/Auth/SignInScreen/SignInScreen";
import ForgotPassword from "../../Screens/Auth/ForgotPassword/ForgotPassword";
import OtpScreen from "../../Screens/Auth/OtpScreen/OtpScreen";
import AddPics from "../../Screens/Auth/AddPics/AddPic";
import ChooseLanguage from "../../Screens/Auth/ChooseLanguage/ChooseLanguage";
import Community from "../../Screens/Auth/Community/Community";
import FavGames from "../../Screens/Auth/FavGames/FavGames";
import TournamentsScreen from "../../Screens/Main/Tournaments";
import TournamentDetail from "../../Screens/Auth/TournamentDetail/TournamentDetail";
const Stack = createNativeStackNavigator();
const TournamentStack=()=>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="TournamentsScreen" component={TournamentsScreen} />
            <Stack.Screen name="TournamentDetail" component={TournamentDetail} />
        </Stack.Navigator>
    )
}
export default TournamentStack