import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../utils/colors";
import images from "../../assets/images";
import sizeHelper from "../../utils/Helpers";
import { useState } from "react";



const Checkbox = ({ bg,setIsChecked,isChecked }: any) => {
  return (
    <TouchableOpacity
      style={{ height: 20, width: 20, justifyContent: "center" }}
      activeOpacity={0.6}
      onPress={() => setIsChecked(!isChecked)}
    >
      {!isChecked ? <View
        style={{
          width: sizeHelper.calWp(32),
          height: sizeHelper.calWp(32),
          borderRadius: sizeHelper.calWp(8),
          borderWidth: 1,
          borderColor: bg || colors.primary,
          justifyContent: "center",
          alignItems: "center",
          padding: 3,
        }}
      >

      </View>
        :
        <View
          style={{
            width: sizeHelper.calWp(32),
            height: sizeHelper.calWp(32),
            borderRadius: sizeHelper.calWp(8),
            borderWidth: 1,
            borderColor: bg || "#09CA67",
            backgroundColor: bg || "#09CA67",
            justifyContent: "center",
            alignItems: "center",
            padding: sizeHelper.calWp(16),
          }}
        >
          <Image
          resizeMode="contain"
            style={{ width: sizeHelper.calWp(18), height: sizeHelper.calWp(18), tintColor: colors.white }}
            source={images.tick}
          />
        </View>
      }
    </TouchableOpacity>
  );
};
export default Checkbox;
