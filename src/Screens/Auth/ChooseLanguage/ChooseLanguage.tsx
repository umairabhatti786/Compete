import React, { useEffect } from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ScreenLayout from '../../../components/ScreenLayout';
import sizeHelper from '../../../utils/Helpers';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import CustomText from '../../../components/CustomText';
import { fonts } from '../../../utils/Fonts';
import { colors } from '../../../utils/colors';
import images from '../../../assets/images';
import CustomButton from '../../../components/CustomBotton';

type HostingScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};
const ChooseLanguage = (props: HostingScreenProps) => {
  return (
    <ScreenLayout>
      <View
        style={{
          paddingTop: sizeHelper.calHp(100),
          flex: 1,
        }}
      >
        <CustomText
          text={'Choose Language'}
          size={36}
          fontfam={fonts.Semibold}
          fontWeight={'600'}
        />
        <CustomText
          text={'Please select your proffered language'}
          size={18}
          color={colors.primary + '60'}
        />
        <View style={styles.flagContainer}>
          <Image
            source={images.england_flag}
            style={{
              width: sizeHelper.calWp(280),
              height: sizeHelper.calWp(280),
            }}
          />
          <Image
            source={images.france_flag}
            style={{
              width: sizeHelper.calWp(280),
              height: sizeHelper.calWp(280),
            }}
          />
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.bottomInner}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                width: '20%',
              }}
              onPress={() => props.navigation.goBack()}
            >
              <CustomText
                fontWeight={'600'}
                fontfam={fonts.medium}
                text={'Back'}
                size={23}
              />
            </TouchableOpacity>
            <CustomButton
              text={'Next'}
              width={'70%'}
              onPress={() => props.navigation.navigate('FavGames')}
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
    backgroundColor: 'white',
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
  flagContainer: {
    paddingTop: sizeHelper.calHp(80),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: sizeHelper.calWp(80),
  },
});
export default ChooseLanguage;
