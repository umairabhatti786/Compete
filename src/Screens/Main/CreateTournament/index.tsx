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
type NotificationsScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};
const CreateTournamentScreen = (props: NotificationsScreenProps) => {
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
      }}
    >
      <CustomHeader
        arrow={images.white_back_arrow}
        text={'Create Tournament'}
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
        <CustomInput
          placeholder={'Tournament  Name'}
          color={colors.white}
          label=""
          marginHorizontal={-1}
          placeholderTextColor={colors.placeholderColor}
          bg={colors.input_background}
          bdc={'transparent'}
          value={''}
        />
        <CustomInput
          color={colors.white}
          placeholder={'Date'}
          label=""
          marginHorizontal={-1}
          placeholderTextColor={colors.placeholderColor}
          bg={colors.input_background}
          bdc={'transparent'}
          value={''}
        />
        <DropDown
          setValue={setSelectedType}
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
        <View style={appStyles.rowjustify}>
          <CustomText
            text={'Allow National Teams'}
            size={25}
            color={colors.white}
          />
          <CustomSwitchToggle
            isToggle={isAllowNtionalTeam}
            setIsToggle={setIsAllowNtionalTeam}
          />
        </View>
      </View>

      <CustomButton
        bgColor={colors.white}
        textColor={colors.primary}
        borderRadius={999}
        onPress={() => props.navigation.navigate('BanScreen')}
        text={'Create Tournament'}
      />
    </ScreenLayout>
  );
};
export default CreateTournamentScreen;
