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
const CustomHeader = ({Press,arrow,text,mr,p,onPress}:any) => {
    return (
        <View style={styles.Container}>
            <StatusBar barStyle={'light-content'} backgroundColor={colors.primary} />
            <View style={styles.HandleContainer}>
                <TouchableOpacity onPress={onPress}>
                <Image source={arrow} style={{ width:sizeHelper.calWp(55), height:sizeHelper.calWp(55)}}/>
                </TouchableOpacity>
                <View style={{width:95}} />
            <CustomText text={text} 
            fontfam={fonts.bold}
            size={28} color={colors.white} fontWeight={"700"} textAlign={"center"} marginR={mr}/>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    Container: {
    
        // alignItems:'center',
        justifyContent:'center',
        backgroundColor: colors.primary,
        padding:sizeHelper.calHp(50),
        paddingHorizontal:sizeHelper.calWp(30)
    },
    HandleContainer:{
        width:"60%",
        flexDirection:"row",
        alignItems:'center',
        justifyContent:"space-between"
    }
})

export default CustomHeader;
