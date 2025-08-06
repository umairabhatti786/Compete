import React, { useEffect } from "react";
import { Image, StatusBar, Text, View } from "react-native";
import CustomText from "../../components/CustomText";
import images from "../../assets/images";
import { colors } from "../../utils/colors";
import sizeHelper from "../../utils/Helpers";
import { fonts } from "../../utils/Fonts";
import CustomButton from "../../components/CustomBotton";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
type HostingScreenProps ={
    navigation:NativeStackNavigationProp<any>
}
const WellComeScreen = (props:HostingScreenProps) => {
    return (
        <View>
            <StatusBar barStyle={"default"} backgroundColor={'transparent'} translucent />
            <Image source={images.welcome_image} />
            <View
                style={{
                    position: 'absolute',
                    alignItems: 'center',
                    alignSelf: 'center',
                    gap: sizeHelper.calWp(45),
                    bottom: sizeHelper.calHp(120)
                }}>
                <View style={{ width: sizeHelper.calWp(700) }}>
                    <CustomText
                        text={"Looking forward to the most intense matches"}
                        size={36}
                        fontWeight={'400'}
                        lineHeight={sizeHelper.calHp(55)}
                        color={colors.white}
                        fontfam={fonts.bold}
                        textAlign={"center"} />
                </View>
                <View style={{ width: sizeHelper.calWp(550) }}>
                    <CustomText
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore "}
                        fontWeight={'400'}
                        color={colors.white + '90'}
                        size={22}
                        lineHeight={sizeHelper.calHp(32)}
                        textAlign={"center"} />
                </View>
                <CustomButton
                    text={"Get Start"}
                    bgColor={colors.white}
                    textColor={colors.primary}
                    fontSize={25}
                    fontWeight="600"
                    width={"96%"}
                    marginTop={sizeHelper.calHp(30)}
                    onPress={()=>props.navigation.navigate('LoginSignIn')}
                     />
            </View>
        </View>
    );
};

export default WellComeScreen;
