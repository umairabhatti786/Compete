import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../../utils/colors';
import images from '../../assets/images';
import { Image, Platform, StyleSheet, View } from 'react-native';
import sizeHelper from '../../utils/Helpers';
import CustomText from '../../components/CustomText';
import { fonts } from '../../utils/Fonts';
import TournamentsScreen from '../../Screens/Main/Tournaments';
import TeamsScreen from '../../Screens/Main/Teams';
import NotificationsScreen from '../../Screens/Main/Notifications';
import AccountScreen from '../../Screens/Main/Account';
import HomeScreen from '../../Screens/Auth/HomeScreen/HomeScreen';
import TournamentStack from '../TournamentStack/TournamentStack';
import TeamStack from '../TeamStack/TeamStack';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const TabItem = ({ focused, title, img }: any) => {
    return (
      <View style={[style.itemStyle]}>
       

        <Image
          resizeMode="contain"
          source={img}
          style={{
            ...style.img,
            tintColor: focused ? colors.white : '#9EABB8',
          }}
        />
        <CustomText
          text={title}
          fontfam={fonts.medium}
          fontWeight="600"
          size={16}
          color={focused ? colors.white : '#9EABB8'}
        />
      </View>
    );
  };
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          borderColor: '#293038',
          backgroundColor: '#1C2126',
          justifyContent: 'center',
          alignItems: 'center',
          shadowOffset: {width: 0, height: 5},
          shadowOpacity: 1,
          shadowRadius: 4,
          elevation: 10,
          height: sizeHelper.calHp(110),
          paddingHorizontal:sizeHelper.calWp(10),
          borderTopWidth: 1,
          paddingTop: sizeHelper.calHp(Platform.OS == 'ios' ? 20 : 25),
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            return (
              <TabItem
                title={'Home'}
                colors={colors}
                img={focused ? images.home_filled : images.home }
                focused={focused}
              />
            );
          },
        
        }}
      />

<Tab.Screen
        name="Tournaments"
        component={TournamentStack}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            return (
              <TabItem
                title={'Tournaments'}
                colors={colors}
                img={focused ? images.tournaments_filled : images.tournaments }
                focused={focused}
              />
            );
          },
        
        }}
      />

<Tab.Screen
        name="TeamStack"
        component={TeamStack}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            return (
              <TabItem
                title={'Teams'}
                colors={colors}
                img={focused ? images.teams_filled : images.teams }
                focused={focused}
              />
            );
          },
        
        }}
      />

<Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            return (
              <TabItem
                title={'Notifications'}
                colors={colors}
                img={focused ? images.notifications_filled : images.notifications }
                focused={focused}
              />
            );
          },
        
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            return (
              <TabItem
                title={'Account'}
                colors={colors}
                img={focused ? images.account_filled : images.account }
                focused={focused}
              />
            );
          },
        
        }}
      />
     
    </Tab.Navigator>
  );
};

export default Tabs;

const style = StyleSheet.create({
  itemStyle: {
    width: sizeHelper.calWp(150),
    backgroundColor: 'transparent', // Semi-transparent background
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    gap: sizeHelper.calHp(10),
  },
  img: {
    height: sizeHelper.calHp(34),
    width: sizeHelper.calHp(34),
  },
  tabBarStyle: {},
});
