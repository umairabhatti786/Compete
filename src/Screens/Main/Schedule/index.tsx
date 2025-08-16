import React, { useState } from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import sizeHelper from '../../../utils/Helpers';
import CustomText from '../../../components/CustomText';
import { fonts } from '../../../utils/Fonts';
import { colors } from '../../../utils/colors';
import images from '../../../assets/images';
import ScreenLayout from '../../../components/ScreenLayout';
import { ArchivedTournamentsData, Club } from '../../../utils/Data';
import CustomHeader from '../../../components/CustomHeader/CustomHeader';
import TeamsCard from '../../../components/TeamsCard';
import { CalendarList } from "react-native-calendars";

type NotificationsScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};
const ScheduleScreen = (props: NotificationsScreenProps) => {
      const [selected, setSelected] = useState("2024-10-05");

  return (
    <ScreenLayout
      style={{
        backgroundColor: colors.background,
        gap: sizeHelper.calHp(30),
        padding:sizeHelper.calWp(0)
      }}
    >
        <View
        style={{padding:sizeHelper.calWp(35)}}
        >
             <CustomHeader
        arrow={images.white_back_arrow}
        text={'Schedule'}
        color={colors.white}
        onPress={() => props.navigation.goBack()}
      />

        </View>
     
<ScrollView>


     

      <CalendarList
        current={selected}
        pastScrollRange={1}
        scrollEnabled={false}
        futureScrollRange={0}
        contentContainerStyle={{paddingTop:sizeHelper.calHp(30),paddingRight:30}}
        onDayPress={(day) => setSelected(day.dateString)}
        theme={{
          backgroundColor: "transparent", // dark background
          calendarBackground: "transparent",
          textSectionTitleColor: "#888",
          monthTextColor: "#fff",
          textMonthFontWeight: "bold",
          dayTextColor: "#fff",
          todayTextColor: "#fff",
          selectedDayBackgroundColor: "#9bb8e4",
          selectedDayTextColor: "#000",
          arrowColor: "#fff",
        }}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: false,
          },
        }}
        style={{
          borderWidth: 0,
          height:700,
        }}
      />
       <CustomText
        text={'Matches'}
        size={33}
        style={{ paddingBottom: sizeHelper.calHp(35),paddingLeft:sizeHelper.calWp(35) }}
        color={colors.white}
        fontWeight={'700'}
        fontfam={fonts.bold}
      />

      <View>
        <FlatList
          data={ArchivedTournamentsData}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{
            gap: sizeHelper.calHp(40),
            paddingLeft:sizeHelper.calWp(35),
            paddingBottom:sizeHelper.calHp(35)
            
          }}
          renderItem={({ item }) => <TeamsCard item={item} />}
        />
      </View>

      </ScrollView>
    </ScreenLayout>
  );
};
const styles = StyleSheet.create({
 
});

export default ScheduleScreen;
