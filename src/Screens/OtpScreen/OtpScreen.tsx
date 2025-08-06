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
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field'
type HostingScreenProps = {
    navigation: NativeStackNavigationProp<any>
}
const CELL_COUNT = 6;
const OtpScreen = (props: HostingScreenProps) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [Confirmpassword, setConfirmPassword] = useState("")
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [prop, getCellOnLayoutHandler]: any = useClearByFocusCell({
        value,
        setValue,
    });
    return (
        <View style={styles.Container}>
            <StatusBar barStyle={"dark-content"} backgroundColor={'transparent'} translucent />
            <CustomHeader arrow={images.back_arrow} text={"Forgot Password"} gap={1} textwidth={70} onPress={() => props.navigation.goBack()} />
            <View style={{ padding: sizeHelper.calWp(10) }}>
                <CustomText
                    text={"Enter the email associated with your account and we’ll send an email with code to reset your password"}
                    color={colors.primary + '60'}
                    lineHeight={sizeHelper.calHp(28)}
                />
                <View style={{ gap: sizeHelper.calWp(28), marginTop: sizeHelper.calHp(40) }}>
                    <View style={{ gap: sizeHelper.calWp(22) }}>
                        <CodeField
                            ref={ref}
                            {...prop}
                            value={value}
                            onChangeText={setValue}
                            cellCount={CELL_COUNT}
                            keyboardType="number-pad"
                            textContentType="oneTimeCode"
                            rootStyle={styles.codeFieldRoot}

                            renderCell={({ index, symbol }: any) => (
                                <View
                                    key={index}
                                    onLayout={getCellOnLayoutHandler(index)}
                                    style={styles.cell}
                                >
                                    <CustomText text={symbol} style={{ fontSize: sizeHelper.calHp(35) }} />
                                </View>
                            )}
                        />
                    </View>
                    <View style={{gap:sizeHelper.calWp(16), marginTop:sizeHelper.calHp(15)}}>
                        <CustomText text={"A code has been sent to your phone"} size={22} color={colors.primary + '50'} textAlign={"center"} />
                        <CustomText text={"Resend in 00:57"} textAlign={"center"} size={22} />
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
                        onPress={()=>props.navigation.navigate('AddPics')}
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
    },
    codeFieldRoot: { marginTop: sizeHelper.calHp(20),  },

    cell: {
        borderBottomWidth: sizeHelper.calHp(3),
        width: sizeHelper.calWp(100),
        borderBottomColor: colors.primary + '20',
        fontSize: sizeHelper.calHp(25),
        textAlign: 'center',
        alignItems: 'center',
        padding: sizeHelper.calWp(20)

    }
})
export default OtpScreen;
