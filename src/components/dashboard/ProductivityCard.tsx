import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { DASHBOARD_COLORS as C } from "../../constants/dashboard";

interface Props {
  score: number;
}

export default function ProductivityCard({ score }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Productivity score</Text>
          <Text style={styles.subtitle}>Your daily performance</Text>
        </View>

        <View style={styles.icon}>
          <Ionicons name="trending-up" size={19} color={C.success} />
        </View>
      </View>

      <View style={styles.scoreRow}>
        <Text style={styles.score}>{score}</Text>
        <Text style={styles.outOf}>/ 100</Text>
        <View style={styles.positive}>
          <Ionicons name="arrow-up" size={11} color={C.success} />
          <Text style={styles.positiveText}>Good</Text>
        </View>
      </View>

      <View style={styles.progressBackground}>
        <View
          style={[styles.progress, { width: `${Math.min(score, 100)}%` }]}
        />
      </View>

      <Text style={styles.footer}>
        Keep it up! You're building better digital habits.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: C.surface,
    borderRadius: 21,
    padding: 17,
    borderWidth: 1,
    borderColor: C.border,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 13,
    fontWeight: "800",
    color: C.text,
  },
  subtitle: {
    color: C.secondary,
    fontSize: 10,
    marginTop: 5,
  },
  icon: {
    width: 35,
    height: 35,
    borderRadius: 12,
    backgroundColor: "#E7F8F0",
    alignItems: "center",
    justifyContent: "center",
  },
  scoreRow: {
    flexDirection: "row",
    alignItems: "baseline",
    marginTop: 19,
  },
  score: {
    color: C.text,
    fontSize: 36,
    fontWeight: "800",
  },
  outOf: {
    fontSize: 12,
    color: C.secondary,
    marginLeft: 4,
  },
  positive: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E7F8F0",
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 9,
    marginLeft: "auto",
  },
  positiveText: {
    fontSize: 10,
    fontWeight: "700",
    color: C.success,
  },
  progressBackground: {
    height: 7,
    borderRadius: 10,
    backgroundColor: "#EEEEF5",
    marginTop: 13,
    overflow: "hidden",
  },
  progress: {
    height: "100%",
    borderRadius: 10,
    backgroundColor: C.primary,
  },
  footer: {
    fontSize: 10,
    color: C.secondary,
    lineHeight: 16,
    marginTop: 12,
  },
});
