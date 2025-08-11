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
import { TournamentCard } from '../../../utils/Data';
type NotificationsScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};
const TournamentsScreen = (props: NotificationsScreenProps) => {
  return (
    <ScreenLayout
      style={{
        backgroundColor: '#121417'
      }}
    >
      <CustomHeader
        arrow={images.white_back_arrow}
        text={'Tournaments'}
        color={'white'}
        gap={1}
        textwidth={70}
        imgWidth={80}
        imgHeight={80}
        onPress={() => props.navigation.goBack()}
      />
      <View
        style={{
          paddingTop: sizeHelper.calHp(50)
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '70%',
            gap: sizeHelper.calWp(30)
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              width: sizeHelper.calWp(180),
              height: sizeHelper.calHp(60),
              backgroundColor: '#293038',
              borderRadius: sizeHelper.calWp(90),
              gap: sizeHelper.calWp(20)

            }}
          >
            <CustomText
              text={"Type"}
              color='white'
              size={22}
            />
            <Image
              source={images.down}
              style={{
                width: sizeHelper.calWp(45),
                height: sizeHelper.calWp(45)
              }} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              width: sizeHelper.calWp(180),
              height: sizeHelper.calHp(60),
              backgroundColor: '#293038',
              borderRadius: sizeHelper.calWp(90),
              gap: sizeHelper.calWp(20),

            }}
          >
            <CustomText
              text={"Data"}
              color='white'
              size={22}
            />
            <Image
              source={images.down}
              style={{
                width: sizeHelper.calWp(45),
                height: sizeHelper.calWp(45)
              }} />
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
              gap: sizeHelper.calWp(18)

            }}
          >
            <CustomText
              text={"Status"}
              color='white'
              size={22}
            />
            <Image
              source={images.down}
              style={{
                width: sizeHelper.calWp(45),
                height: sizeHelper.calWp(45)
              }} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={TournamentCard}
          keyExtractor={item => item.id.toString()}
          style={{
            paddingTop: sizeHelper.calHp(50)
          }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                gap: sizeHelper.calWp(20),
                paddingBottom: sizeHelper.calHp(50),
                alignItems: 'center'
              }}
            onPress={() => props.navigation.navigate('TournamentDetail')}

            >
              <Image source={item.Tournamentpic} style={{
                width: sizeHelper.calWp(100),
                height: sizeHelper.calWp(100)
              }} />
              <View
                style={{
                  gap: sizeHelper.calWp(10)
                }}
              >
                <CustomText
                  text={item.Tournamentname}
                  color='white'
                  size={24} />
                <CustomText
                  text={item.Tournamentranking}
                  color='#9EABB8'
                  size={22} />
              </View>
            </TouchableOpacity>
          )
          }
        />
      </View>
    </ScreenLayout>
  )
    ;
};
export default TournamentsScreen;
