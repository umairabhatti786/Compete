import React, { useEffect } from 'react';
import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ScreenLayout from '../../../components/ScreenLayout';
import sizeHelper from '../../../utils/Helpers';
import CustomText from '../../../components/CustomText';
import { colors } from '../../../utils/colors';
import CustomInput from '../../../components/CustomInput';
import images from '../../../assets/images';
import CommunityCard from '../../../components/Community/CommunityCard';
import CustomButton from '../../../components/CustomBotton';
import { fonts } from '../../../utils/Fonts';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type HostingScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};
const Community = (props: HostingScreenProps) => {
  return (
    <>
      <ScreenLayout style={{ backgroundColor: '#F6F6F6' }}>
        <View
          style={{
            paddingTop: sizeHelper.calHp(100),
            flex: 1,
          }}
        >
          <CustomText text={'Join a community'} size={36} fontWeight={'700'} />
          <CustomText
            text={
              'Join a community to play with your friends and meet new players'
            }
            size={18}
            color={colors.primary + '60'}
            marginT={sizeHelper.calHp(15)}
          />
          <View
            style={{
              gap: sizeHelper.calWp(40),
              paddingTop: sizeHelper.calHp(20),
            }}
          >
            <CustomInput
              placeholder={'Search game here'}
              leftImage={images.search}
              bg={'white'}
              Size={14}
              bw={0.5}
              imgWidth={sizeHelper.calWp(40)}
              mli={sizeHelper.calHp(10)}
              keyboard={'email-address'}
              Inputheight={90}
            />

            <View
              style={{
                gap: sizeHelper.calWp(30),
              }}
            >
              <FlatList
                data={[1, 2]}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                  gap: sizeHelper.calWp(20),
                  paddingBottom: sizeHelper.calHp(600),
                }}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }: any) => {
                  return (
                    <>
                      <CommunityCard />
                    </>
                  );
                }}
              />
            </View>
          </View>
        </View>
      </ScreenLayout>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomInner}>
          <CustomButton
            text={'Back'}
            fontWeight="500"
            height={sizeHelper.calHp(75)}
            bgColor={colors.white}
            borderRadius={10}
            textColor={colors.primary}
            fontfam={fonts.regular}
            width={'25%'}
            onPress={() => props.navigation.goBack()}
          />

          <CustomButton
            text={'Finish'}
            width={'70%'}
            onPress={() => props.navigation.navigate('Tabs')}
          />
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  bottomContainer: {
    justifyContent: 'flex-end',
    paddingVertical: sizeHelper.calHp(50),
    position: 'absolute',
    width: '100%',
    bottom: 0,

    backgroundColor: '#F6F6F6',
  },
  bottomInner: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: sizeHelper.calHp(30),
  },
});
export default Community;
