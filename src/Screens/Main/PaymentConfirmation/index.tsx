import React, { useState } from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  SectionList,
  StyleSheet,
  View,
} from 'react-native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import sizeHelper from '../../../utils/Helpers';
import CustomText from '../../../components/CustomText';
import { fonts } from '../../../utils/Fonts';
import { colors } from '../../../utils/colors';
import images from '../../../assets/images';
import ScreenLayout from '../../../components/ScreenLayout';
import { CashPrizesData } from '../../../utils/Data';
import CustomHeader from '../../../components/CustomHeader/CustomHeader';
import CustomButton from '../../../components/CustomBotton';
import { appStyles } from '../../../utils/GlobalStyles';
type NotificationsScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};
const PaymentConfirmationScreen = (props: NotificationsScreenProps) => {
  const RecentPaymentsCard = ({ item }: any) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          gap: sizeHelper.calWp(30),
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <View
          style={{
            gap: sizeHelper.calWp(3),
            // width: '80%',
          }}
        >
          <CustomText
            text={
              item?.tournament
                ? `Tournament: ${item.title}`
                : item?.team
                ? `Team: ${item.title}`
                : item?.title ?? ''
            }
            fontWeight={'600'}
            fontfam={fonts.medium}
            color={colors.white}
            size={24}
          />

          <CustomText text={item.des} color="#9EABB8" size={22} />
        </View>

        <CustomText text={item.price} color={colors.white} size={23} />
      </View>
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
        text={'Payment Confirmation'}
        color={colors.white}
        onPress={() => props.navigation.goBack()}
      />
      <ScrollView
        scrollEnabled={true}
        contentContainerStyle={{
          gap: sizeHelper.calHp(40),
          paddingBottom: sizeHelper.calHp(30),
        }}
      >
        <CustomText
          text={'Payment Successful'}
          size={30}
          marginB={sizeHelper.calHp(20)}
          color={colors.white}
          style={{ textAlign: 'center' }}
          fontWeight={'700'}
          fontfam={fonts.bold}
        />
        <Image
          style={{
            width: '100%',
            height: sizeHelper.calHp(800),
            borderRadius: sizeHelper.calWp(30),
          }}
          source={images.cup}
        />

        <CustomText
          text={
            'Your payment of $25.00 has been successfully processed. You are now registered for the tournament.'
          }
          size={25}
          color={colors.white}
          style={{ textAlign: 'center' }}
        />

        <CustomButton
          bgColor={colors.white}
          textColor={colors.primary}
          borderRadius={999}
          width={'50%'}
          style={{ alignSelf: 'center' }}
          marginTop={sizeHelper.calHp(70)}
          text={'View Tournament'}
        />
        <CustomHeader
          arrow={images.white_back_arrow}
          text={'Payment History'}
          color={colors.white}
          onPress={() => props.navigation.goBack()}
        />

        <CustomText
          text={'Recent Payments'}
          size={30}
          marginB={sizeHelper.calHp(20)}
          color={colors.white}
          fontWeight={'700'}
          fontfam={fonts.bold}
        />

        <FlatList
          data={CashPrizesData}
          contentContainerStyle={{ gap: sizeHelper.calHp(20) }}
          style={{
            gap: sizeHelper.calHp(40),
          }}
          renderItem={({ item }) => <RecentPaymentsCard item={item} />}
        />
      </ScrollView>
    </ScreenLayout>
  );
};
const styles = StyleSheet.create({});

export default PaymentConfirmationScreen;
