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
import { Lineup, Members } from '../../../utils/Data';
import { colors } from '../../../utils/colors';
type NotificationsScreenProps = {
    navigation: NativeStackNavigationProp<any>;
};
const MatcPrep = (props: NotificationsScreenProps) => {
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
            <View>

                <CustomText
                    text={"Match Details"}
                    fontWeight={"700"}
                    size={36}
                    color='white'
                    marginT={sizeHelper.calHp(50)}
                />
                <View
                    style={{
                        flexDirection: 'row',
                        gap: sizeHelper.calWp(30),
                        paddingTop: sizeHelper.calHp(50),
                        paddingBottom: sizeHelper.calHp(50),
                        alignItems: 'center'
                    }}
                >
                    <Image source={images.match_stadium} style={{
                        width: sizeHelper.calWp(100),
                        height: sizeHelper.calWp(100)
                    }} />
                    <View>
                        <CustomText
                            text={"FC Barcelona vs. Real Madrid"}
                            color='white'
                            size={24} />
                        <CustomText
                            text={"10/20/2024"}
                            color='#9EABB8'
                            size={22} />
                    </View>
                </View>
            </View>
            <CustomText
                text={"Lineup"}
                fontWeight={"700"}
                size={36}
                color='white'
                marginT={sizeHelper.calHp(20)}
            />
            <FlatList
                data={Lineup}
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
                        <Image source={item.PlayersPic} style={{
                            width: sizeHelper.calWp(100),
                            height: sizeHelper.calWp(100)
                        }} />
                        <View>
                            <CustomText
                                text={item.PlayersName}
                                color='white'
                                size={24} />
                            <CustomText
                                text={item.PlayersPosts}
                                color='#9EABB8'
                                size={22} />
                        </View>
                    </View>
                )
                }
            />
            <View 
            style={{
                flex:1,
                alignItems:'center',
                justifyContent:'center'
            }}
            >
                <CustomButton 
                text={"Start Match"}
                bgColor='white'
                borderRadius={sizeHelper.calWp(50)}
                textColor='black'
                fontSize={26}
                fontWeight='700'
                />
            </View>
        </ScreenLayout >
    )
        ;
};
export default MatcPrep;
