import React, { useState } from 'react';
import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SectionList,
} from 'react-native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import sizeHelper from '../../../utils/Helpers';
import CustomText from '../../../components/CustomText';
import { fonts } from '../../../utils/Fonts';
import { colors } from '../../../utils/colors';
import images from '../../../assets/images';
import ScreenLayout from '../../../components/ScreenLayout';
import { Club, YourTournamentsData } from '../../../utils/Data';
import CustomHeader from '../../../components/CustomHeader/CustomHeader';
import TeamsCard from '../../../components/TeamsCard';
type NotificationsScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};
const YourTournamentsScreen = (props: NotificationsScreenProps) => {
  return (
    <ScreenLayout
      style={{
        backgroundColor: colors.background,
        // gap: sizeHelper.calHp(30),
      }}
    >
      <CustomHeader
        disableLeftSource={true}
        arrow={images.white_back_arrow}
        text={'Tournaments'}
        color={colors.white}
        onPress={() => props.navigation.goBack()}
        rightSource={images.add}
        onRightSource={() => {}}
      />

      <View>
        <SectionList
          sections={YourTournamentsData}
          //   keyExtractor={(item, index) => item + index}
          contentContainerStyle={{gap:sizeHelper.calHp(20)}}
           style={{
            gap: sizeHelper.calHp(40),
            paddingTop:sizeHelper.calHp(40)
          }}
          renderItem={({ item }) => <TeamsCard item={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <CustomText
              text={title}
              size={30}
              marginB={sizeHelper.calHp(20)}
              color={colors.white}
              fontWeight={'700'}
              fontfam={fonts.bold}
            />
          )}
        />
        {/* <FlatList
          data={Club}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <TeamsCard item={item} />}
        /> */}
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

export default YourTournamentsScreen;
