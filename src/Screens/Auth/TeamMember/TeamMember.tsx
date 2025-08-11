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
import { Members } from '../../../utils/Data';
import { colors } from '../../../utils/colors';
type NotificationsScreenProps = {
    navigation: NativeStackNavigationProp<any>;
};
const TeamMember = (props: NotificationsScreenProps) => {
    return (
        <ScreenLayout
            style={{
                backgroundColor: '#121417'
            }}
        >
            <CustomHeader
                arrow={images.white_back_arrow}
                text={'Team Members'}
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
                data={Members}
                keyExtractor={item => item.id.toString()}
                style={{
                    paddingTop: sizeHelper.calHp(50)
                }}
                renderItem={({ item }) => (
                    <View
                        style={{
                            flexDirection: 'row',
                            gap: sizeHelper.calWp(20),
                            paddingBottom: sizeHelper.calHp(50),
                            alignItems: 'center'
                        }}
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
                    </View>
                )
                }
            />
            <TouchableOpacity
                style={{
                    width: '58%',
                    height: sizeHelper.calHp(100),
                    backgroundColor: colors.white,
                    borderRadius: sizeHelper.calWp(100),
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: sizeHelper.calWp(30),
                    alignSelf: 'flex-end',
                    marginBottom: sizeHelper.calHp(30)
                }}
                onPress={() => props.navigation.navigate("Tabs", {screen: "TeamStack",params: { screen: "TeamRoles" }})}        >
            <Image
                source={images.black_plus}
                style={{
                    width: sizeHelper.calWp(60),
                    height: sizeHelper.calWp(60)

                }}
            />
            <CustomText
                text={"Add Member"}
                color='black'
                size={26}
                fontWeight={"700"}
            />
        </TouchableOpacity>
    </ScreenLayout >
  )
;
};
export default TeamMember;
