import React, { useState } from 'react';
import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import sizeHelper from '../../../utils/Helpers';
import CustomText from '../../../components/CustomText';
import { fonts } from '../../../utils/Fonts';
import { colors } from '../../../utils/colors';
import images from '../../../assets/images';
import ScreenLayout from '../../../components/ScreenLayout';
import { Club, LiveMatcheDate } from '../../../utils/Data';
import CustomHeader from '../../../components/CustomHeader/CustomHeader';
import TeamsCard from '../../../components/TeamsCard';
type NotificationsScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};
const LiveMatchesScreen = (props: NotificationsScreenProps) => {
  return (
    <ScreenLayout
      style={{
        backgroundColor: colors.background,
        gap: sizeHelper.calHp(30),
      }}
    >
      <CustomHeader
        arrow={images.white_back_arrow}
        text={'Live Matches'}
        color={colors.white}
        onPress={() => props.navigation.goBack()}
      />

      

      <View>
        <FlatList
          data={LiveMatcheDate}
          style={{
             paddingTop: sizeHelper.calHp(30) 
          }}
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
  HandleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: sizeHelper.calHp(42),
    justifyContent: 'space-between',
    padding: sizeHelper.calWp(30),
  },

  tabRow: {
    marginTop: sizeHelper.calHp(20),
    flexDirection: 'row',
    gap: sizeHelper.calWp(50),
    alignItems: 'center',
    height: sizeHelper.calHp(70),
    borderBottomWidth: 1,
    borderBottomColor: colors.white + '50',
  },
  tabText: {
    fontSize: sizeHelper.calWp(26),
    color: '#9EABB8',
    marginBottom: sizeHelper.calHp(20),
    marginLeft: sizeHelper.calWp(38),
  },
  activeText: {
    color: colors.white, // Orange color
    fontWeight: 'bold',
    marginBottom: sizeHelper.calHp(20),
    marginLeft: sizeHelper.calWp(38),
  },
  underline: {
    height: sizeHelper.calHp(7),
    width: '80%',
    backgroundColor: '#E5E8EB',
    position: 'absolute',
    top: sizeHelper.calHp(55),
    marginLeft: sizeHelper.calWp(38),
    alignSelf: 'center',
  },
});

export default LiveMatchesScreen;
