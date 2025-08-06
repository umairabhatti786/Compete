import { TouchableOpacity } from "react-native"
import { colors } from "../../utils/colors"
import CustomText from "../CustomText"
import sizeHelper from "../../utils/Helpers"
import { ButtonType } from "../../utils/Types"

const CustomButton =({
  text,
  onPress,
  width,
  height,
  borderRadius,
  bgColor,
  textColor,
  borderColor,
  notRequiredShadow,
  fontWeight,
  shadowColor,
  marginTop,
  fontSize,
  borderWidth,
  alignSelf,
  padding,
  position,
  top,
  bottom,
  marginbottom,
  shadowOffset,
  marginLeft,
  style,
}:ButtonType)=>{
    return (
        <TouchableOpacity 
        onPress={onPress}
        activeOpacity={0.9}
        style={[
            {                
            width: width || '100%',
            height: height || sizeHelper.calHp(90),
            backgroundColor: bgColor || colors.primary,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: alignSelf ,
            borderRadius: borderRadius || sizeHelper.calWp(20),
            marginTop: marginTop ,
            marginLeft: marginLeft,
            elevation: notRequiredShadow,
            borderWidth:borderWidth,
            borderColor: borderColor,
            shadowColor:shadowColor,
            shadowOffset: shadowOffset,
            shadowOpacity: notRequiredShadow ? 0 : 0.2,
            shadowRadius: 5,
            padding:padding,
            position:position,
            top: top,
            bottom: bottom,
            marginBottom: marginbottom
            },
            style,
        ]}
        >
            <CustomText text={text}
            color={ textColor || colors.white}
            fontWeight={fontWeight}
            size={fontSize ||16} />
        </TouchableOpacity>
    )
}
export default CustomButton