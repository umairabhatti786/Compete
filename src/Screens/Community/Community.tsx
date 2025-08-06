import React, { useEffect } from "react";
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomText from "../../components/CustomText";
import images from "../../assets/images";
import { colors } from "../../utils/colors";
import sizeHelper from "../../utils/Helpers";
import { fonts } from "../../utils/Fonts";
import CustomButton from "../../components/CustomBotton";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import CustomInput from "../../components/CustomInput";
type HostingScreenProps = {
    navigation: NativeStackNavigationProp<any>
}
const Community = (props: HostingScreenProps) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle={"dark-content"} backgroundColor={'transparent'} translucent />
            <CustomText text={"Join a community"} size={36} fontWeight={"700"} marginT={sizeHelper.calHp(100)} />
            <CustomText text={"Join a community to play with your friends and meet new players"} size={20} color={colors.primary + '50'} marginT={sizeHelper.calHp(15)} />
            <View style={{
                marginTop: sizeHelper.calHp(34),
                gap: sizeHelper.calWp(90)
            }}>
                <CustomInput
                    placeholder={"Search game here"}
                    leftImage={images.search}
                    bg={'white'}
                    Size={14}
                    color={"#A6A9AB"}
                    bdc={"#D4DCE2"}
                    bw={0.5}
                    imgWidth={sizeHelper.calWp(40)}
                    mli={sizeHelper.calHp(10)}
                    keyboard={"email-address"}
                    Inputheight={90}
                />

                <View style={{
                    gap:sizeHelper.calWp(30)
                }}>
                    <View style={styles.card}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: sizeHelper.calWp(20),
                        gap: sizeHelper.calWp(20)
                    }}>
                        <Image
                            source={images.clubpro}
                            style={{
                                width: sizeHelper.calWp(120),
                                height: sizeHelper.calWp(120)
                            }}
                        />
                        <View style={{ gap: sizeHelper.calWp(16), alignSelf: 'center', alignItems: 'center', }}>
                            <CustomText text={"Club Pro France"} size={24} />
                            <View style={{
                                flexDirection: 'row',
                                gap: sizeHelper.calWp(14),
                                alignItems: 'center'

                            }}>
                                <Image
                                    source={images.users}
                                    style={{
                                        width: sizeHelper.calWp(30),
                                        height: sizeHelper.calWp(30)
                                    }}
                                />
                                <CustomText text={"7055 Members"} />
                            </View>
                        </View>
                    </View>
                    <CustomText text={"Founding organization of the IFC"} color={colors.primary + '60'} marginL={sizeHelper.calWp(20)} size={22} />
                    <View style={{
                        flexDirection: 'row',
                        alignItems:'center',
                        justifyContent: 'space-between',
                        marginBottom: sizeHelper.calHp(10),
                        marginLeft: sizeHelper.calWp(10),
                        marginTop:sizeHelper.calHp(30),
                        marginRight: sizeHelper.calWp(10),
                    }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                borderWidth: 0.5,
                                borderColor: '#D4DCE2',
                                width: '40%',
                                borderRadius: sizeHelper.calWp(25),
                                gap:sizeHelper.calWp(20)
                            }}
                        >
                            <View
                                style={{
                                    backgroundColor: 'black',
                                    width: '35%',
                                    height: sizeHelper.calHp(70),
                                    borderTopLeftRadius: sizeHelper.calWp(25),
                                    borderBottomLeftRadius: sizeHelper.calWp(25),
                                    alignItems:'center',
                                    justifyContent:'center'

                                }}
                            >
                                <Image source={images.ea_sports} style={{
                                    width: sizeHelper.calWp(60), height: sizeHelper.calWp(65)
                                }} />
                            </View>
                            <CustomText text={"EAFC 25"} size={22} />
                        </View>
                        <CustomButton text={"Join"} textColor="white" width={"20%"} height={sizeHelper.calHp(65)} />
                    </View>
                </View>
                    <View style={styles.card}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: sizeHelper.calWp(20),
                        gap: sizeHelper.calWp(20)
                    }}>
                        <Image
                            source={images.clubpro}
                            style={{
                                width: sizeHelper.calWp(120),
                                height: sizeHelper.calWp(120)
                            }}
                        />
                        <View style={{ gap: sizeHelper.calWp(16), alignSelf: 'center', alignItems: 'center', }}>
                            <CustomText text={"Club Pro France"} size={24} />
                            <View style={{
                                flexDirection: 'row',
                                gap: sizeHelper.calWp(14),
                                alignItems: 'center'

                            }}>
                                <Image
                                    source={images.users}
                                    style={{
                                        width: sizeHelper.calWp(30),
                                        height: sizeHelper.calWp(30)
                                    }}
                                />
                                <CustomText text={"7055 Members"} />
                            </View>
                        </View>
                    </View>
                    <CustomText text={"Founding organization of the IFC"} color={colors.primary + '60'} marginL={sizeHelper.calWp(20)} size={22} />
                    <View style={{
                        flexDirection: 'row',
                        alignItems:'center',
                        justifyContent: 'space-between',
                        marginBottom: sizeHelper.calHp(10),
                        marginLeft: sizeHelper.calWp(10),
                        marginTop:sizeHelper.calHp(30),
                        marginRight: sizeHelper.calWp(10),
                    }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                borderWidth: 0.5,
                                borderColor: '#D4DCE2',
                                width: '40%',
                                borderRadius: sizeHelper.calWp(25),
                                gap:sizeHelper.calWp(20)
                            }}
                        >
                            <View
                                style={{
                                    backgroundColor: 'black',
                                    width: '35%',
                                    height: sizeHelper.calHp(70),
                                    borderTopLeftRadius: sizeHelper.calWp(25),
                                    borderBottomLeftRadius: sizeHelper.calWp(25),
                                    alignItems:'center',
                                    justifyContent:'center'

                                }}
                            >
                                <Image source={images.ea_sports} style={{
                                    width: sizeHelper.calWp(60), height: sizeHelper.calWp(65)
                                }} />
                            </View>
                            <CustomText text={"EAFC 25"} size={22} />
                        </View>
                        <CustomButton text={"Join"} textColor="white" width={"20%"} height={sizeHelper.calHp(65)} />
                    </View>
                </View>
            </View>
                </View>
            <View style={{
                flex: 1,
                justifyContent: 'flex-end',
                marginBottom: sizeHelper.calHp(50),


            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    gap: sizeHelper.calWp(50)
                }}>

                    <TouchableOpacity style={{
                        // alignSelf:'flex-end',
                        alignItems: 'center',

                    }}
                        onPress={() => props.navigation.goBack()}
                    >
                        <CustomText text={"Back"} size={25} />
                    </TouchableOpacity>
                    <CustomButton text={"Finish"} textColor="white" fontSize={25} width={"75%"} alignSelf="flex-end" />
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F6F6',
        padding: sizeHelper.calWp(36),
    },
    card: {
        width: '100%',
        padding: sizeHelper.calWp(23),
        borderRadius: sizeHelper.calWp(20),
        backgroundColor: 'white'
    }
})
export default Community;
