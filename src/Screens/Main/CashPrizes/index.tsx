import React, { useState } from 'react';
import { SectionList, StyleSheet, View } from 'react-native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import sizeHelper from '../../../utils/Helpers';
import CustomText from '../../../components/CustomText';
import { fonts } from '../../../utils/Fonts';
import { colors } from '../../../utils/colors';
import images from '../../../assets/images';
import ScreenLayout from '../../../components/ScreenLayout';
import { CashPrizesData } from '../../../utils/Data';
import CustomHeader from '../../../components/CustomHeader/CustomHeader';
type NotificationsScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};
const CashPrizesScreen = (props: NotificationsScreenProps) => {
  const CashPrizesCard = ({ item }: any) => {
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
          }}
        >
          <CustomText
            text={item.price}
            fontWeight={'600'}
            fontfam={fonts.medium}
            color={colors.white}
            size={24}
          />
          <CustomText text={item.des} color="#9EABB8" size={22} />
        </View>

        <CustomText text={item.country} color={colors.white} size={23} />
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
        text={'Cash Prizes'}
        color={colors.white}
        onPress={() => props.navigation.goBack()}
      />

      <SectionList
        sections={CashPrizesData}
        contentContainerStyle={{ gap: sizeHelper.calHp(20) }}
        style={{
          gap: sizeHelper.calHp(40),
          paddingTop: sizeHelper.calHp(40),
        }}
        renderItem={({ item }) => <CashPrizesCard item={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <CustomText
            text={title}
            size={33}
            marginB={sizeHelper.calHp(20)}
            color={colors.white}
            fontWeight={'700'}
            fontfam={fonts.bold}
          />
        )}
      />
    </ScreenLayout>
  );
};
const styles = StyleSheet.create({});

export default CashPrizesScreen;
