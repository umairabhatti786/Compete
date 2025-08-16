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
  TextInput,
  Platform,
  KeyboardAvoidingView,
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
import ChatCard from '../../../components/ChatCard';
import { appStyles } from '../../../utils/GlobalStyles';
import CustomInput from '../../../components/CustomInput';
type NotificationsScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};
const TeamAlphaChatScreen = (props: NotificationsScreenProps) => {
  const chatData = [
    {
      id: 1,
      name: 'Coach Alex',
      profile_img: images.liam_harper,
      to: true,
      message:
        "Team,  let's  discuss  our  strategy  for  the  upcoming  match.  We  need  to  focus  on  our  defensive  line  and  quick  counter-attacks. ",
    },

    {
      id: 2,
      name: 'Coach Alex',
      profile_img: images.liam_harper,
      message:
        "I've  attached  the  game  plan.  Please  review  it  before  our  practice  session  tomorrow.",
    },
    {
      id: 3,
      name: 'Liam',
      profile_img: images.liam,
      from: true,
      message: 'Got  it,  Coach.  Will  review  the  plan  tonight.',
    },

    {
      id: 4,
      name: 'Coach Alex',
      profile_img: images.liam_harper,
      message:
        'Great!  Also,  remember  to  bring  your  A-game.  We  need  to  win  this  one!',
    },
  ];
  return (
    <ScreenLayout
      style={{
        backgroundColor: colors.background,
        gap: sizeHelper.calHp(30),
      }}
    >
      <CustomHeader
        arrow={images.white_back_arrow}
        text={'Team Alpha'}
        color={colors.white}
        onPress={() => props.navigation.goBack()}
      />
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : null}
          keyboardVerticalOffset={Platform.OS === "ios" ? 20 : 0} // Adjust as per your header height
        >

 
        

               <View
        style={{
          flex: 1,
        }}
      >
        <FlatList
          data={chatData}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            gap: sizeHelper.calHp(40),
            paddingTop: sizeHelper.calHp(35),
          }}
          showsHorizontalScrollIndicator={false}
          // renderItem={renderChats}
          renderItem={({ item, index }: any) => {
            return (
              <>
                <ChatCard
                  index={index}
                  from={item?.from}
                  // lastRenderedDate={lastRenderedDate}

                  item={item}
                />
              </>
            );
          }}
        />
        <View
          style={{
            ...appStyles.rowjustify,
            marginBottom: sizeHelper.calHp(30),
            gap: sizeHelper.calWp(30),
            height: sizeHelper.calHp(90),
          }}
        >
          <Image
            style={{
              width: sizeHelper.calWp(80),
              height: sizeHelper.calWp(80),
              borderRadius: sizeHelper.calWp(80),
            }}
            source={images.liam_harper}
          />
          <View
            style={{
              ...appStyles.rowjustify,
              backgroundColor: '#2B3036',
              flex: 1,
              borderRadius: sizeHelper.calWp(25),
              height: '100%',
              paddingHorizontal: sizeHelper.calWp(20),
            }}
          >
            <TextInput
              value={''}
              allowFontScaling={false} // Disable font scaling
              style={{
                fontSize: sizeHelper.calHp(23),
                // alignItems: "center",
                height: '100%',
                paddingLeft: sizeHelper.calWp(20),
                textAlign: 'left',
                // justifyContent: "center",
                paddingTop: Platform.OS == 'ios' ? '6%' : '0%',
                paddingVertical: 0, // Adjust as needed for centering
                fontFamily: fonts.regular,
                fontWeight: '500',
                color: colors.white,
              }}
              placeholder={'Message  Team Alpha'}
              multiline={true}
              placeholderTextColor={'#A3ABB2'}
              onChangeText={(txt: string) => {
                // setValue(txt);
              }}
              autoCapitalize="none"
            />

            <Image
              source={images.calander}
              style={{
                width: sizeHelper.calWp(40),
                height: sizeHelper.calWp(40),
              }}
              resizeMode={'contain'}
            />
          </View>

          {/* <CustomInput
        color={colors.white}
        placeholder={'Your  Email'}
        label=""
        placeholderTextColor={colors.placeholderColor}
        bg={colors.input_background}
        bdc={'transparent'}
        value={''}
      /> */}
        </View>
      </View>

    

                 </KeyboardAvoidingView>

   
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

export default TeamAlphaChatScreen;
