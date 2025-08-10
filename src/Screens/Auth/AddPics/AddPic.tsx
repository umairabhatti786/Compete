import React, { useEffect } from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import ScreenLayout from '../../../components/ScreenLayout';
import sizeHelper from '../../../utils/Helpers';
import CustomText from '../../../components/CustomText';
import { colors } from '../../../utils/colors';
import { fonts } from '../../../utils/Fonts';
import images from '../../../assets/images';
import CustomButton from '../../../components/CustomBotton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type HostingScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};
const AddPics = (props: HostingScreenProps) => {
  return (
    <ScreenLayout>
      <View
        style={{
          paddingTop: sizeHelper.calHp(100),
          flex: 1,
        }}
      >
        <CustomText
          text={'Add a profile picture'}
          size={36}
          fontfam={fonts.Semibold}
          fontWeight={'600'}
        />
        <CustomText
          text={"Let's make your profile unique by adding a picture"}
          size={18}
          color={colors.primary + '60'}
        />
        <View style={{ flex: 1, paddingTop: sizeHelper.calHp(170) }}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
            }}
          >
            <Image
              source={images.profile}
              style={styles.profile_img}
            />
            <TouchableOpacity
              style={styles.camera_absolute}
            >
              <Image
                source={images.camera}
                style={styles.camera_img}
              />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
        <View
          style={styles.bottomContainer}
        >
          <View
            style={styles.bottomInner}
          >
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
              onPress={() => props.navigation.navigate('ChooseLanguage')}
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
  camera_absolute:{
    backgroundColor: 'black',
    position: 'absolute',
    padding: sizeHelper.calWp(18),
    borderRadius: sizeHelper.calWp(100),
    alignItems: 'center',
    justifyContent: 'center',
    bottom: sizeHelper.calHp(20),
    right: sizeHelper.calWp(40),
  },

  bottomContainer: {
    justifyContent: 'flex-end',
    marginBottom: sizeHelper.calHp(50),
  },
  bottomInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  profile_img:{
    width: sizeHelper.calWp(300),
    height: sizeHelper.calWp(300),
  },
  camera_img:{
    width: sizeHelper.calWp(25),
    height: sizeHelper.calWp(25),
  }
});
export default AddPics;
