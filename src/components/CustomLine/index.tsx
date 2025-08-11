import { Text, View } from 'react-native';
import { colors } from '../../utils/colors';
import sizeHelper from '../../utils/Helpers';

const CustomLine = ({
  height,
  marginLeft,
  marginRight,
  marginTop,
  bg,
  align,
  width,
  style,
  radius,
  flex
}: any) => {
  return (
    <View
      style={[
        {
          height: height || sizeHelper.calHp(3),
          width: width,
          flex: width ? undefined : 1,
          marginTop: marginTop,
          marginRight: marginRight || 0,
          marginLeft: marginLeft || 0,
          alignSelf: align,
          borderRadius: radius || 0,
          backgroundColor: bg || colors.grey200,
        },
        style,
      ]}
    />
  );
};
export default CustomLine;
