import React, { useEffect, useState } from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomText from '../../../components/CustomText';
import images from '../../../assets/images';
import { colors } from '../../../utils/colors';
import sizeHelper from '../../../utils/Helpers';
import CustomButton from '../../../components/CustomBotton';
import CustomLine from '../../../components/CustomLine';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import CustomHeader from '../../../components/CustomHeader/CustomHeader';
import CustomInput from '../../../components/CustomInput';
import Checkbox from '../../../components/CheckBox';
import ScreenLayout from '../../../components/ScreenLayout';

type HostingScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};
const LoginScreen = (props: HostingScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  return (
    <ScreenLayout>
      <CustomHeader
        arrow={images.back_arrow}
        text={'Log In'}
        onPress={() => props.navigation.goBack()}
      />
      <View style={{ paddingTop: sizeHelper.calHp(100) }}>
        <View style={{ gap: sizeHelper.calWp(28) }}>
          <CustomInput
            placeholder={'Text your email'}
            label="Email"
            value={email}
            onChangeText={(text: any) => setEmail(text)}
            keyboard={'email-address'}
          />
          <CustomInput
            placeholder={'Text your password'}
            label="Password"
            value={password}
            onChangeText={(text: any) => setPassword(text)}
            keyboard={'email-address'}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: sizeHelper.calWp(10),
            marginTop: sizeHelper.calWp(16),
          }}
        >
          <TouchableOpacity
            onPress={() => setIsChecked(!isChecked)}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: sizeHelper.calWp(10),
            }}
          >
            <Checkbox setIsChecked={setIsChecked} isChecked={isChecked} />
            <CustomText color={colors.primary_black} text={'Remember me'} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('ForgotPassword')}
          >
            <CustomText
              text={'Forgot Password?'}
              color={colors.natural_dark_gray}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: sizeHelper.calHp(80),
            gap: sizeHelper.calWp(50),
          }}
        >
          <CustomButton
            text={'Log In'}
            bgColor="black"
            textColor="white"
            fontSize={25}
            onPress={() => props.navigation.navigate('Tabs')}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: sizeHelper.calWp(15),
            }}
          >
            <CustomLine bg={colors.grey200} height={1.2} />
            <CustomText
              text={'Or'}
              textAlign={'center'}
              color={colors.grey}
              size={24}
            />
            <CustomLine align={'center'} bg={colors.grey200} height={1.2} />
          </View>
          <View style={{ alignItems: 'center', gap: sizeHelper.calWp(40) }}>
            <CustomButton
              borderWidth={1}
              borderColor={colors.border}
              bgColor="transparent"
              textColor={colors.natural_black}
              text={'Continue with Google'}
              fontSize={23}
            >
              <Image source={images.google} style={styles.auth_icon} />
            </CustomButton>
            <View style={{ width: '100%', gap: sizeHelper.calHp(20) }}>
              <CustomButton
                borderWidth={1}
                borderColor={colors.border}
                bgColor="transparent"
                fontSize={23}
                textColor={colors.natural_black}
                text={'Continue with Facebook'}
              >
                <Image source={images.facebook} style={styles.auth_icon} />
              </CustomButton>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('SignInScreen')}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: sizeHelper.calWp(10),
                }}
              >
                <CustomText
                  color={colors.natural_dark_gray}
                  size={18}
                  text={'Dont’t have an account?'}
                />
                <CustomText
                  color={colors.semantic_blue}
                  size={18}
                  text={'Register'}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScreenLayout>
  );
};
const styles = StyleSheet.create({
  auth_icon: {
    width: sizeHelper.calWp(48),
    height: sizeHelper.calWp(48),
  },
});
export default LoginScreen;
