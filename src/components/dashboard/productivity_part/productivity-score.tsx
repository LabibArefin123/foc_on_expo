import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

import { DASHBOARD_COLORS as C } from "../../../constants/dashboard";
import { productivityStyles as styles } from "./productivity.styles";

interface Props {
  score: number;
}

export default function ProductivityScore({ score }: Props) {
  return (
    <View style={styles.scoreRow}>
      <Text style={styles.score}>{score}</Text>
      <Text style={styles.outOf}>/ 100</Text>

      <View style={styles.positive}>
        <Ionicons name="arrow-up" size={11} color={C.success} />
        <Text style={styles.positiveText}>Good</Text>
      </View>
    </View>
  );
}
