import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "../../utils/colors";
import images from "../../assets/images";
import { Image } from "react-native";
import HomeScreen from "../../Screens/HomeScreen/HomeScreen";
import AccountScreen from "../../Screens/AccountScreen/AccountScreen";
import HostingScreen from "../../Screens/HostingScreen/HostingScreen";
import ManageScreen from "../../Screens/ManageScreen/ManageScreen";
import ManageStack from "../AppStack/ManageStack";
import HomeStack from "../AppStack/HomeStack";
import AccountStack from "../AppStack/AccountStack";
import sizeHelper from "../../utils/Helpers";
import MessageStack from "../AppStack/MessageStack";
import BookingStack from "../AppStack/BookingStack/BookingStack";


const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator screenOptions={{tabBarStyle:{display:'flex', shadowOpacity:0.5, elevation:0.5, shadowColor:'#000' }}}>
        <Tab.Screen name="HomeStack" component={HomeStack}  options={{ tabBarLabelStyle:{fontWeight:700},  title:"Home",
          headerShown: false,
      tabBarIcon: ({ color,focused }) =>  <Image  source={focused ? images.bold_house : images.house} style={{width:sizeHelper.calWp(45), height:sizeHelper.calWp(45)}} />,
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.grey,

        }}/>
        <Tab.Screen name="BookingStack" component={BookingStack}  options={{ tabBarLabelStyle:{fontWeight:700},  title:"Bookings",
          headerShown: false,
      tabBarIcon: ({ color,focused }) =>  <Image  source={focused ? images.bold_booking : images.booking} style={{width:sizeHelper.calWp(45), height:sizeHelper.calWp(45)}} />,
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.grey,

        }}/>
        <Tab.Screen name="ManageStack" component={ManageStack} options={{ tabBarLabelStyle:{fontWeight:700}, title:"Hosting",
          headerShown: false,
      tabBarIcon: ({ color,focused }) =>  <Image  source={focused ? images.bold_hosting : images.hosting} style={{width:sizeHelper.calWp(45), height:sizeHelper.calWp(45)}}/>,
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.grey,

        }}/>
        <Tab.Screen name="MessageStack" component={MessageStack}   options={{ tabBarLabelStyle:{fontWeight:700}, title:"Messages",
          headerShown: false,
      tabBarIcon: ({ color,focused }) =>  <Image  source={focused ? images.bold_chat : images.chat} style={{width:sizeHelper.calWp(45), height:sizeHelper.calWp(45)}} />,
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.grey,

        }}/>
        <Tab.Screen name="AccountStack" component={AccountStack}   options={{ tabBarLabelStyle:{fontWeight:700}, title:"Account",
          headerShown: false,
      tabBarIcon: ({ color,focused }) =>  <Image  source={focused ? images.bold_profile : images.profile} style={{width:sizeHelper.calWp(45), height:sizeHelper.calWp(45)}} />,
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.grey,

        }}/>
    </Tab.Navigator>
  );
}

export default Tabs;
