import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { colors } from '../../utils/colors';
import CustomText from '../CustomText';
import sizeHelper from '../../utils/Helpers';
import { fonts } from '../../utils/Fonts';
import images from '../../assets/images';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

const CustomHeader = ({
  arrow,
  text,
  mr,
  onPress,
  color,
  imgWidth,
  imgHeight,
  size,
  seprateViewWidth,
  fontWeight,
  disableLeftSource,
  rightSource,
  onRightSource,
}: any) => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.HandleContainer}>
        {!disableLeftSource ? (
          <TouchableOpacity
            onPress={() => (onPress ? onPress() : navigation.goBack())}
          >
            <Image
              source={arrow || images.white_back_arrow}
              style={{
                width: sizeHelper.calWp(imgWidth || 53),
                height: sizeHelper.calWp(imgHeight || 50),
              }}
              // resizeMode="contain"
            />
          </TouchableOpacity>
        ) : (
          <View style={{ width: sizeHelper.calWp(50) }} />
        )}

        <CustomText
          text={text}
          fontfam={fonts.medium}
          size={size || 30}
          color={color || colors.primary}
          fontWeight={fontWeight || '600'}
          textAlign={'center'}
          marginR={mr}
        />

        {rightSource ? (
          <TouchableOpacity onPress={onRightSource}>
            <Image
              source={rightSource}
              style={{
                width: sizeHelper.calWp(imgWidth || 45),
                height: sizeHelper.calWp(imgHeight || 45),
                tintColor:colors.white,
              }}
            />
          </TouchableOpacity>
        ) : (
          <View style={{ width: seprateViewWidth || sizeHelper.calWp(50) }} />
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  HandleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: sizeHelper.calHp(42),
    justifyContent: 'space-between',
  },
});

export default CustomHeader;
