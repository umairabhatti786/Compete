import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  ViewStyle,
  ImageSourcePropType,
  SafeAreaView,
  View,
  StatusBar,
} from 'react-native';
import { colors } from '../../utils/colors';
import sizeHelper from '../../utils/Helpers';

interface BackgroundContainerProps {
  children: React.ReactNode;
  style?: ViewStyle;
  backgroundSource?: ImageSourcePropType;
  barStyle?:'default' | 'light-content' | 'dark-content'
}

const ScreenLayout: React.FC<BackgroundContainerProps> = ({
  children,
  style,
  backgroundSource,
  barStyle
}) => {
  return (
    <>
      <StatusBar
        barStyle={barStyle || 'dark-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
        <View style={[styles.container, style]}>{children}</View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: sizeHelper.calWp(35),
    backgroundColor: colors.white,
  },
});

export default ScreenLayout;
