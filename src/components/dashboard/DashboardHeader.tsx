import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { DASHBOARD_COLORS as C } from "../../constants/dashboard";

interface Props {
  onNotificationPress?: () => void;
}

export default function DashboardHeader({ onNotificationPress }: Props) {
  const date = new Date();

  const greeting =
    date.getHours() < 12
      ? "Good morning"
      : date.getHours() < 17
        ? "Good afternoon"
        : "Good evening";

  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.brandRow}>
          <View style={styles.logo}>
            <Ionicons name="leaf" size={19} color="#FFFFFF" />
          </View>
          <Text style={styles.brand}>FocOn</Text>
        </View>

        <Text style={styles.greeting}>{greeting} 👋</Text>
        <Text style={styles.date}>{formattedDate}</Text>
      </View>

      <Pressable style={styles.notification} onPress={onNotificationPress}>
        <Ionicons name="notifications-outline" size={23} color={C.text} />
        <View style={styles.notificationDot} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 25,
  },
  brandRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  logo: {
    width: 34,
    height: 34,
    borderRadius: 11,
    backgroundColor: C.primary,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 9,
  },
  brand: {
    fontSize: 22,
    fontWeight: "800",
    color: C.text,
    letterSpacing: -0.8,
  },
  greeting: {
    fontSize: 25,
    fontWeight: "800",
    color: C.text,
    letterSpacing: -0.8,
  },
  date: {
    fontSize: 13,
    color: C.secondary,
    marginTop: 6,
  },
  notification: {
    width: 46,
    height: 46,
    borderRadius: 16,
    backgroundColor: C.surface,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 3,
  },
  notificationDot: {
    position: "absolute",
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: C.danger,
    right: 11,
    top: 10,
    borderWidth: 1.5,
    borderColor: C.surface,
  },
});
