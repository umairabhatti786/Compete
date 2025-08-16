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
        text={'Notifications'}
        color={colors.white}

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
          <TouchableOpacity
            style={styles.filterContainer}
          >
            <CustomText text={'All'} color="white" size={22} />
            <Image
              source={images.down}
              style={{
                width: sizeHelper.calWp(42),
                height: sizeHelper.calWp(42),
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.filterContainer}
          >
            <CustomText text={'Tournaments'} color="white" size={22} />
            <Image
              source={images.down}
              style={{
                width: sizeHelper.calWp(42),
                height: sizeHelper.calWp(42),
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.filterContainer}
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
          contentContainerStyle={{gap:sizeHelper.calHp(40)}}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  gap: sizeHelper.calWp(20),
                  flex: 1,
                  alignItems:"center"
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
                    gap: sizeHelper.calWp(5),
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

const styles=StyleSheet.create({

  filterContainer:{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal:sizeHelper.calWp(23),
              paddingVertical:sizeHelper.calHp(10),
             
              backgroundColor: '#293038',
              borderRadius: sizeHelper.calWp(90),
              gap: sizeHelper.calWp(20),
            }
})
