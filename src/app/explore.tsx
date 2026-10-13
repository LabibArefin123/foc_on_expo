import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { DASHBOARD_COLORS as C, TODAY_STATS } from "@/constants/dashboard";

export default function ExploreScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Your Progress</Text>
          <Text style={styles.subtitle}>
            Understand your digital habits and build better ones.
          </Text>
        </View>

        <View style={styles.highlightCard}>
          <View style={styles.highlightIcon}>
            <Ionicons name="analytics" size={24} color="#FFFFFF" />
          </View>

          <Text style={styles.highlightLabel}>TODAY'S PRODUCTIVITY SCORE</Text>

          <Text style={styles.highlightScore}>
            {TODAY_STATS.productivityScore}
            <Text style={styles.highlightOutOf}> / 100</Text>
          </Text>

          <Text style={styles.highlightDescription}>
            Every focused minute is a step forward.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Today's statistics</Text>

        <View style={styles.statsContainer}>
          <StatItem
            icon="time-outline"
            label="Focus time"
            value={`${Math.floor(TODAY_STATS.focusMinutes / 60)}h ${
              TODAY_STATS.focusMinutes % 60
            }m`}
            color={C.primary}
            background="#EFEDFF"
          />

          <StatItem
            icon="phone-portrait-outline"
            label="Distraction time"
            value={`${TODAY_STATS.distractionMinutes}m`}
            color={C.warning}
            background="#FFF4E4"
          />

          <StatItem
            icon="checkmark-circle-outline"
            label="Completed sessions"
            value={String(TODAY_STATS.completedSessions)}
            color={C.success}
            background="#E7F8F0"
          />
        </View>

        <View style={styles.comingCard}>
          <View style={styles.comingIcon}>
            <Ionicons name="bar-chart-outline" size={25} color={C.primary} />
          </View>

          <Text style={styles.comingTitle}>More insights are coming</Text>

          <Text style={styles.comingDescription}>
            Weekly screen-time reports, app usage breakdown, focus history and
            productivity trends will appear here.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

interface StatItemProps {
  icon: React.ComponentProps<typeof Ionicons>["name"];
  label: string;
  value: string;
  color: string;
  background: string;
}

function StatItem({ icon, label, value, color, background }: StatItemProps) {
  return (
    <View style={styles.statCard}>
      <View style={[styles.statIcon, { backgroundColor: background }]}>
        <Ionicons name={icon} size={21} color={color} />
      </View>

      <View style={styles.statContent}>
        <Text style={styles.statLabel}>{label}</Text>
        <Text style={styles.statValue}>{value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: C.background,
  },
  content: {
    paddingHorizontal: 21,
    paddingTop: 25,
    paddingBottom: 35,
  },
  header: {
    marginBottom: 23,
  },
  title: {
    fontSize: 27,
    fontWeight: "800",
    color: C.text,
    letterSpacing: -0.8,
  },
  subtitle: {
    fontSize: 13,
    color: C.secondary,
    lineHeight: 20,
    marginTop: 7,
  },
  highlightCard: {
    backgroundColor: C.dark,
    borderRadius: 24,
    padding: 23,
    marginBottom: 27,
  },
  highlightIcon: {
    width: 46,
    height: 46,
    backgroundColor: C.primary,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 23,
  },
  highlightLabel: {
    color: "#B3B3C6",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1.2,
  },
  highlightScore: {
    color: "#FFFFFF",
    fontSize: 52,
    fontWeight: "800",
    marginTop: 8,
  },
  highlightOutOf: {
    color: "#A5A6B9",
    fontSize: 19,
    fontWeight: "500",
  },
  highlightDescription: {
    color: "#B3B3C6",
    fontSize: 12,
    marginTop: 8,
  },
  sectionTitle: {
    color: C.text,
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 14,
  },
  statsContainer: {
    gap: 11,
  },
  statCard: {
    backgroundColor: C.surface,
    borderRadius: 18,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: C.border,
  },
  statIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  statContent: {
    marginLeft: 13,
    flex: 1,
  },
  statLabel: {
    color: C.secondary,
    fontSize: 12,
  },
  statValue: {
    color: C.text,
    fontSize: 18,
    fontWeight: "800",
    marginTop: 4,
  },
  comingCard: {
    backgroundColor: C.surface,
    borderRadius: 21,
    padding: 21,
    alignItems: "center",
    marginTop: 25,
    borderWidth: 1,
    borderColor: C.border,
  },
  comingIcon: {
    width: 51,
    height: 51,
    borderRadius: 17,
    backgroundColor: "#EFEDFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 13,
  },
  comingTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: C.text,
  },
  comingDescription: {
    fontSize: 12,
    lineHeight: 19,
    color: C.secondary,
    textAlign: "center",
    marginTop: 9,
  },
});
