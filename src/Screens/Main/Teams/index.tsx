import React, { useState } from 'react';
import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import sizeHelper from '../../../utils/Helpers';
import CustomText from '../../../components/CustomText';
import { fonts } from '../../../utils/Fonts';
import { colors } from '../../../utils/colors';
import images from '../../../assets/images';
import ScreenLayout from '../../../components/ScreenLayout';
import { Club } from '../../../utils/Data';
import TeamsCard from '../../../components/TeamsCard';
type NotificationsScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};
const tab = ['Club', 'National'];
const TeamsScreen = (props: NotificationsScreenProps) => {
  const [activeTab, setactiveTab] = useState('Club');
  const renderTab = () => {
    if (activeTab === 'Club') {
      return (
        <View>
          <FlatList
            data={Club}
            keyExtractor={item => item.id.toString()}
            style={{
              paddingTop: sizeHelper.calHp(50),
            }}
            contentContainerStyle={{gap:sizeHelper.calHp(40)}}
            renderItem={({ item }) => (
             <TeamsCard item={item}/>
            )}
          />
        </View>
      );
    }
  };
  return (
    <ScreenLayout
      style={{
        backgroundColor: '#121417',
        padding: sizeHelper.calWp(0),
      }}
    >
      <View style={styles.HandleContainer}>
        <View style={{ width: sizeHelper.calWp(50) }} />
        <CustomText
          text={'Teams'}
          fontfam={fonts.medium}
          size={30}
          color={colors.white}
          fontWeight={'600'}
          textAlign={'center'}
          
        />
        <TouchableOpacity
          onPress={() => props.navigation.navigate('CreateTeam')}
        >
          <Image
            source={images.add}
            style={{
              width: sizeHelper.calWp(40),
              height: sizeHelper.calWp(40),
            }}
          />
        </TouchableOpacity>
      </View>

      <View>
        <View>
          <View style={styles.tabRow}>
            {tab.map(tab => (
              <TouchableOpacity key={tab} onPress={() => setactiveTab(tab)}>
                <Text
                  style={[
                    styles.tabText,
                    activeTab === tab && styles.activeText,
                  ]}
                >
                  {tab}
                </Text>

                {<View style={styles.underline} />}
              </TouchableOpacity>
            ))}
          </View>
          {renderTab()}
        </View>
      </View>
    </ScreenLayout>
  );
};
const styles = StyleSheet.create({
  HandleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: sizeHelper.calHp(42),
    justifyContent: 'space-between',
    padding: sizeHelper.calWp(30),
  },

  tabRow: {
    marginTop: sizeHelper.calHp(20),
    flexDirection: 'row',
    gap: sizeHelper.calWp(50),
    alignItems: 'center',
    height: sizeHelper.calHp(70),
    borderBottomWidth: 1,
    borderBottomColor: colors.white + '50',
  },
  tabText: {
    fontSize: sizeHelper.calWp(26),
    color: '#9EABB8',
    marginBottom: sizeHelper.calHp(20),
    marginLeft: sizeHelper.calWp(38),
  },
  activeText: {
    color: colors.white, // Orange color
    fontWeight: 'bold',
    marginBottom: sizeHelper.calHp(20),
    marginLeft: sizeHelper.calWp(38),
  },
  underline: {
    height: sizeHelper.calHp(7),
    width: '80%',
    backgroundColor: '#E5E8EB',
    position: 'absolute',
    top: sizeHelper.calHp(55),
    marginLeft: sizeHelper.calWp(38),
    alignSelf: 'center',
  },
});

export default TeamsScreen;
