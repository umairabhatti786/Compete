import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ScreenLayout from '../../../components/ScreenLayout';
import CustomHeader from '../../../components/CustomHeader/CustomHeader';
import images from '../../../assets/images';
import CustomText from '../../../components/CustomText';
import sizeHelper from '../../../utils/Helpers';
import CustomButton from '../../../components/CustomBotton';
import { appStyles } from '../../../utils/GlobalStyles';
import { colors } from '../../../utils/colors';
import CustomInput from '../../../components/CustomInput';
import DropDown from '../../../components/DropDown';
import CustomSwitchToggle from '../../../components/CustomSwitchToggle';
import { fonts } from '../../../utils/Fonts';
type NotificationsScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};
const BanScreen = (props: NotificationsScreenProps) => {
  const [selectedType, setSelectedType] = useState('');
  const [isAllowNtionalTeam, setIsAllowNtionalTeam] = useState(false);

  const TimeData = [
    { label: 'Member', value: 'Member', id: 1 },
    { label: 'Captain', value: 'Captain', id: 2 },
    { label: 'MVP', value: 'MVP', id: 3 },
  ];

  return (
    <ScreenLayout
      style={{
        backgroundColor: colors.background,
        gap: sizeHelper.calHp(30),
        paddingBottom:sizeHelper.calHp(70)
      }}
    >
      <CustomHeader
        arrow={images.cross_arrow}
        text={'Ban'}
        color={colors.white}
        onPress={() => props.navigation.goBack()}
      />
      <View
        style={{
          flex: 1,
          gap: sizeHelper.calHp(30),
          paddingTop: sizeHelper.calHp(30),
        }}
      >
        <View style={{gap:sizeHelper.calHp(20)}}>
          <CustomText
            text={'Ban reason'}
            size={27}
            fontWeight={'700'}
            fontfam={fonts.bold}
            color={colors.white}
          />

          <CustomInput
            placeholder={'Enter ban reason'}
            color={colors.white}
            textAlignVertical={"top"}
            labelColor={colors.white}
            Inputheight={200}
            marginHorizontal={-1}
            placeholderTextColor={colors.placeholderColor}
            bg={colors.input_background}
            bdc={'transparent'}
            value={''}
          />
        </View>

        <View style={{gap:sizeHelper.calHp(20)}}>
          <CustomText
            text={'Ban duration'}
            size={27}
        
            fontWeight={'700'}
            fontfam={fonts.bold}
            color={colors.white}
          />

          <DropDown
          setValue={setSelectedType}
            placeholder={"Duration"}
          value={selectedType}
          onSelect={(it: any) => {
            setSelectedType(it?.value);
          }}
          data={TimeData.map((item, _index) => {
            return {
              id: item?.id,
              label: item?.label,
              value: item?.value,
            };
          })}
        />
        </View>
       
       
      </View>

      <CustomButton
        bgColor={colors.white}
        textColor={colors.primary}
        borderRadius={999}
        text={'Ban'}
      />

     
    </ScreenLayout>
  );
};
export default BanScreen;
