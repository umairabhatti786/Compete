import { Text } from "react-native";
import { colors } from "../../utils/colors";
import { fonts } from "../../utils/Fonts";
import sizeHelper from "../../utils/Helpers";
import { TextType } from "../../utils/Types";

const CustomText = ({ color, size, text, style, fontWeight, lineHeight, fontfam, textAlign, marginT, marginR, marginB, marginL, letterSpacing, bg }: TextType) => {
  return (
    <Text
      style={[
        {
          marginTop: marginT,
          marginRight: marginR,
          marginLeft: marginL,
          marginBottom: marginB,
          color: color || colors.primary,
          fontSize: sizeHelper.calHp(size || 20),
          fontFamily: fontfam || fonts.bold,
          fontWeight: fontWeight || "500",
          lineHeight: lineHeight,
          textAlign: textAlign,
          letterSpacing: letterSpacing,
          backgroundColor: bg,
        },
        style,
      ]}
    >
      {text}
    </Text>
  );
};
export default CustomText;
