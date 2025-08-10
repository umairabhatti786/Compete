import React, { useEffect } from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomText from '../../../components/CustomText';
import CustomButton from '../../../components/CustomBotton';
import CustomLine from '../../../components/CustomLine';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ScreenLayout from '../../../components/ScreenLayout';
import sizeHelper from '../../../utils/Helpers';
import images from '../../../assets/images';
import { colors } from '../../../utils/colors';

type HostingScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};
const LoginSignIn = (props: HostingScreenProps) => {
  return (
    <ScreenLayout>
      <Image
        source={images.main_logo}
        style={{ alignSelf: 'center', marginTop: sizeHelper.calHp(180) }}
      />
      <View
        style={{
          marginTop: sizeHelper.calHp(120),
          gap: sizeHelper.calWp(70),
        }}
      >
        <View style={{ gap: sizeHelper.calWp(50) }}>
          <CustomButton
            text={'Log In'}
            bgColor="black"
            textColor="white"
            fontSize={25}
            onPress={() => props.navigation.navigate('LoginScreen')}
          />
          <CustomButton
            text={'Sign Up'}
            fontSize={25}
            borderWidth={1}
            bgColor="transparent"
            textColor={colors.secondary}
            borderColor={colors.secondary}
            onPress={() => props.navigation.navigate('SignInScreen')}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: sizeHelper.calWp(15),
          }}
        >
          <CustomLine 
          bg={colors.grey200}   height={1.2}/>
          <CustomText
            text={'Or'}
            textAlign={'center'}
            color={colors.grey}
            size={24}
          />
          <CustomLine
            align={'center'}
            bg={colors.grey200}
            height={1.2}
      
          />
        </View>
        <View style={{ alignItems: 'center', gap: sizeHelper.calWp(50) }}>
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
    </ScreenLayout>
  );
};
const styles = StyleSheet.create({
 
  auth_icon: {
    width: sizeHelper.calWp(48),
    height: sizeHelper.calWp(48),
  },
});
export default LoginSignIn;
