import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { useEffect } from 'react';
import { colors } from '../../../utils/colors';
import sizeHelper from '../../../utils/Helpers';
import images from '../../../assets/images';

const Splash = ({ navigation }: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'WelComeScreen' }],
        }),
      );
    }, 2000);
  }, []);

  return (
    <>
      {/* <ScreenLayout style={styles.main}>
        
       
      </ScreenLayout> */}
      <View
        style={{
          flex: 1,
          backgroundColor: colors.white,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          style={{
            width: sizeHelper.calWp(300),
            height: sizeHelper.calWp(300),
          }}
          source={images.main_logo}
          resizeMode="contain"
        />
      </View>
    </>
  );
};
export default Splash;

const styles = StyleSheet.create({
  layout_img: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // position: "absolute",
    // top: verticalScale(-100),
    // opacity: 0.8,
  },
});
