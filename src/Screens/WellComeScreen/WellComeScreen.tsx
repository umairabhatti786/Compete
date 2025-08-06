import React, { useEffect } from "react";
import { Image, StatusBar, Text, View } from "react-native";
import CustomText from "../../components/CustomText";
import images from "../../assets/images";
import { colors } from "../../utils/colors";
import sizeHelper from "../../utils/Helpers";
import { fonts } from "../../utils/Fonts";
const WellComeScreen = () => {
    return (
        <View>
            <StatusBar barStyle={"default"} backgroundColor={'transparent'} translucent />
            <Image source={images.welcome_image} />
            <View
                style={{
                    position:'absolute',
                    alignItems:'center',
                    alignSelf:'center',
                    bottom:sizeHelper.calHp(450)
                }}>
                    <View style={{width:sizeHelper.calWp(700)}}>
                        
                    <CustomText text={"Looking forward to the most intense matches"}  size={38} fontWeight={400} color={colors.white} textAlign={"center"}  />
                    </View>
            </View>
        </View>
    );
};

export default WellComeScreen;
