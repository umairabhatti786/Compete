import React, { useEffect } from "react";
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomText from "../../components/CustomText";
import images from "../../assets/images";
import { colors } from "../../utils/colors";
import sizeHelper from "../../utils/Helpers";
import { fonts } from "../../utils/Fonts";
import CustomButton from "../../components/CustomBotton";
import CustomLine from "../../components/CustomLine";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type HostingScreenProps ={
    navigation:NativeStackNavigationProp<any>
}
const LoginSignIn = (props:HostingScreenProps) => {
    return (
        <View style={styles.Container}>
            <StatusBar barStyle={"dark-content"} backgroundColor={'transparent'} translucent />
            <Image source={images.main_logo} style={{ alignSelf: "center", marginTop: sizeHelper.calHp(180) }} />
            <View style={{
                marginTop: sizeHelper.calHp(120),
                gap: sizeHelper.calWp(70)
            }}>
                <View style={{ gap: sizeHelper.calWp(50) }}>
                    <CustomButton
                        text={"Log In"}
                        bgColor="black"
                        textColor="white"
                        fontSize={25}
                        onPress={()=>props.navigation.navigate('LoginScreen')}
                        />
                    <CustomButton
                        text={"Sign Up"}
                        fontSize={25}
                        borderWidth={1}
                        bgColor="transparent"
                        textColor={colors.secondary}
                        borderColor={colors.secondary}
                        onPress={()=>props.navigation.navigate('SignInScreen')}
                    />
                </View>
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
                <View style={{ alignItems: 'center', gap:sizeHelper.calWp(50) }}>
                    <TouchableOpacity
                        style={{
                            width: "100%",
                            height: sizeHelper.calHp(90),
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: sizeHelper.calWp(25),
                            flexDirection: 'row',
                            gap: sizeHelper.calWp(20),
                            borderWidth:0.5,
                            borderColor:colors.grey200
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
                            borderWidth:0.5,
                            borderColor:colors.grey200
                        }}
                    >
                        <Image source={images.facebook} style={{ width: sizeHelper.calWp(48), height: sizeHelper.calWp(48) }} />
                        <CustomText text={"Continue with Facebook"} size={25} fontWeight={"700"} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'white',
        padding: sizeHelper.calWp(35)
    }
})
export default LoginSignIn;
