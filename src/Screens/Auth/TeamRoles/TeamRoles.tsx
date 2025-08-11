import React, { useEffect } from 'react';
import {
    FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ScreenLayout from '../../../components/ScreenLayout';
import CustomHeader from '../../../components/CustomHeader/CustomHeader';
import images from '../../../assets/images';
import CustomText from '../../../components/CustomText';
import sizeHelper from '../../../utils/Helpers';
import CustomButton from '../../../components/CustomBotton';
import { Members, Roles } from '../../../utils/Data';
import { colors } from '../../../utils/colors';
type NotificationsScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};
const TeamRoles = (props: NotificationsScreenProps) => {
  return (
    <ScreenLayout
      style={{
        backgroundColor: '#121417'
      }}
    >
      <CustomHeader
        arrow={images.white_back_arrow}
        text={'Team Roles'}
        color={'white'}
        gap={1}
        textwidth={70}
        imgWidth={80}
        imgHeight={80}
        size={26}   
        fontWeight={'700'}
        seprateViewWidth={sizeHelper.calWp(70)}
        onPress={() => props.navigation.goBack()}
      />
        <FlatList
      data={Roles}
      keyExtractor={item => item.id.toString()}
      style={{
        paddingTop: sizeHelper.calHp(50)
      }}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            gap: sizeHelper.calWp(20),
            paddingBottom: sizeHelper.calHp(50),
            alignItems:'center'
          }}
          onPress={()=>props.navigation.navigate('Lineup')}
          >
          <Image source={item.MembersPic} style={{
            width: sizeHelper.calWp(100),
            height: sizeHelper.calWp(100)
          }} />
          <View>
            <CustomText
              text={item.MembersName}
              color='white'
              size={24} />
            <CustomText
              text={item.MembersPosts}
              color='#9EABB8'
              size={22} />
          </View>
      </TouchableOpacity>
      )
    }
    />
    </ScreenLayout>
  )
    ;
};
export default TeamRoles;
