import React from "react";
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../utils/colors";
import CustomText from "../CustomText";
import sizeHelper from "../../utils/Helpers";
import images from "../../assets/images";
import { fonts } from "../../utils/Fonts";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
type HostingScreenProps = {
    navigation: NativeStackNavigationProp<any>
}
const CustomHeader = ({ Press, arrow, text, mr, p, onPress, gap,textwidth }: any) => {
    return (
        <View>
            <View style={[styles.HandleContainer, {
                gap: gap || sizeHelper.calWp(28),
            }]}>
                <TouchableOpacity onPress={onPress}>
                    <Image source={arrow} style={{ width: sizeHelper.calWp(55), height: sizeHelper.calWp(55) }} />
                </TouchableOpacity>
                <View style={{ width: textwidth || sizeHelper.calWp( 175) }} />
                <CustomText text={text}
                    fontfam={fonts.bold}
                    size={32} color={colors.primary} fontWeight={"600"} textAlign={"center"} marginR={mr} />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({

    HandleContainer: {
        flexDirection: "row",
        alignItems: 'center',
        marginTop: sizeHelper.calHp(42)
    }
})

export default CustomHeader;
