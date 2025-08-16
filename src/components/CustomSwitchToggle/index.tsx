import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SwitchToggle from "react-native-switch-toggle";
import { colors } from "../../utils/colors";
import sizeHelper from "../../utils/Helpers";

const CustomSwitchToggle = ({ isToggle, setIsToggle }: any) => {
  return (
    <>
      <SwitchToggle
        switchOn={isToggle}
        onPress={() => setIsToggle(!isToggle)}
        circleColorOff="#ffff"
        circleColorOn="#ffff"
        backgroundColorOn={colors.primary}
        backgroundColorOff={colors.input_back}
        containerStyle={{
          ...styles.containerStyle,
          padding: sizeHelper.calWp(isToggle ? 15 : 5), // keeps circle away from edges
        }}
        circleStyle={styles.circleStyle}
      />
    </>
  );
};
export default CustomSwitchToggle;

const styles = StyleSheet.create({
  containerStyle: {
    width: sizeHelper.calWp(90),
    height: sizeHelper.calHp(45),
    borderRadius: 25,

    // padding: 5,
  },
  circleStyle: {
    width: sizeHelper.calWp(35),
    height: sizeHelper.calWp(35),
    borderRadius: sizeHelper.calWp(35),
  },
});
