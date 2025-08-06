import React, { useEffect } from "react";
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomText from "../../components/CustomText";
import images from "../../assets/images";
import { colors } from "../../utils/colors";
import sizeHelper from "../../utils/Helpers";
import { fonts } from "../../utils/Fonts";
import CustomButton from "../../components/CustomBotton";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
type HostingScreenProps = {
    navigation: NativeStackNavigationProp<any>
}
const ChooseLanguage = (props: HostingScreenProps) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle={"dark-content"} backgroundColor={'transparent'} translucent />
            <CustomText text={"Choose Language"} size={36} fontWeight={"700"} marginT={sizeHelper.calHp(100)} />
            <CustomText text={"Please select your proffered language"} size={20} color={colors.primary + '50'} marginT={sizeHelper.calHp(15)} />
            <View style={{
                margin: sizeHelper.calHp(120),
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                gap: sizeHelper.calWp(80)

            }}>
                <Image source={images.england_flag} style={{ width: sizeHelper.calWp(280), height: sizeHelper.calWp(280) }} />
                <Image source={images.france_flag} style={{ width: sizeHelper.calWp(280), height: sizeHelper.calWp(280) }} />

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
                        onPress={()=>props.navigation.navigate('Community')}
                    />
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: sizeHelper.calWp(36),
    }
})
export default ChooseLanguage;
