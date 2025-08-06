import React from "react";
import{createNativeStackNavigator} from "@react-navigation/native-stack"
import Booking from "../../../Screens/Booking/Booking";

const Stack = createNativeStackNavigator();
const BookingStack=()=>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Booking" component={Booking} />
        </Stack.Navigator>
    )
}
export default BookingStack