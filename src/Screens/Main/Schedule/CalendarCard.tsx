import React, { useState } from "react";
import { View, Text, TouchableOpacity, SectionList, StyleSheet } from "react-native";
import moment from "moment";

const CalendarCard = () => {
  const [currentMonth, setCurrentMonth] = useState(moment()); // current date

  // Helper: generate month data
  const getMonthData = (month: moment.Moment) => {
    const daysInMonth = month.daysInMonth();
    const days = [];

    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ key: `${month.format("YYYY-MM")}-${i}`, day: i });
    }

    return {
      title: month.format("MMMM YYYY"),
      data: days,
    };
  };

  // Prepare two sections: previous & current
  const sections = [
    getMonthData(moment(currentMonth).subtract(1, "month")),
    getMonthData(currentMonth),
  ];

  return (
    <View style={styles.container}>
      {/* Header navigation */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setCurrentMonth(moment(currentMonth).subtract(1, "month"))}>
          <Text style={styles.navBtn}>{"< Prev"}</Text>
        </TouchableOpacity>

        <Text style={styles.headerText}>{currentMonth.format("MMMM YYYY")}</Text>

        <TouchableOpacity onPress={() => setCurrentMonth(moment(currentMonth).add(1, "month"))}>
          <Text style={styles.navBtn}>{"Next >"}</Text>
        </TouchableOpacity>
      </View>

      {/* SectionList with prev + current */}
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.key}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
        renderItem={({ item }) => <Text style={styles.day}>{item.day}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 40 },
  header: { flexDirection: "row", justifyContent: "space-between", marginHorizontal: 16, marginBottom: 8 },
  headerText: { fontSize: 18, fontWeight: "600" },
  navBtn: { fontSize: 16, color: "blue" },
  sectionHeader: { fontSize: 16, fontWeight: "bold", backgroundColor: "#f0f0f0", padding: 8 },
  day: { padding: 6, fontSize: 14 },
});

export default CalendarCard;
