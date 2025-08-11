import React, { useState } from 'react';
import {
    FlatList,
    Image,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import sizeHelper from '../../../utils/Helpers';
import CustomText from '../../../components/CustomText';
import { fonts } from '../../../utils/Fonts';
import { colors } from '../../../utils/colors';
import images from '../../../assets/images';
import ScreenLayout from '../../../components/ScreenLayout';
import { Club } from '../../../utils/Data';
import CustomHeader from '../../../components/CustomHeader/CustomHeader';
import CustomButton from '../../../components/CustomBotton';
type NotificationsScreenProps = {
    navigation: NativeStackNavigationProp<any>;
};
const tab = ["4-3-3", "4-4-2", "3-5-2"]
const Lineup = (props: NotificationsScreenProps) => {
    const [activeTab, setactiveTab] = useState('4-3-3')
    const renderTab = () => {
        if (activeTab === "4-3-3") {
            return (
                <View
                style={{
                    alignItems:'center',
                    justifyContent:'center',
                    marginTop:sizeHelper.calHp(225),
                }}
                >
                    <Image 
                    source={images.lineup}
                    style={{
                        width:sizeHelper.calWp(650),
                        borderRadius:sizeHelper.calWp(25)
                    }}
                    />
                    <View
                style={{
                    top:sizeHelper.calHp(520),
                    flexDirection:'row',
                    alignItems:'center',
                    alignSelf:'center',
                    gap:sizeHelper.calWp(28)
                }}
                >
                    <CustomButton 
                    text={'Save'}
                    textColor={colors.primary_black}
                    bgColor={colors.white}
                    width={"50%"}
                    fontSize={24}
                    borderRadius={sizeHelper.calWp(50)}
                    onPress={()=>props.navigation.navigate('MatcPrep')}
                    />
                    <CustomButton 
                    text={'Reset'}
                    textColor={colors.white}
                    bgColor={'#293038'}
                    width={"50%"}
                    fontSize={24}
                    borderRadius={sizeHelper.calWp(50)}
                    />
                </View>
                </View>
            )
        }
        if (activeTab === "4-4-2") {
            return (
                <View
                style={{
                    alignItems:'center',
                    justifyContent:'center',
                    marginTop:sizeHelper.calHp(225),
                }}
                >
                    <Image 
                    source={images.lineup}
                    style={{
                        width:sizeHelper.calWp(650),
                        borderRadius:sizeHelper.calWp(25)
                    }}
                    />
                    <View
                style={{
                    top:sizeHelper.calHp(520),
                    flexDirection:'row',
                    alignItems:'center',
                    alignSelf:'center',
                    gap:sizeHelper.calWp(28)
                }}
                >
                    <CustomButton 
                    text={'Save'}
                    textColor={colors.primary_black}
                    bgColor={colors.white}
                    width={"50%"}
                    fontSize={24}
                    borderRadius={sizeHelper.calWp(50)}
                    />
                    <CustomButton 
                    text={'Reset'}
                    textColor={colors.white}
                    bgColor={'#293038'}
                    width={"50%"}
                    fontSize={24}
                    borderRadius={sizeHelper.calWp(50)}
                    />
                </View>
                </View>
            )
        }
        if (activeTab === "3-5-2") {
            return (
                <View
                style={{
                    alignItems:'center',
                    justifyContent:'center',
                    marginTop:sizeHelper.calHp(225),
                }}
                >
                    <Image 
                    source={images.lineup}
                    style={{
                        width:sizeHelper.calWp(650),
                        borderRadius:sizeHelper.calWp(25)
                    }}
                    />
                    <View
                style={{
                    top:sizeHelper.calHp(520),
                    flexDirection:'row',
                    alignItems:'center',
                    alignSelf:'center',
                    gap:sizeHelper.calWp(28)
                }}
                >
                    <CustomButton 
                    text={'Save'}
                    textColor={colors.primary_black}
                    bgColor={colors.white}
                    width={"50%"}
                    fontSize={24}
                    borderRadius={sizeHelper.calWp(50)}
                    />
                    <CustomButton 
                    text={'Reset'}
                    textColor={colors.white}
                    bgColor={'#293038'}
                    width={"50%"}
                    fontSize={24}
                    borderRadius={sizeHelper.calWp(50)}
                    />
                </View>
                </View>
            )
        }
    }
    return (
        <ScreenLayout
            style={{
                backgroundColor: '#121417',
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
            <View
                style={{
                    marginTop: sizeHelper.calHp(40)
                }}
            >
                <CustomText
                    text={"Formation"}
                    size={40}
                    color='white'
                    fontWeight={"700"}
                />
                <View style={styles.Inner}>
                    <View style={styles.tabRow}>
                        {
                            tab.map((tab) => (
                                <TouchableOpacity
                                    key={tab}
                                    onPress={() => setactiveTab(tab)}
                                    style={styles.tabButton}
                                >

                                    <View style={[styles.nonbg, activeTab === tab && styles.bg]}>

                                        <Text style={[styles.tabText, activeTab === tab && styles.activeText]}>
                                            {tab}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                    {renderTab()}
                </View>
            </View>
        </ScreenLayout>
    );
};
const styles = StyleSheet.create({

    Inner: {
        flex: 1,
        borderTopLeftRadius: sizeHelper.calWp(60),
        borderTopRightRadius: sizeHelper.calWp(60),
        marginTop: sizeHelper.calHp(40)
    },
    tabButton: {
        alignItems: 'center',
    },
    tabRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: sizeHelper.calHp(75),
        width: '100%',
        backgroundColor: '#293038',
        padding: sizeHelper.calWp(20),
        borderRadius: sizeHelper.calWp(50)
    },
    bg: {
        backgroundColor: '#121417',
        borderRadius: sizeHelper.calWp(50),
        width: sizeHelper.calWp(225),
        height: sizeHelper.calHp(60),
        flexDirection: 'row',
        gap: sizeHelper.calWp(20),
        alignItems: 'center',
        justifyContent: 'center',

    },
    nonbg: {
        width: sizeHelper.calWp(200),
        height: sizeHelper.calHp(80),
        flexDirection: 'row',
        gap: sizeHelper.calWp(20),
        alignItems: 'center',
        justifyContent: 'center',

    },
    tabText: {
        fontSize: sizeHelper.calWp(26),
        color: '#9EABB8',
    },
    activeText: {
        color: colors.white,
        fontWeight: 'bold',

    },
    tabRowView: {
        borderWidth: 1,
        borderRadius: sizeHelper.calWp(50),
        marginTop: sizeHelper.calHp(25),
        // alignItems:'center',
        // justifyContent:'center'

    }
});

export default Lineup;
