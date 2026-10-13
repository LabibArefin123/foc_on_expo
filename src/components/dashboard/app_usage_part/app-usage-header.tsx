import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

import { DASHBOARD_COLORS as C } from "@/constants/dashboard";
import { appUsageStyles as styles } from "./app-usage.styles";

// App usage heading
export default function AppUsageHeader() {
  return (
    <View style={styles.heading}>
      <View>
        <Text style={styles.title}>App usage</Text>
        <Text style={styles.subtitle}>Your most-used distracting apps</Text>
      </View>

      <Pressable style={styles.viewButton}>
        <Text style={styles.viewText}>View all</Text>
        <Ionicons name="chevron-forward" size={14} color={C.primary} />
      </Pressable>
    </View>
  );
}
