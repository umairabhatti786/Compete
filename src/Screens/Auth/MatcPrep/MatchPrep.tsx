import React, { useEffect } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ScreenLayout from '../../../components/ScreenLayout';
import CustomHeader from '../../../components/CustomHeader/CustomHeader';
import images from '../../../assets/images';
import CustomText from '../../../components/CustomText';
import sizeHelper from '../../../utils/Helpers';
import CustomButton from '../../../components/CustomBotton';
import { Lineup, Members } from '../../../utils/Data';
import { colors } from '../../../utils/colors';
type NotificationsScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};
const MatcPrep = (props: NotificationsScreenProps) => {
  return (
    <ScreenLayout
      style={{
        backgroundColor: '#121417',
        gap:sizeHelper.calHp(30)
      }}
    >
      <CustomHeader
        arrow={images.white_back_arrow}
        text={'Match Prep'}
        color={colors.white}
        onPress={() => props.navigation.goBack()}
      />
      <View>
        <CustomText
          text={'Match Details'}
          fontWeight={'700'}
          size={33}
          color="white"
          marginT={sizeHelper.calHp(30)}
        />
        <View
          style={{
            flexDirection: 'row',
            gap: sizeHelper.calWp(30),
            paddingTop: sizeHelper.calHp(50),
            alignItems: 'center',
          }}
        >
          <Image
            source={images.match_stadium}
            style={{
              width: sizeHelper.calWp(100),
              height: sizeHelper.calWp(100),
            }}
          />
          <View>
            <CustomText
              text={'FC Barcelona vs. Real Madrid'}
              color="white"
              size={24}
            />
            <CustomText text={'10/20/2024'} color="#9EABB8" size={22} />
          </View>
        </View>
      </View>
      <CustomText
        text={'Lineup'}
        fontWeight={'700'}
        size={30}
        color="white"
      />
      <FlatList
        data={Lineup}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{gap:sizeHelper.calHp(30)}}
        
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: 'row',
              gap: sizeHelper.calWp(20),
              alignItems: 'center',
            }}
          >
            <Image
              source={item.PlayersPic}
              style={{
                width: sizeHelper.calWp(100),
                height: sizeHelper.calWp(100),
              }}
            />
            <View>
              <CustomText text={item.PlayersName} color="white" size={24} />
              <CustomText text={item.PlayersPosts} color="#9EABB8" size={22} />
            </View>
          </View>
        )}
      />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CustomButton
          text={'Start Match'}
          bgColor="white"
          borderRadius={sizeHelper.calWp(50)}
          textColor={colors.primary}
        />
      </View>
    </ScreenLayout>
  );
};
export default MatcPrep;
