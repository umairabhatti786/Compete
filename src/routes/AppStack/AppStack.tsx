import React from "react";
import{createNativeStackNavigator} from "@react-navigation/native-stack"
import WellComeScreen from "../../Screens/WellComeScreen/WellComeScreen";
import LoginSignIn from "../../Screens/LoginSignIn/LoginSignIn";
import LoginScreen from "../../Screens/LoginScreen/LoginScreen";
import SignInScreen from "../../Screens/SignInScreen/SignInScreen";
import ForgotPassword from "../../Screens/ForgotPassword/ForgotPassword";
import OtpScreen from "../../Screens/OtpScreen/OtpScreen";
import AddPics from "../../Screens/AddPics/AddPic";
import ChooseLanguage from "../../Screens/ChooseLanguage/ChooseLanguage";
import Community from "../../Screens/Community/Community";
const Stack = createNativeStackNavigator();
const AppStack=()=>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="WellComeScreen" component={WellComeScreen} />
            <Stack.Screen name="LoginSignIn" component={LoginSignIn} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="SignInScreen" component={SignInScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="OtpScreen" component={OtpScreen} />
            <Stack.Screen name="AddPics" component={AddPics} />
            <Stack.Screen name="ChooseLanguage" component={ChooseLanguage} />
            <Stack.Screen name="Community" component={Community} />
        </Stack.Navigator>
    )
}
export default AppStack