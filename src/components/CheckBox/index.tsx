import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../utils/colors";
import images from "../../assets/images";
import sizeHelper from "../../utils/Helpers";
import { useState } from "react";



const Checkbox = ({ bg }: any) => {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <TouchableOpacity
      style={{ height: 30, width: 30, justifyContent: "center" }}
      activeOpacity={0.6}
      onPress={() => setIsChecked(!isChecked)}
    >
      {!isChecked ? <View
        style={{
          width: sizeHelper.calWp(32),
          height: sizeHelper.calWp(32),
          borderRadius: sizeHelper.calWp(5),
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
            borderRadius: sizeHelper.calWp(5),
            borderWidth: 1,
            borderColor: bg || "#09CA67",
            backgroundColor: bg || "#09CA67",
            justifyContent: "center",
            alignItems: "center",
            padding: sizeHelper.calWp(13),
          }}
        >
          <Image
            style={{ width: sizeHelper.calWp(16), height: sizeHelper.calWp(16), tintColor: colors.white }}
            source={images.tick}
          />
        </View>
      }
    </TouchableOpacity>
  );
};
export default Checkbox;
