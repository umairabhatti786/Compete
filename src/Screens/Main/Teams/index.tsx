import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
type NotificationsScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};
const TeamsScreen = (props: NotificationsScreenProps) => {
  return <View style={styles.container}></View>;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121417',
  },
});
export default TeamsScreen;
