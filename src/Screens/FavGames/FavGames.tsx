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
const FavGames = (props: HostingScreenProps) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle={"dark-content"} backgroundColor={'transparent'} translucent />
            <CustomText text={"What are your favorite Game?"} size={36} fontWeight={"700"} marginT={sizeHelper.calHp(100)} />
            <CustomText text={"Select 1 50 5 games "} size={20} color={colors.primary + '50'} marginT={sizeHelper.calHp(15)} />
            <View style={{
                marginTop: sizeHelper.calHp(35),
                gap: sizeHelper.calWp(50)
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
             <View 
             style={{
                gap:sizeHelper.calWp(30)
             }}
             >
                   <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    // justifyContent: 'space-between',
                    gap: sizeHelper.calWp(20),
                    // alignSelf:'center'
                }}>
                    <View
                        style={{
                            borderWidth: 1,
                            borderColor: "#DDDEDF",
                            borderRadius: sizeHelper.calWp(25),
                        }}
                    >
                        <Image source={images.fc} style={{ width: sizeHelper.calWp(200), height: sizeHelper.calHp(120), borderTopLeftRadius: sizeHelper.calWp(25), borderTopRightRadius: sizeHelper.calWp(25) }} />
                        <View style={{
                            alignItems: 'center',
                            backgroundColor: 'white',
                            borderBottomLeftRadius: sizeHelper.calWp(25),
                            borderBottomRightRadius: sizeHelper.calWp(25),
                            padding: sizeHelper.calWp(5),
                            width: sizeHelper.calWp(200)
                        }}>
                            <CustomText text={"EAFC 25"} />
                        </View>
                    </View>
                    <View
                        style={{
                            borderWidth: 1,
                            borderColor: "#DDDEDF",
                            borderRadius: sizeHelper.calWp(25),
                        }}
                    >
                        <Image source={images.rocket_league} style={{ width: sizeHelper.calWp(250), height: sizeHelper.calHp(120), borderTopLeftRadius: sizeHelper.calWp(25), borderTopRightRadius: sizeHelper.calWp(25) }} />
                        <View style={{
                            alignItems: 'center',
                            backgroundColor: 'white',
                            borderBottomLeftRadius: sizeHelper.calWp(25),
                            borderBottomRightRadius: sizeHelper.calWp(25),
                            padding: sizeHelper.calWp(5),
                            width: sizeHelper.calWp(250)
                        }}>
                            <CustomText text={"Rocket League"} />
                        </View>
                    </View>
                    <View
                        style={{
                            borderWidth: 1,
                            borderColor: "#DDDEDF",
                            borderRadius: sizeHelper.calWp(25),
                            width: sizeHelper.calWp(200)
                        }}
                    >
                        <Image source={images.efootball} style={{ width: sizeHelper.calWp(200), height: sizeHelper.calHp(105), borderTopLeftRadius: sizeHelper.calWp(25), borderTopRightRadius: sizeHelper.calWp(25) }} />
                        <View style={{
                            alignItems: 'center',
                            backgroundColor: 'white',
                            borderBottomLeftRadius: sizeHelper.calWp(25),
                            borderBottomRightRadius: sizeHelper.calWp(25),
                            padding: sizeHelper.calWp(5),
                        }}>
                            <CustomText text={"eFootball"} />
                        </View>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    // justifyContent: 'space-between',
                    gap: sizeHelper.calWp(20),
                    // alignSelf:'center'
                }}>
                    <View
                        style={{
                            borderWidth: 1,
                            borderColor: "#DDDEDF",
                            borderRadius: sizeHelper.calWp(25),
                        }}
                    >
                        <Image source={images.street_fighter} style={{ width: sizeHelper.calWp(250), height: sizeHelper.calHp(120), borderTopLeftRadius: sizeHelper.calWp(25), borderTopRightRadius: sizeHelper.calWp(25) }} />
                        <View style={{
                            alignItems: 'center',
                            backgroundColor: 'white',
                            borderBottomLeftRadius: sizeHelper.calWp(25),
                            borderBottomRightRadius: sizeHelper.calWp(25),
                            padding: sizeHelper.calWp(5),
                            width: sizeHelper.calWp(250)
                        }}>
                            <CustomText text={"Street Fighter 6"} />
                        </View>
                    </View>
                    <View
                        style={{
                            borderWidth: 1,
                            borderColor: "#DDDEDF",
                            borderRadius: sizeHelper.calWp(25),
                        }}
                    >
                        <Image source={images.valorant} style={{ width: sizeHelper.calWp(200), height: sizeHelper.calHp(120), borderTopLeftRadius: sizeHelper.calWp(25), borderTopRightRadius: sizeHelper.calWp(25) }} />
                        <View style={{
                            alignItems: 'center',
                            backgroundColor: 'white',
                            borderBottomLeftRadius: sizeHelper.calWp(25),
                            borderBottomRightRadius: sizeHelper.calWp(25),
                            padding: sizeHelper.calWp(5),
                            width: sizeHelper.calWp(200)
                        }}>
                            <CustomText text={"Valorant"} />
                        </View>
                    </View>
                    <View
                        style={{
                            borderWidth: 1,
                            borderColor: "#DDDEDF",
                            borderRadius: sizeHelper.calWp(25),
                            width: sizeHelper.calWp(200)
                        }}
                    >
                        <Image source={images.hexacup} style={{ width: sizeHelper.calWp(200), height: sizeHelper.calHp(105), borderTopLeftRadius: sizeHelper.calWp(25), borderTopRightRadius: sizeHelper.calWp(25) }} />
                        <View style={{
                            alignItems: 'center',
                            backgroundColor: 'white',
                            borderBottomLeftRadius: sizeHelper.calWp(25),
                            borderBottomRightRadius: sizeHelper.calWp(25),
                            padding: sizeHelper.calWp(5),
                        }}>
                            <CustomText text={"Hexa Cup"} />
                        </View>
                    </View>
                </View>
                    <View
                        style={{
                            borderWidth: 1,
                            borderColor: "#DDDEDF",
                            borderRadius: sizeHelper.calWp(25),
                            width:sizeHelper.calWp(355)
                        }}
                    >
                        <Image source={images.victory_road} style={{ width: sizeHelper.calWp(350), height: sizeHelper.calHp(95), borderTopLeftRadius: sizeHelper.calWp(25), borderTopRightRadius: sizeHelper.calWp(25) }} />
                        <View style={{
                            alignItems: 'center',
                            backgroundColor: 'white',
                            borderBottomLeftRadius: sizeHelper.calWp(25),
                            borderBottomRightRadius: sizeHelper.calWp(25),
                            padding: sizeHelper.calWp(5),
                            width: sizeHelper.calWp(350)
                        }}>
                            <CustomText text={"Inazuma XI Victory Road"} />
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
                    <CustomButton
                        text={"Next"}
                        textColor="white"
                        fontSize={25}
                        width={"75%"}
                        alignSelf="flex-end"
                        onPress={() => props.navigation.navigate('Community')}
                    />
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
})
export default FavGames;
