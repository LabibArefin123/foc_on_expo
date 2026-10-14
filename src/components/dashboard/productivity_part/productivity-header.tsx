import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

import { DASHBOARD_COLORS as C } from "../../../constants/dashboard";
import { productivityStyles as styles } from "./productivity.styles";

export default function ProductivityHeader() {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.title}>Productivity score</Text>
        <Text style={styles.subtitle}>Your daily performance</Text>
      </View>

      <View style={styles.icon}>
        <Ionicons name="trending-up" size={19} color={C.success} />
      </View>
    </View>
  );
}
