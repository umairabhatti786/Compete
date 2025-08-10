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

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import ScreenLayout from '../../../components/ScreenLayout';
import CustomHeader from '../../../components/CustomHeader/CustomHeader';
import images from '../../../assets/images';
import sizeHelper from '../../../utils/Helpers';
import CustomText from '../../../components/CustomText';
import { colors } from '../../../utils/colors';
import { fonts } from '../../../utils/Fonts';
import CustomButton from '../../../components/CustomBotton';
type HostingScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};
const CELL_COUNT = 6;
const OtpScreen = (props: HostingScreenProps) => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [prop, getCellOnLayoutHandler]: any = useClearByFocusCell({
    value,
    setValue,
  });
  return (
    <ScreenLayout>
      <CustomHeader
        arrow={images.back_arrow}
        text={'Verify OTP'}
        gap={1}
        textwidth={70}
        onPress={() => props.navigation.goBack()}
      />
      <View style={{ marginTop: sizeHelper.calHp(80) }}>
        <CustomText
          text={
            'Enter your OTP which has been sent to your email and completely verify your account.'
          }
          color={colors.primary + '60'}
          lineHeight={sizeHelper.calHp(25)}
        />
        <View
          style={{ gap: sizeHelper.calWp(28), marginTop: sizeHelper.calHp(40) }}
        >
          <View style={{ gap: sizeHelper.calWp(22) }}>
            <CodeField
              ref={ref}
              {...prop}
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              rootStyle={styles.codeFieldRoot}
              renderCell={({ index, symbol }: any) => (
                <View
                  key={index}
                  onLayout={getCellOnLayoutHandler(index)}
                  style={styles.cell}
                >
                  <CustomText
                    text={symbol}
                    style={{ fontSize: sizeHelper.calHp(35) }}
                  />
                </View>
              )}
            />
          </View>
          <View
            style={{
              gap: sizeHelper.calWp(16),
              marginTop: sizeHelper.calHp(15),
            }}
          >
            <CustomText
              text={'A code has been sent to your phone'}
              size={21}
              color={colors.primary + '50'}
              textAlign={'center'}
            />
            <CustomText
              text={'Resend in 00:57'}
              fontWeight={'600'}
              fontfam={fonts.medium}
              textAlign={'center'}
              size={22}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: sizeHelper.calHp(90),
            gap: sizeHelper.calWp(70),
          }}
        >
          <CustomButton
            text={'Confirm'}
            bgColor="black"
            textColor="white"
            fontSize={25}
            onPress={() => props.navigation.navigate('AddPics')}
          />
        </View>
      </View>
    </ScreenLayout>
  );
};
const styles = StyleSheet.create({
  codeFieldRoot: { marginTop: sizeHelper.calHp(20) },

  cell: {
    borderBottomWidth: sizeHelper.calHp(3),
    width: sizeHelper.calWp(100),
    borderBottomColor: colors.primary + '20',
    fontSize: sizeHelper.calHp(25),
    textAlign: 'center',
    alignItems: 'center',
    padding: sizeHelper.calWp(20),
  },
});
export default OtpScreen;
