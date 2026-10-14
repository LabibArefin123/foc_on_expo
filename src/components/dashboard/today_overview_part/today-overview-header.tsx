import { Text, View } from "react-native";

import { todayOverviewStyles as styles } from "./today-overview.styles";

export default function TodayOverviewHeader() {
  return (
    <View style={styles.heading}>
      <Text style={styles.title}>Today's overview</Text>
      <Text style={styles.today}>TODAY</Text>
    </View>
  );
}
