import React, { useEffect } from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import sizeHelper from '../../../utils/Helpers';
import CustomText from '../../../components/CustomText';
import { fonts } from '../../../utils/Fonts';
import images from '../../../assets/images';
import CustomButton from '../../../components/CustomBotton';
import { SpotlightData, TournamentsData } from '../../../utils/Data';
import { colors } from '../../../utils/colors';
type HostingScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};
const HomeScreen = (props: HostingScreenProps) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          //   marginTop: sizeHelper.calHp(30),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '56%',
          alignSelf: 'flex-end',
          paddingRight: sizeHelper.calWp(36),
          paddingTop: sizeHelper.calHp(60),
        }}
      >
        <CustomText
          text={'Home'}
          size={26}
          fontWeight={'600'}
          fontfam={fonts.Semibold}
          color="white"
          textAlign={'center'}
        />
        <Image
          source={images.white_search}
          style={{
            width: sizeHelper.calWp(45),
            height: sizeHelper.calWp(45),
            alignSelf: 'flex-end',
          }}
        />
      </View>
      <ScrollView>
        <View
          style={{
            marginTop: sizeHelper.calHp(30),
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image source={images.stadium} />
          <View
            style={{
              gap: sizeHelper.calWp(70),
              position: 'absolute',
              bottom: sizeHelper.calWp(40),
              paddingHorizontal: sizeHelper.calWp(35),
            }}
          >
            <View
              style={{
                gap: sizeHelper.calWp(18),
              }}
            >
              <CustomText
                text={'Join the Ultimate Football Tournament'}
                size={50}
                color="white"
                fontWeight={'700'}
                lineHeight={sizeHelper.calWp(80)}
              />
              <CustomText
                text={
                  'Compete for glory and prizes in our biggest event of the year. Sign up now to secure your spot!'
                }
                color="white"
                lineHeight={sizeHelper.calWp(30)}
              />
            </View>
            <CustomButton
              bgColor="white"
              textColor="black"
              width={'38%'}
              text={'Register Now'}
              height={sizeHelper.calHp(70)}
              fontSize={22}
              borderRadius={sizeHelper.calWp(60)}
              fontWeight="700"
            />
          </View>
        </View>
        <View style={{ flex: 1, gap: sizeHelper.calHp(30) }}>
          <CustomText
            text={'Upcoming Tournaments'}
            size={30}
            color="white"
            marginT={sizeHelper.calHp(30)}
            marginL={sizeHelper.calWp(25)}
            fontWeight={'700'}
          />

          <FlatList
            data={TournamentsData}
            keyExtractor={item => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              gap: sizeHelper.calWp(20),
              paddingLeft: sizeHelper.calWp(35),
              paddingRight: sizeHelper.calWp(35),
            }}
            renderItem={({ item }) => (
              <View>
                <View
                  style={{
                    width: sizeHelper.calWp(350),
                    height: sizeHelper.calWp(180),
                    borderRadius: sizeHelper.calWp(25),
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    source={item.leagueImage}
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                  />
                </View>

                <View
                  style={{
                    width: sizeHelper.calWp(270),
                    marginTop: sizeHelper.calWp(20),
                    gap: sizeHelper.calWp(10),
                  }}
                >
                  <CustomText
                    text={item.title}
                    color="white"
                    size={22}
                    lineHeight={sizeHelper.calWp(35)}
                  />
                  <CustomText text={item.startIn} color="#9EABB8" size={18} />
                </View>
              </View>
            )}
          />
          <CustomText
            text={'Spotlight Teams'}
            size={30}
            color={colors.white}
            marginL={sizeHelper.calWp(25)}
            fontWeight={'700'}
          />
          <FlatList
            data={SpotlightData}
            keyExtractor={item => item.id.toString()}
            horizontal={true}
            style={{
              marginBottom: sizeHelper.calHp(80),
              paddingTop: sizeHelper.calHp(30),
            }}
            renderItem={({ item }) => (
              <View
                style={{
                  alignItems: 'center',
                }}
              >
                <Image
                  source={item.pic}
                  style={{
                    width: sizeHelper.calWp(200),
                    height: sizeHelper.calWp(200),
                  }}
                />
                <View
                  style={{
                    width: sizeHelper.calWp(270),
                    marginTop: sizeHelper.calWp(20),
                    gap: sizeHelper.calWp(10),
                    alignItems: 'center',
                  }}
                >
                  <CustomText
                    text={item.name}
                    color="white"
                    size={22}
                    lineHeight={sizeHelper.calWp(35)}
                  />
                  <CustomText text={item.ranking} color="#9EABB8" size={18} />
                </View>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121417',
  },
});
export default HomeScreen;
