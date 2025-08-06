import React from "react";
import{createNativeStackNavigator} from "@react-navigation/native-stack"
import WellComeScreen from "../../Screens/WellComeScreen/WellComeScreen";
const Stack = createNativeStackNavigator();
const AppStack=()=>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="WellComeScreen" component={WellComeScreen} />
        </Stack.Navigator>
    )
}
export default AppStack