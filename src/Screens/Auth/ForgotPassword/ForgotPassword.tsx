import React, { useEffect, useState } from 'react';
import {
  View,
} from 'react-native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ScreenLayout from '../../../components/ScreenLayout';
import CustomHeader from '../../../components/CustomHeader/CustomHeader';
import images from '../../../assets/images';
import sizeHelper from '../../../utils/Helpers';
import CustomText from '../../../components/CustomText';
import { colors } from '../../../utils/colors';
import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomBotton';


type HostingScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};
const ForgotPassword = (props: HostingScreenProps) => {
  const [email, setEmail] = useState('');

  return (
    <ScreenLayout>
      <CustomHeader
        arrow={images.back_arrow}
        text={'Forgot Password'}
        gap={1}
        textwidth={70}
        onPress={() => props.navigation.goBack()}
      />
      <View style={{ padding: sizeHelper.calWp(10) }}>
        <CustomText
          text={
            'Enter the email associated with your account and we’ll send an email with code to reset your password'
          }
          color={colors.primary + '60'}
          marginT={sizeHelper.calHp(80)}
          lineHeight={sizeHelper.calHp(28)}
        />
        <View
          style={{ gap: sizeHelper.calWp(55), marginTop: sizeHelper.calHp(40) }}
        >
          <CustomInput
            placeholder={'Text your email'}
            label="Email"
            value={email}
            onChangeText={(text: any) => setEmail(text)}
            keyboard={'email-address'}
          />
          <CustomButton
            text={'Confirm'}
            bgColor="black"
            onPress={() => props.navigation.navigate('OtpScreen')}
          />
        </View>
      </View>
    </ScreenLayout>
  );
};

export default ForgotPassword;
