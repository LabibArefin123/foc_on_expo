import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { DASHBOARD_COLORS as C } from "../../constants/dashboard";

interface Props {
  focusMinutes: number;
  distractionMinutes: number;
  completedSessions: number;
}

function formatDuration(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  if (hours === 0) return `${mins}m`;
  return `${hours}h ${mins}m`;
}

export default function TodayOverview({
  focusMinutes,
  distractionMinutes,
  completedSessions,
}: Props) {
  const stats = [
    {
      label: "Focus time",
      value: formatDuration(focusMinutes),
      icon: "time-outline" as const,
      color: C.primary,
      background: "#EFEDFF",
    },
    {
      label: "Distractions",
      value: formatDuration(distractionMinutes),
      icon: "phone-portrait-outline" as const,
      color: C.warning,
      background: "#FFF4E4",
    },
    {
      label: "Sessions",
      value: String(completedSessions),
      icon: "checkmark-circle-outline" as const,
      color: C.success,
      background: "#E7F8F0",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.title}>Today's overview</Text>
        <Text style={styles.today}>TODAY</Text>
      </View>

      <View style={styles.grid}>
        {stats.map((item) => (
          <View style={styles.card} key={item.label}>
            <View
              style={[styles.iconBox, { backgroundColor: item.background }]}
            >
              <Ionicons name={item.icon} size={19} color={item.color} />
            </View>

            <Text style={styles.value}>{item.value}</Text>
            <Text style={styles.label}>{item.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
  },
  heading: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 13,
  },
  title: {
    fontSize: 18,
    fontWeight: "800",
    color: C.text,
  },
  today: {
    color: C.primary,
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1,
  },
  grid: {
    flexDirection: "row",
    gap: 10,
  },
  card: {
    flex: 1,
    backgroundColor: C.surface,
    borderRadius: 19,
    padding: 13,
    borderWidth: 1,
    borderColor: C.border,
  },
  iconBox: {
    width: 37,
    height: 37,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
  },
  value: {
    fontSize: 19,
    fontWeight: "800",
    color: C.text,
  },
  label: {
    fontSize: 10,
    color: C.secondary,
    marginTop: 5,
  },
});
