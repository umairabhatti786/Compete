import React, { useEffect, useState } from 'react';
import {
  Image,
  ScrollView,
  Touchable,
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
import { appStyles } from '../../../utils/GlobalStyles';
import { colors } from '../../../utils/colors';
import CustomInput from '../../../components/CustomInput';
import DropDown from '../../../components/DropDown';
import CustomSwitchToggle from '../../../components/CustomSwitchToggle';
import { fonts } from '../../../utils/Fonts';
type NotificationsScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};
const SubmitMatchResultScreen = (props: NotificationsScreenProps) => {
  const [selectedType, setSelectedType] = useState('');
  const [isAllowNtionalTeam, setIsAllowNtionalTeam] = useState(false);
  const [selectedOutCome, setSelectedOutCome] = useState(-1);

  const TimeData = [
    { label: 'Member', value: 'Member', id: 1 },
    { label: 'Captain', value: 'Captain', id: 2 },
    { label: 'MVP', value: 'MVP', id: 3 },
  ];

  const MatchOutcomeData = [
    { id: 1, title: 'Team A Won' },
    { id: 2, title: 'Team B Won' },
    { id: 3, title: 'Draw' },
  ];
  const MatchOutcomeCard = ({ title, onPress, item }: any) => {
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
            borderColor: selectedOutCome == item?.id ? colors.white : '#40474F',
            borderRadius: sizeHelper.calWp(37),
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {selectedOutCome == item?.id && (
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
        text={'Submit Match Results'}
        color={colors.white}
        onPress={() => props.navigation.goBack()}
      />
      <ScrollView
        scrollEnabled={true}
        style={{
          paddingTop: sizeHelper.calHp(30),
        }}
        contentContainerStyle={{ gap: sizeHelper.calHp(40),paddingBottom:sizeHelper.calHp(30) }}
      >
        <CustomText
          text={'Match Details'}
          fontfam={fonts.bold}
          size={33}
          // style={{ paddingTop: sizeHelper.calHp(30) }}
          color={colors.white}
          fontWeight={'700'}
        />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: sizeHelper.calWp(20),
          }}
        >
          <View
            style={{
              width: sizeHelper.calWp(100),
              height: sizeHelper.calWp(100),
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.input_back,
              borderRadius: sizeHelper.calWp(15),
            }}
          >
            <Image
              source={images.football}
              style={{
                width: sizeHelper.calWp(50),
                height: sizeHelper.calWp(50),
              }}
            />
          </View>

          <View>
            <View
              style={{
                gap: sizeHelper.calWp(5),
              }}
            >
              <CustomText
                text={'Team A vs. Team B'}
                fontWeight={'600'}
                fontfam={fonts.medium}
                color={colors.white}
                size={24}
              />
              <CustomText text={'10/26/2024'} color="#9EABB8" size={22} />
            </View>
          </View>
        </View>

        <CustomText
          text={'Score Submission'}
          fontfam={fonts.bold}
          size={33}
          // style={{ paddingTop: sizeHelper.calHp(30) }}
          color={colors.white}
          fontWeight={'700'}
        />
        <View style={{ ...appStyles.rowjustify, width: '100%' }}>
          <CustomInput
            width={'45%'}
            placeholder={'Enter  score'}
            color={colors.white}
            labelColor={colors.white}
            label="Team A Score"
            marginHorizontal={-1}
            placeholderTextColor={colors.placeholderColor}
            bg={colors.input_background}
            bdc={'transparent'}
            value={''}
          />
          <CustomInput
            color={colors.white}
            placeholder={'Enter  score'}
            labelColor={colors.white}
            width={'45%'}
            label="Team B Score"
            marginHorizontal={-1}
            placeholderTextColor={colors.placeholderColor}
            bg={colors.input_background}
            bdc={'transparent'}
            value={''}
          />
        </View>

        <CustomText
          text={'Match Outcome'}
          fontfam={fonts.bold}
          size={33}
          color={colors.white}
          fontWeight={'700'}
        />
        <View style={{ gap: sizeHelper.calHp(20) }}>
          {MatchOutcomeData.map((item, index) => {
            return (
              <MatchOutcomeCard
                onPress={() => setSelectedOutCome(item?.id)}
                item={item}
                title={item?.title}
              />
            );
          })}
        </View>

        <CustomText
          text={'Proof of Match'}
          fontfam={fonts.bold}
          size={33}
          color={colors.white}
          fontWeight={'700'}
        />

        <Image
          source={images.proof_match}
          style={{
            width: '100%',
            height: sizeHelper.calHp(350),
            borderRadius: sizeHelper.calWp(25),
          }}
        />

        <CustomButton
          bgColor={colors.white}
          textColor={colors.primary}
          borderRadius={999}
          onPress={() => props.navigation.navigate('BanScreen')}
          text={'Submit Results'}
        />
      </ScrollView>
    </ScreenLayout>
  );
};
export default SubmitMatchResultScreen;
