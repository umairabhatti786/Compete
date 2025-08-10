import React, { useEffect } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ScreenLayout from '../../../components/ScreenLayout';
import sizeHelper from '../../../utils/Helpers';
import CustomText from '../../../components/CustomText';
import { colors } from '../../../utils/colors';
import CustomInput from '../../../components/CustomInput';
import images from '../../../assets/images';
import { FavGameData } from '../../../utils/Data';
import FavoriteGameCard from '../../../components/FavoriteGame/FavoriteGameCard';
import CustomButton from '../../../components/CustomBotton';
import { fonts } from '../../../utils/Fonts';

type HostingScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};
const FavGames = (props: HostingScreenProps) => {
 

  return (
    <ScreenLayout style={{ backgroundColor: '#F6F6F6' }}>
      <View
        style={{
          paddingTop: sizeHelper.calHp(100),
          flex: 1,
        }}
      >
        <CustomText
          text={'What are your favorite Game?'}
          size={36}
          fontWeight={'700'}
        />
        <CustomText
          text={'Select 1 50 5 games '}
          size={18}
          color={colors.primary + '60'}
          marginT={sizeHelper.calHp(15)}
        />
        <View
          style={{
            gap: sizeHelper.calWp(30),
            paddingTop:sizeHelper.calHp(30)
          }}
        >
          <CustomInput
            placeholder={'Search game here'}
            leftImage={images.search}
            bg={colors.white}
            Size={14}
            color={'#A6A9AB'}
            bdc={'#D4DCE2'}
            mli={sizeHelper.calHp(10)}
          />
          <View
            style={{
              gap: sizeHelper.calWp(30),
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                flexWrap: 'wrap',
                gap: sizeHelper.calWp(20),
              }}
            >
              {FavGameData.map((it, ind) => {
                return (
                  <FavoriteGameCard
                    key={ind.toString()}
                    img={it?.img}
                    title={it.title}
                  />
                );
              })}
            </View>
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <View style={styles.bottomInner}>
          <CustomButton
              text={'Back'}
              fontSize={23}
              fontWeight='500'
              height={sizeHelper.calHp(75)}
              bgColor={colors.white}
              borderRadius={10}
              textColor={colors.primary}
              fontfam={fonts.regular}
              width={'25%'}
              onPress={() => props.navigation.goBack()}
            />
            <CustomButton
              text={'Next'}
              width={'70%'}
              onPress={() => props.navigation.navigate('Community')}
            />
          </View>
        </View>
      
      </View>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    padding: sizeHelper.calWp(36),
  },

  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: sizeHelper.calHp(50),
  },
  bottomInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
});
export default FavGames;
