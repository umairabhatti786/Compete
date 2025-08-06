import React, { useEffect, useState } from "react";
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomText from "../../components/CustomText";
import images from "../../assets/images";
import { colors } from "../../utils/colors";
import sizeHelper from "../../utils/Helpers";
import { fonts } from "../../utils/Fonts";
import CustomButton from "../../components/CustomBotton";
import CustomLine from "../../components/CustomLine";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import CustomInput from "../../components/CustomInput";
import Checkbox from "../../components/CheckBox";

type HostingScreenProps = {
    navigation: NativeStackNavigationProp<any>
}
const SignInScreen = (props: HostingScreenProps) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [Confirmpassword, setConfirmPassword] = useState("")
    return (
        <View style={styles.Container}>
            <StatusBar barStyle={"dark-content"} backgroundColor={'transparent'} translucent />
            <CustomHeader arrow={images.back_arrow} text={"Sign Up"} onPress={() => props.navigation.goBack()} />
            <View>
                <View style={{ gap: sizeHelper.calWp(28) }}>
                    <View style={{ gap: sizeHelper.calWp(22) }}>
                        <CustomText text={"Email"} size={25} />
                        <CustomInput
                            placeholder={"Text your email"}
                            bg={'transparent'}
                            Size={14}
                            color={colors.primary + '60'}
                            bdc={colors.grey200}
                            bw={1}
                            value={email}
                            height={sizeHelper.calHp(85)}
                            onChangeText={(text: any) => setEmail(text)}
                            keyboard={"email-address"}
                            borderRadius={12}
                        />
                    </View>
                    <View style={{ gap: sizeHelper.calWp(22) }}>
                        <CustomText text={"Password"} size={25} />
                        <CustomInput
                            placeholder={"Text your password"}
                            bg={'transparent'}
                            Size={14}
                            color={colors.primary + '60'}
                            bdc={colors.grey200}
                            bw={1}
                            value={password}
                            height={sizeHelper.calHp(85)}
                            onChangeText={(text: any) => setPassword(text)}
                            borderRadius={12}
                        />
                    </View>
                    <View style={{ gap: sizeHelper.calWp(22) }}>
                        <CustomText text={"Confirm Password"} size={25} />
                        <CustomInput
                            placeholder={"Text your password"}
                            bg={'transparent'}
                            Size={14}
                            color={colors.primary + '60'}
                            bdc={colors.grey200}
                            bw={1}
                            value={Confirmpassword}
                            height={sizeHelper.calHp(85)}
                            onChangeText={(text: any) => setConfirmPassword(text)}
                            borderRadius={12}
                        />
                    </View>

                </View>
                <View style={{
                    marginTop: sizeHelper.calHp(90),
                    gap: sizeHelper.calWp(70)
                }}>
                    <CustomButton
                        text={"Sign Up"}
                        bgColor="black"
                        textColor="white"
                        fontSize={25}
                        onPress={() => props.navigation.navigate('AddPics')}

                    />
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            alignSelf: 'center',
                            gap: sizeHelper.calWp(15)
                        }}
                    >
                        <CustomLine width={'45%'} align={'center'} bg={colors.grey200} height={1.5} marginTop={sizeHelper.calHp(5)} />
                        <CustomText text={'Or'} textAlign={"center"} color={colors.grey} size={24} />
                        <CustomLine width={'45%'} align={'center'} bg={colors.grey200} height={1.5} marginTop={sizeHelper.calHp(5)} />
                    </View>
                    <View style={{ alignItems: 'center', gap: sizeHelper.calWp(50) }}>
                        <TouchableOpacity
                            style={{
                                width: "100%",
                                height: sizeHelper.calHp(90),
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: sizeHelper.calWp(25),
                                flexDirection: 'row',
                                gap: sizeHelper.calWp(20),
                                borderWidth: 0.5,
                                borderColor: colors.grey200
                            }}
                        >
                            <Image source={images.google} style={{ width: sizeHelper.calWp(48), height: sizeHelper.calWp(48) }} />
                            <CustomText text={"Continue with Google"} size={25} fontWeight={"700"} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                width: "100%",
                                height: sizeHelper.calHp(90),
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: sizeHelper.calWp(25),
                                flexDirection: 'row',
                                gap: sizeHelper.calWp(20),
                                borderWidth: 0.5,
                                borderColor: colors.grey200
                            }}
                        >
                            <Image source={images.facebook} style={{ width: sizeHelper.calWp(48), height: sizeHelper.calWp(48) }} />
                            <CustomText text={"Continue with Facebook"} size={25} fontWeight={"700"} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'white',
        padding: sizeHelper.calWp(35),
        gap: sizeHelper.calWp(120)
    }
})
export default SignInScreen;
