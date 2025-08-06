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
const ForgotPassword = (props: HostingScreenProps) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [Confirmpassword, setConfirmPassword] = useState("")
    return (
        <View style={styles.Container}>
            <StatusBar barStyle={"dark-content"} backgroundColor={'transparent'} translucent />
            <CustomHeader arrow={images.back_arrow} text={"Forgot Password"} gap={1} textwidth={70}  onPress={()=>props.navigation.goBack()}/>
            <View style={{padding:sizeHelper.calWp(10)}}>
                <CustomText 
                text={"Enter the email associated with your account and we’ll send an email with code to reset your password"} 
                color={colors.primary + '60'}
                lineHeight={sizeHelper.calHp(28)}
                />
                <View style={{gap:sizeHelper.calWp(28), marginTop:sizeHelper.calHp(40)}}>
                    <View style={{gap:sizeHelper.calWp(22)}}>
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

                </View> 
                <View style={{
                marginTop: sizeHelper.calHp(90),
                gap: sizeHelper.calWp(70)
            }}>
                    <CustomButton
                        text={"Confirm"}
                        bgColor="black"
                        textColor="white"
                        fontSize={25}
                        onPress={()=>props.navigation.navigate('OtpScreen')}
                    />
                
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
export default ForgotPassword;
