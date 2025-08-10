import React, { useEffect, useState } from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ScreenLayout from '../../../components/ScreenLayout';
import CustomHeader from '../../../components/CustomHeader/CustomHeader';
import images from '../../../assets/images';
import sizeHelper from '../../../utils/Helpers';
import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomBotton';
import CustomLine from '../../../components/CustomLine';
import CustomText from '../../../components/CustomText';
import { colors } from '../../../utils/colors';


type HostingScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};
const SignInScreen = (props: HostingScreenProps) => {

  const [values, setValues] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  return (
    <ScreenLayout>
      <CustomHeader
        arrow={images.back_arrow}
        text={'Sign Up'}
        onPress={() => props.navigation.goBack()}
      />
      <View
        style={{
          marginTop: sizeHelper.calHp(80),
        }}
      >
        <View style={{ gap: sizeHelper.calWp(28) }}>
          <CustomInput
            placeholder={'Text your email'}
            label="Email"
            value={values.email}
            onChangeText={(text: any) => setValues({ ...values, email: text })}
            keyboard={'email-address'}
          />
          <CustomInput
            placeholder={'Text your password'}
            label="Password"
            value={values.password}
            onChangeText={(text: any) =>
              setValues({ ...values, password: text })
            }
            keyboard={'email-address'}
          />
          <CustomInput
            placeholder={'Text your password'}
            label="Confirm password"
            value={values.password}
            onChangeText={(text: any) =>
              setValues({ ...values, password: text })
            }
            keyboard={'email-address'}
          />
        </View>

        <View
          style={{
            marginTop: sizeHelper.calHp(90),
            gap: sizeHelper.calWp(40),
          }}
        >
          <CustomButton
            text={'Sign Up'}
            bgColor="black"
            textColor="white"
            fontSize={25}
            onPress={() => props.navigation.navigate('AddPics')}
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
export default SignInScreen;
