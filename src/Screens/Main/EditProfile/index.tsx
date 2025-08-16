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
import { colors } from '../../../utils/colors';
import { fonts } from '../../../utils/Fonts';
import CustomInput from '../../../components/CustomInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
type NotificationsScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};
const EditProfileScreen = (props: NotificationsScreenProps) => {
  return (
    <ScreenLayout
      style={{
        backgroundColor: colors.background,
        gap: sizeHelper.calHp(30),
        flex: 1,
      }}
    >
      <CustomHeader
        arrow={images.cross_arrow}
        text={'Edit Profile'}
        color={'white'}
        onPress={() => props.navigation.goBack()}
      />
      <KeyboardAwareScrollView
        enableOnAndroid
        extraScrollHeight={100}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flexGrow: 1, // 👈 Important for scroll
          backgroundColor: colors.background,
        //   paddingBottom: sizeHelper.calHp(50),
          gap: sizeHelper.calHp(30),
        }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            alignItems: 'center',
            gap: sizeHelper.calHp(10),
            paddingTop: sizeHelper.calHp(30),
          }}
        >
          <Image
            source={images.user_img}
            style={{
              width: sizeHelper.calWp(280),
              height: sizeHelper.calWp(280),
              borderRadius: 999,
            }}
          />
          <View style={{ alignItems: 'center', gap: sizeHelper.calHp(5) }}>
            <CustomText
              text={'John Carter'}
              fontfam={fonts.bold}
              size={35}
              style={{ paddingTop: sizeHelper.calHp(30) }}
              color={colors.white}
              fontWeight={'700'}
            />
            <CustomText
              text={'@john_carter'}
              size={25}
              color={colors.placeholderColor}
            />
          </View>
        </View>

        <CustomInput
          placeholder={''}
          color={colors.white}
          labelColor={colors.white}
          label="Name"
          placeholderTextColor={colors.placeholderColor}
          bg={colors.input_background}
          bdc={'transparent'}
          value={''}
        />
        <CustomInput
          color={colors.white}
          labelColor={colors.white}
          placeholder={''}
          label="Username"
          placeholderTextColor={colors.placeholderColor}
          bg={colors.input_background}
          bdc={'transparent'}
          value={''}
        />
        <CustomInput
          placeholder={''}
          label="Email"
          color={colors.white}
          labelColor={colors.white}
          placeholderTextColor={colors.placeholderColor}
          bg={colors.input_background}
          bdc={'transparent'}
          value={''}
        />
        <CustomInput
          color={colors.white}
          labelColor={colors.white}
          placeholder={''}
          label="Phone"
          placeholderTextColor={colors.placeholderColor}
          bg={colors.input_background}
          bdc={'transparent'}
          value={''}
        />
        <CustomButton
          bgColor={colors.white}
          textColor={colors.primary}
          borderRadius={999}
          marginTop={sizeHelper.calHp(70)}
          text={'Send Message'}
        />
      </KeyboardAwareScrollView>
    </ScreenLayout>
  );
};
export default EditProfileScreen;
