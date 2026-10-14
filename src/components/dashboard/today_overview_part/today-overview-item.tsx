import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

import { todayOverviewStyles as styles } from "./today-overview.styles";

interface Props {
  label: string;
  value: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  background: string;
}

export default function TodayOverviewItem({
  label,
  value,
  icon,
  color,
  background,
}: Props) {
  return (
    <View style={styles.card}>
      <View style={[styles.iconBox, { backgroundColor: background }]}>
        <Ionicons name={icon} size={19} color={color} />
      </View>

      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}
