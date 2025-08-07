import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "../../utils/colors";
import images from "../../assets/images";
import { Image } from "react-native";
import HomeScreen from "../../Screens/HomeScreen/HomeScreen";
import sizeHelper from "../../utils/Helpers";


const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator screenOptions={{tabBarStyle:{display:'flex',borderColor:'#293038', backgroundColor:'#293038',   }}}>
        <Tab.Screen name="HomeScreen" component={HomeScreen}  options={{ tabBarLabelStyle:{fontWeight:700},  title:"Home", 
          headerShown: false, tabBarShowLabel:false,
      tabBarIcon: ({ color,focused }) =>  <Image  source={focused ? images.bold_home : images.home} style={{width:sizeHelper.calWp(50), height:sizeHelper.calWp(50), marginTop:sizeHelper.calHp(10)}} />,
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.grey,

        }}/>
    </Tab.Navigator>
  );
}

export default Tabs;
