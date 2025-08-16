import React, { useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import sizeHelper from '../../../utils/Helpers';
import CustomText from '../../../components/CustomText';
import { fonts } from '../../../utils/Fonts';
import { colors } from '../../../utils/colors';
import images from '../../../assets/images';
import ScreenLayout from '../../../components/ScreenLayout';
import { ArchivedTournamentsData, Club } from '../../../utils/Data';
import CustomHeader from '../../../components/CustomHeader/CustomHeader';
import TeamsCard from '../../../components/TeamsCard';
import CustomButton from '../../../components/CustomBotton';
type NotificationsScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};
const InAppPurchasesScreen = (props: NotificationsScreenProps) => {
  const [selectedMethod, setSelectedMethod] = useState(1);

  const paymentMethodData = [
    { id: 1, title: 'PayPal' },
    { id: 2, title: 'TApp Store' },
  ];

  const PaymentMethodCard = ({ title, onPress, item }: any) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderColor: '#40474F',
          backgroundColor: 'transparent',
          borderWidth: 1,
          height: sizeHelper.calHp(90),
          justifyContent: 'space-between',
          paddingHorizontal: sizeHelper.calWp(20),
          borderRadius: sizeHelper.calWp(20),
          width: '100%',
        }}
      >
        <CustomText
          text={title}
          fontfam={fonts.medium}
          size={25}
          color={colors.white}
          fontWeight={'600'}
        />
        <View
          style={{
            width: sizeHelper.calWp(37),
            height: sizeHelper.calWp(37),
            borderWidth: 2,
            borderColor: selectedMethod == item?.id ? colors.white : '#40474F',
            borderRadius: sizeHelper.calWp(37),
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {selectedMethod == item?.id && (
            <View
              style={{
                width: sizeHelper.calWp(12),
                height: sizeHelper.calWp(12),
                backgroundColor: colors.white,
                borderRadius: sizeHelper.calWp(12),
              }}
            />
          )}
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <ScreenLayout
      style={{
        backgroundColor: colors.background,
        gap: sizeHelper.calHp(30),
      }}
    >
      <CustomHeader
        arrow={images.white_back_arrow}
        text={'In-App Purchases'}
        color={colors.white}
        onPress={() => props.navigation.goBack()}
      />

      <CustomText
        text={'Payment Method'}
        size={33}
        style={{ paddingTop: sizeHelper.calHp(30) }}
        color={colors.white}
        fontWeight={'700'}
        fontfam={fonts.bold}
      />
      <View style={{ gap: sizeHelper.calHp(20),flex:1 }}>
        {paymentMethodData.map((item, index) => {
          return (
            <PaymentMethodCard
              onPress={() => setSelectedMethod(item?.id)}
              item={item}
              title={item?.title}
            />
          );
        })}
      </View>
       <CustomButton
          bgColor={colors.white}
          textColor={colors.primary}
          borderRadius={999}
          onPress={() => props.navigation.navigate('BanScreen')}
          text={'Continue'}
        />
    </ScreenLayout>
  );
};
const styles = StyleSheet.create({});

export default InAppPurchasesScreen;
