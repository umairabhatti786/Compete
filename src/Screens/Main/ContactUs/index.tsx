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
import { appStyles } from '../../../utils/GlobalStyles';
import { colors } from '../../../utils/colors';
import { fonts } from '../../../utils/Fonts';
import CustomInput from '../../../components/CustomInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
type NotificationsScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};
const ContactUsScreen = (props: NotificationsScreenProps) => {

  return (
    <ScreenLayout
      style={{
        backgroundColor: colors.background,
        gap: sizeHelper.calHp(30),
      }}
    >
       <KeyboardAwareScrollView
        enableOnAndroid
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flexGrow: 1, // 👈 Important for scroll
          backgroundColor: colors.background,
        //   paddingBottom: sizeHelper.calHp(50),
          gap: sizeHelper.calHp(30),
        }}
        showsVerticalScrollIndicator={false}
      >

      <CustomHeader
        arrow={images.white_back_arrow}
        text={'Contact Us'}
        color={'white'}
        onPress={() => props.navigation.goBack()}
      />
      <CustomText
        text={"We're here to help"}
        fontfam={fonts.bold}
        size={33}
        style={{ paddingTop: sizeHelper.calHp(30) }}
        color={colors.white}
        fontWeight={'700'}
      />
      <CustomText
        text={
          "If you have any questions or need assistance, please fill out the form below and we'll get back to you as soon as possible."
        }
        size={25}
        color={colors.white}
      />
      <CustomInput
        placeholder={'Your  Name'}
        color={colors.white}
        label=""
        placeholderTextColor={colors.placeholderColor}
        bg={colors.input_background}
        bdc={'transparent'}
        value={''}
      />
      <CustomInput
        color={colors.white}
        placeholder={'Your  Email'}
        label=""
        placeholderTextColor={colors.placeholderColor}
        bg={colors.input_background}
        bdc={'transparent'}
        value={''}
      />
      <CustomInput
        placeholder={'Subject'}
        label=""
        color={colors.white}
        placeholderTextColor={colors.placeholderColor}
        bg={colors.input_background}
        bdc={'transparent'}
        value={''}
      />
      <CustomInput
        Inputheight={250}
        textAlignVertical={'top'}
        color={colors.white}
        placeholder={''}
        label=""
        placeholderTextColor={colors.placeholderColor}
        bg={colors.input_background}
        bdc={'transparent'}
        value={''}
      />
      <CustomButton
        bgColor={colors.white}
        textColor={colors.primary}
        borderRadius={999}
        text={'Send Message'}
      />

            </KeyboardAwareScrollView>

    </ScreenLayout>
  );
};
export default ContactUsScreen;
