import React, { useEffect } from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ScreenLayout from '../../../components/ScreenLayout';
import CustomHeader from '../../../components/CustomHeader/CustomHeader';
import images from '../../../assets/images';
import CustomText from '../../../components/CustomText';
import sizeHelper from '../../../utils/Helpers';
import CustomButton from '../../../components/CustomBotton';
import { Notification, TournamentCard } from '../../../utils/Data';
import { appStyles } from '../../../utils/GlobalStyles';
import { colors } from '../../../utils/colors';
type NotificationsScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};
const AccountScreen = (props: NotificationsScreenProps) => {
  const Detail = ({ onPress, text }: any) => {
    return (
      <TouchableOpacity onPress={onPress} style={appStyles.rowjustify}>
        <CustomText text={text} size={25} color={colors.white} />

        <TouchableOpacity onPress={onPress}>
          <Image
            source={images.next_arrow}
            style={{
              width: sizeHelper.calWp(53),
              height: sizeHelper.calWp(50),
            }}
            // resizeMode="contain"
          />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };
  return (
    <ScreenLayout
      style={{
        backgroundColor: colors.background,
      }}
    >
      <CustomHeader
        arrow={images.white_back_arrow}
        text={'Account'}
        color={colors.white}
      />
      <ScrollView>
 <View
        style={{
          paddingTop: sizeHelper.calHp(50),
          gap: sizeHelper.calHp(40),
        }}
      >
        <Detail text={'Logout'} />
        <Detail
          text={'Contact Us'}
          onPress={() => props.navigation.navigate('ContactUsScreen')}
        />

        <Detail
          text={'Teams'}
          onPress={() => props.navigation.navigate('YourTeamsScreen')}
        />
        <Detail
          text={'Live Matches'}
          onPress={() => props.navigation.navigate('LiveMatchesScreen')}
        />
        <Detail
          text={'Tournaments'}
          onPress={() => props.navigation.navigate('YourTournamentsScreen')}
        />
        <Detail
          text={'Archived Tournaments'}
          onPress={() => props.navigation.navigate('ArchivedTournamentsScreen')}
        />

         <Detail
          text={'In-App Purchases'}
          onPress={() => props.navigation.navigate('InAppPurchasesScreen')}
        />
        <Detail
          text={'Cash Prizes'}
          onPress={() => props.navigation.navigate('CashPrizesScreen')}
        />
         <Detail
          text={'Payment Confirmation'}
          onPress={() => props.navigation.navigate('PaymentConfirmationScreen')}
        />

          <Detail
          text={'Team Alphan'}
          onPress={() => props.navigation.navigate('TeamAlphaChatScreen')}
        />

        <Detail
          text={'Edit Profile'}
          onPress={() => props.navigation.navigate('EditProfileScreen')}
        />
        
      </View>
      </ScrollView>
     
    </ScreenLayout>
  );
};
export default AccountScreen;
