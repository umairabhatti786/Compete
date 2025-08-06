import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { colors } from "../../utils/colors";
import CustomText from "../CustomText";
import sizeHelper from "../../utils/Helpers";
import { InputType } from "../../utils/Types";
import { useState } from "react";
import images from "../../assets/images";

const CustomInput = ({
  placeholder,
  keyboard,
  isPassword,
  props,
  isCenter,
  value,
  onChangeText,
  onShowPassword,
  editable,
  color,
  fd,
  maxLength,
  leftImage,
  SecondrightImage,
  rightImage,
  imgWidth,
  imgHeigth,
  ml,
  mT,
  bg,
  Size,
  width,
  align,
  fontWeight,
  marginLeft,
  bw,
  bdc,
  style,
  txalign,
  justifyContent,
  textContentType,
  paddingHorizontal,
  height,
  mli,
  marginb,
  alignIt,
  borderRadius,
  marginHorizontal,
  Inputheight
}: any) => {
  const [ShowPassword,setShowPassword] = useState(true)
  return (
    <View style={{ ...props, marginTop: mT, }}>
      <View style={[{
        flexDirection: "row",
        alignItems: alignIt || "center",
        alignSelf: align || 'center',
        borderColor: bdc,
        backgroundColor: bg || 'transparent',
        borderWidth: bw,
        justifyContent: "space-between",
        paddingHorizontal: paddingHorizontal || sizeHelper.calWp(20),
        borderRadius: borderRadius || sizeHelper.calWp(20),
        width: width || "100%",
        height: height,
        marginLeft: marginLeft,
        marginBottom: marginb,
      },
        style,
      ]}>
        {leftImage && (
          <View
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Image
              source={leftImage}
              resizeMode="contain"
              style={{
                width: imgWidth || sizeHelper.calWp(40),
                height: imgHeigth || sizeHelper.calWp(40),
                marginLeft: mli,
              }}
            />
          </View>
        )}



        <View style={{ flex: 1, marginHorizontal:marginHorizontal || 10 }}>
          <TextInput
            style={[{
              fontSize: Size || sizeHelper.calHp(20),
              height: sizeHelper.calHp(Inputheight || 100),
              backgroundColor: bg,
              fontFamily: "Urbanist-SemiBold",
              fontWeight: fontWeight,
              textAlign: txalign,
              ...(isCenter && { alignSelf: "center" }),
            }, style,
            ]}
            placeholder={placeholder}
            placeholderTextColor={color || colors.primary}
            keyboardType={keyboard}
            maxLength={maxLength}
            textContentType={textContentType}
            secureTextEntry={ShowPassword && isPassword}
            onChangeText={onChangeText}
            numberOfLines={1}
            autoCapitalize="none"
          />
        </View>
        {rightImage && (
          <TouchableOpacity
            onPress={()=>setShowPassword(!ShowPassword)}
            activeOpacity={0.6}
            style={{ justifyContent: justifyContent || "center", alignItems: "center", flexDirection: fd || 'row', marginLeft: ml }}
          >
            {
              !ShowPassword ?
              <Image
              style={{
                width: imgWidth || sizeHelper.calWp(40),
                height: imgHeigth || sizeHelper.calWp(40),
              }}
            />
            :
            <Image
              style={{
                width: imgWidth || sizeHelper.calWp(40),
                height: imgHeigth || sizeHelper.calWp(40),
              }}
            />
            }
          </TouchableOpacity>
        )}
        {SecondrightImage && (
          <TouchableOpacity
            onPress={onShowPassword}
            activeOpacity={0.6}
            disabled={!onShowPassword}
            style={{ justifyContent: justifyContent || "center", alignItems: "center", flexDirection: fd || 'row', marginLeft: ml }}
          >
            <Image
              source={SecondrightImage}
              style={{
                marginLeft: ml,
                width: imgWidth || sizeHelper.calWp(40),
                height: imgHeigth || sizeHelper.calWp(40),
              }}
            />
          </TouchableOpacity>
        )}

      </View>
    </View>
  );
};
export default CustomInput;
