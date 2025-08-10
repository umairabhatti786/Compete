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
import images from '../../assets/images';
import { fonts } from '../../utils/Fonts';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

const CustomHeader = ({
  arrow,
  text,
  mr,
  onPress,
}: any) => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.HandleContainer}>
        <TouchableOpacity onPress={()=>onPress() || navigation.goBack()}>
          <Image source={arrow} style={styles.back_icon} />
        </TouchableOpacity>
        <CustomText
          text={text}
          fontfam={fonts.medium}
          size={30}
          color={colors.primary}
          fontWeight={'600'}
          textAlign={'center'}
          marginR={mr}
        />
        <View style={{ width: sizeHelper.calWp(50) }} />
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
  back_icon: {
    width: sizeHelper.calWp(53),
    height: sizeHelper.calWp(53),
  },
});

export default CustomHeader;
