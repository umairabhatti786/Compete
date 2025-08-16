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
import { Notification, TournamentCard } from '../../../utils/Data';
import { colors } from '../../../utils/colors';
type NotificationsScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};
const TournamentsScreen = (props: NotificationsScreenProps) => {
  return (
    <ScreenLayout
      style={{
        backgroundColor: colors.background,
      }}
    >
      <CustomHeader
        arrow={images.white_back_arrow}
        text={'Account'}
        color={'white'}

      />
      <View
        style={{
          paddingTop: sizeHelper.calHp(50),
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            // width: '70%',
            gap: sizeHelper.calWp(20),
            alignSelf: 'flex-start',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              width: sizeHelper.calWp(160),
              height: sizeHelper.calHp(60),
              backgroundColor: '#293038',
              borderRadius: sizeHelper.calWp(90),
              gap: sizeHelper.calWp(20),
            }}
          >
            <CustomText text={'All'} color="white" size={22} />
            <Image
              source={images.down}
              style={{
                width: sizeHelper.calWp(45),
                height: sizeHelper.calWp(45),
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              width: sizeHelper.calWp(300),
              height: sizeHelper.calHp(60),
              backgroundColor: '#293038',
              borderRadius: sizeHelper.calWp(90),
              gap: sizeHelper.calWp(20),
            }}
          >
            <CustomText text={'Tournaments'} color="white" size={22} />
            <Image
              source={images.down}
              style={{
                width: sizeHelper.calWp(45),
                height: sizeHelper.calWp(45),
              }}
            />
          </View>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              width: sizeHelper.calWp(200),
              height: sizeHelper.calHp(60),
              backgroundColor: '#293038',
              borderRadius: sizeHelper.calWp(90),
              gap: sizeHelper.calWp(18),
            }}
          >
            <CustomText text={'Teams'} color="white" size={22} />
            <Image
              source={images.down}
              style={{
                width: sizeHelper.calWp(45),
                height: sizeHelper.calWp(45),
              }}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          data={Notification}
          keyExtractor={item => item.id.toString()}
          style={{
            paddingTop: sizeHelper.calHp(50),
          }}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: 'row',
                paddingBottom: sizeHelper.calHp(50),
                alignItems: 'center',
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  gap: sizeHelper.calWp(20),
                  flex: 1,
                }}
              >
                <Image
                  source={item.NotificationPic}
                  style={{
                    width: sizeHelper.calWp(100),
                    height: sizeHelper.calWp(100),
                  }}
                />
                <View
                  style={{
                    gap: sizeHelper.calWp(10),
                  }}
                >
                  <CustomText
                    text={item.NotificationName}
                    color="white"
                    size={24}
                  />
                  <CustomText
                    text={item.NotificationPosts}
                    color="#9EABB8"
                    size={22}
                  />
                </View>
              </View>
              <CustomText
                text={item.NotificationTime}
                color="#9EABB8"
                size={22}
              />
            </View>
          )}
        />
      </View>
    </ScreenLayout>
  );
};
export default TournamentsScreen;
