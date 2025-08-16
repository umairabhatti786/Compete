import React, { useEffect } from 'react';
import {
  FlatList,
  Image,
  ScrollView,
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
import { colors } from '../../../utils/colors';
import { fonts } from '../../../utils/Fonts';
import { TeamData } from '../../../utils/Data';
import CustomLine from '../../../components/CustomLine';
import CustomButton from '../../../components/CustomBotton';
type NotificationsScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};
const TournamentDetail = (props: NotificationsScreenProps) => {
  return (
    <ScreenLayout
      style={{
        backgroundColor: colors.background,
        padding: sizeHelper.calWp(0),
        paddingBottom: sizeHelper.calWp(50),
        gap: sizeHelper.calHp(30),
      }}
    >
      <View
        style={{
          paddingTop: sizeHelper.calHp(40),
          paddingHorizontal: sizeHelper.calWp(40),
        }}
      >
        <CustomHeader
          arrow={images.white_back_arrow}
          text={'Tournament Details'}
          color={'white'}
          gap={1}
          onPress={() => props.navigation.goBack()}
        />
      </View>
      <ScrollView>
        <View
          style={{
            alignItems: 'center',
          }}
        >
          <Image source={images.champions_league} />
        </View>
        <View
          style={{
            padding: sizeHelper.calWp(20),
            marginTop: sizeHelper.calHp(20),
            gap:sizeHelper.calHp(30)
          }}
        >
          <CustomText
            text={'Champions League'}
            color={colors.white}
            size={36}
            fontfam={fonts.bold}
            fontWeight={'700'}
          />
        
            <CustomText
              text={
                'Tournament Rules: 11v11, 90 minutes, group stage followed by knockout rounds. Teams must have a minimum of 18 players and a maximum of 25.'
              }
              color={colors.white}
              size={24}
            />

          <CustomText
            text={'Teams'}
            color={colors.white}
            size={30}
            fontfam={fonts.bold}
            fontWeight={'700'}
          />
          
          <FlatList
            data={TeamData}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
              onPress={()=>props?.navigation.navigate("SubmitMatchResultScreen")}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: sizeHelper.calWp(20),
                  paddingBottom: sizeHelper.calHp(20),
                }}
              >
                <Image
                  source={item.TeamLogo}
                  style={{
                    width: sizeHelper.calWp(80),
                    height: sizeHelper.calWp(80),
                  }}
                />
                <CustomText
                  text={item.TeamTitle}
                  color={colors.white}
                  size={26}
                />
              </TouchableOpacity>
            )}
          />
          <View>
            <View
              style={{
                paddingTop: sizeHelper.calHp(30),
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <CustomLine width={'25%'} height={0.9} />
              <CustomLine width={'66%'} height={0.9} />
            </View>
            <View
              style={{
                marginTop: sizeHelper.calHp(30),
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '55%',
              }}
            >
              <View
                style={{
                  width: sizeHelper.calWp(150),
                }}
              >
                <CustomText text={'Date'} size={25} color="#9EABB8" />
                <CustomText
                  text={'July 15, 2024'}
                  size={25}
                  color="#FFF"
                  lineHeight={sizeHelper.calWp(38)}
                  marginT={sizeHelper.calHp(10)}
                />
              </View>
              <View
                style={{
                  width: sizeHelper.calWp(150),
                }}
              >
                <CustomText text={'Mode'} size={25} color="#9EABB8" />
                <CustomText
                  text={'11v11'}
                  size={25}
                  color="#FFF"
                  lineHeight={sizeHelper.calWp(38)}
                  marginT={sizeHelper.calHp(10)}
                />
              </View>
            </View>
            <View
              style={{
                paddingTop: sizeHelper.calHp(50),
              }}
            >
              <CustomLine width={'25%'} height={0.9} />
            </View>
            <View
              style={{
                marginTop: sizeHelper.calHp(30),
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '55%',
                alignItems: 'center',
              }}
            >
              <View
                style={{
                  width: sizeHelper.calWp(175),
                }}
              >
                <CustomText text={'Status'} size={25} color="#9EABB8" />
                <CustomText
                  text={'Open for Registration'}
                  size={25}
                  color="#FFF"
                  lineHeight={sizeHelper.calWp(38)}
                  marginT={sizeHelper.calHp(10)}
                />
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: sizeHelper.calHp(50),
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            gap: sizeHelper.calWp(28),
          }}
        >
          <CustomButton
            text={'Register Team'}
            textColor={colors.primary_black}
            bgColor={colors.white}
            width={'45%'}
            onPress={()=>props.navigation.navigate("CreateTournamentScreen")}
            height={sizeHelper.calHp(70)}
            fontWeight="700"
            borderRadius={sizeHelper.calWp(50)}
          />
          <CustomButton
            text={'Register Player'}
            textColor={colors.white}
            onPress={()=>props.navigation.navigate("ScheduleScreen")}
            height={sizeHelper.calHp(70)}
            bgColor={'#293038'}
            width={'45%'}
            fontWeight="700"
            borderRadius={sizeHelper.calWp(50)}
          />
        </View>
      </ScrollView>
    </ScreenLayout>
  );
};
export default TournamentDetail;
