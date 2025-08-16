import React, { useState } from 'react';
import {
  FlatList,
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
import { ArchivedTournamentsData, Club } from '../../../utils/Data';
import CustomHeader from '../../../components/CustomHeader/CustomHeader';
import TeamsCard from '../../../components/TeamsCard';
type NotificationsScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};
const ArchivedTournamentsScreen = (props: NotificationsScreenProps) => {
  return (
    <ScreenLayout
      style={{
        backgroundColor: colors.background,
        gap: sizeHelper.calHp(30),
      }}
    >
      <CustomHeader
        arrow={images.white_back_arrow}
        text={'Archived Tournaments'}
        color={colors.white}
        onPress={() => props.navigation.goBack()}
      />

      <CustomText
        text={'Past Tournaments'}
        size={33}
        style={{ paddingTop: sizeHelper.calHp(30) }}
        color={colors.white}
        fontWeight={'700'}
        fontfam={fonts.bold}
      />

      <View>
        <FlatList
          data={ArchivedTournamentsData}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{
            gap: sizeHelper.calHp(40),
          }}
          renderItem={({ item }) => <TeamsCard item={item} />}
        />
      </View>
    </ScreenLayout>
  );
};
const styles = StyleSheet.create({
 
});

export default ArchivedTournamentsScreen;
