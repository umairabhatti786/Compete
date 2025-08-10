import React, { useEffect } from 'react';
import { Image, StatusBar, Text, View } from 'react-native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import images from '../../../assets/images';
import sizeHelper from '../../../utils/Helpers';
import CustomText from '../../../components/CustomText';
import { colors } from '../../../utils/colors';
import { fonts } from '../../../utils/Fonts';
import CustomButton from '../../../components/CustomBotton';
type HostingScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};
const WelComeScreen = (props: HostingScreenProps) => {
  return (
    <View>
      <StatusBar
        barStyle={'default'}
        backgroundColor={'transparent'}
        translucent
      />
      <Image 
      style={{height:"100%"}}
      source={images.welcome_image} />
      <View
        style={{
          position: 'absolute',
          alignItems: 'center',
          alignSelf: 'center',
          gap: sizeHelper.calWp(30),
          bottom: sizeHelper.calHp(120),
        }}
      >
        <View style={{ width: '100%' }}>
          <CustomText
            text={'Looking forward to the most intense matches'}
            size={36}
            lineHeight={sizeHelper.calHp(52)}
            color={colors.white}
            textAlign={'center'}
          />
        </View>
        <View style={{ width: '80%' }}>
          <CustomText
            text={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore '
            }
            fontWeight={'400'}
            fontfam={fonts.light}
            color={colors.white + '90'}
            size={22}
            lineHeight={sizeHelper.calHp(32)}
            textAlign={'center'}
          />
        </View>
        <CustomButton
          text={'Get Started'}
          bgColor={colors.white}
          textColor={colors.primary}
          fontSize={25}
          fontWeight="600"
          width={'92%'}
          marginTop={sizeHelper.calHp(50)}
          onPress={() => props.navigation.navigate('LoginSignIn')}
        />
      </View>
    </View>
  );
};

export default WelComeScreen;
