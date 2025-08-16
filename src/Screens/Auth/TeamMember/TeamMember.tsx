import React, { useEffect } from 'react';
import {
  FlatList,
  Image,
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
import { Members } from '../../../utils/Data';
import { colors } from '../../../utils/colors';
import { fonts } from '../../../utils/Fonts';
type NotificationsScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};
const TeamMember = (props: NotificationsScreenProps) => {
  return (
    <ScreenLayout
      style={{
        backgroundColor: '#121417',
      }}
    >
      <CustomHeader
        arrow={images.white_back_arrow}
        text={'Team Members'}
        color={colors.white}
        onPress={() => props.navigation.goBack()}
      />
      <CustomText
        text={'Members'}
        fontfam={fonts.bold}
        size={35}
        style={{ paddingTop: sizeHelper.calHp(30) }}
        color={colors.white}
        fontWeight={'700'}
      />
      <FlatList
        data={Members}
        keyExtractor={item => item.id.toString()}
        style={{
          paddingTop: sizeHelper.calHp(50),
        }}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: 'row',
              gap: sizeHelper.calWp(20),
              paddingBottom: sizeHelper.calHp(40),
              alignItems: 'center',
            }}
          >
            <Image
              source={item.MembersPic}
              style={{
                width: sizeHelper.calWp(100),
                height: sizeHelper.calWp(100),
              }}
            />
            <View>
              <CustomText text={item.MembersName} color="white" size={24} />
              <CustomText text={item.MembersPosts} color="#9EABB8" size={22} />
            </View>
          </View>
        )}
      />
      <TouchableOpacity
        style={{
          width: '50%',
          height: sizeHelper.calHp(80),
          backgroundColor: colors.white,
          borderRadius: sizeHelper.calWp(100),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: sizeHelper.calWp(30),
          alignSelf: 'flex-end',
          marginBottom: sizeHelper.calHp(30),
        }}
        onPress={() =>
          props.navigation.navigate('Tabs', {
            screen: 'TeamStack',
            params: { screen: 'TeamRoles' },
          })
        }
      >
        <Image
          source={images.add}
          style={{
            width: sizeHelper.calWp(40),
            height: sizeHelper.calWp(40),
            tintColor: colors.primary,
          }}
        />
        <CustomText
          text={'Add Member'}
          fontfam={fonts.bold}
          size={25}
          fontWeight={'700'}
        />
      </TouchableOpacity>
    </ScreenLayout>
  );
};
export default TeamMember;
