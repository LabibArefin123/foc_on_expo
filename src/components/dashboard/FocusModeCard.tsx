import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Switch, Text, View } from "react-native";
import { DASHBOARD_COLORS as C } from "../../constants/dashboard";

interface Props {
  enabled: boolean;
  onToggle: (value: boolean) => void;
  strictMode: boolean;
  onModeChange: () => void;
  sessionActive: boolean;
  remainingSeconds: number;
  onStartPause: () => void;
}

export default function FocusModeCard({
  enabled,
  onToggle,
  strictMode,
  onModeChange,
  sessionActive,
  remainingSeconds,
  onStartPause,
}: Props) {
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  const timer = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0",
  )}`;

  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <View style={styles.statusGroup}>
          <View style={styles.iconBox}>
            <Ionicons name="flash" size={21} color="#FFFFFF" />
          </View>

          <View>
            <Text style={styles.cardTitle}>Focus Mode</Text>
            <Text style={styles.statusText}>
              {enabled ? "You're in control" : "Ready when you are"}
            </Text>
          </View>
        </View>

        <Switch
          value={enabled}
          onValueChange={onToggle}
          trackColor={{
            false: "#53546D",
            true: "#A89EFF",
          }}
          thumbColor="#FFFFFF"
        />
      </View>

      <View style={styles.divider} />

      <View style={styles.modeRow}>
        <View>
          <Text style={styles.smallLabel}>YOUR FOCUS MODE</Text>
          <Pressable style={styles.modeButton} onPress={onModeChange}>
            <Ionicons
              name={strictMode ? "shield-checkmark" : "leaf"}
              size={15}
              color="#C7C0FF"
            />
            <Text style={styles.modeText}>
              {strictMode ? "Strict Mode" : "Flexible Mode"}
            </Text>
            <Ionicons name="chevron-down" size={14} color="#C7C0FF" />
          </Pressable>
        </View>

        <View style={styles.activeBadge}>
          <View
            style={[
              styles.activeDot,
              { backgroundColor: enabled ? "#48D6A0" : "#85869B" },
            ]}
          />
          <Text style={styles.activeText}>{enabled ? "ACTIVE" : "OFF"}</Text>
        </View>
      </View>

      <View style={styles.timerContainer}>
        <Text style={styles.timerLabel}>
          {sessionActive ? "TIME REMAINING" : "READY TO FOCUS?"}
        </Text>

        <Text style={styles.timer}>{timer}</Text>

        <Text style={styles.timerSubtext}>
          {sessionActive
            ? "Stay present. You've got this."
            : "Make today a little more productive."}
        </Text>
      </View>

      <Pressable
        style={[styles.startButton, !enabled && styles.disabledButton]}
        onPress={onStartPause}
        disabled={!enabled}
      >
        <Ionicons
          name={sessionActive ? "pause" : "play"}
          size={18}
          color={C.dark}
        />
        <Text style={styles.startButtonText}>
          {sessionActive ? "Pause Session" : "Start Focus Session"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: C.dark,
    borderRadius: 25,
    padding: 21,
    marginBottom: 23,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  statusGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconBox: {
    width: 43,
    height: 43,
    borderRadius: 14,
    backgroundColor: C.primary,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  cardTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  statusText: {
    color: "#A5A6B9",
    fontSize: 12,
    marginTop: 4,
  },
  divider: {
    height: 1,
    backgroundColor: "#393A51",
    marginVertical: 19,
  },
  modeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  smallLabel: {
    color: "#9697AC",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1,
  },
  modeButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    marginTop: 9,
  },
  modeText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "600",
  },
  activeBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#34364C",
    borderRadius: 20,
    paddingHorizontal: 11,
    paddingVertical: 7,
    gap: 6,
  },
  activeDot: {
    width: 7,
    height: 7,
    borderRadius: 5,
  },
  activeText: {
    color: "#FFFFFF",
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 0.7,
  },
  timerContainer: {
    alignItems: "center",
    paddingVertical: 24,
  },
  timerLabel: {
    color: "#A5A6B9",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1.5,
  },
  timer: {
    color: "#FFFFFF",
    fontSize: 57,
    fontWeight: "800",
    letterSpacing: -2,
    marginVertical: 5,
    fontVariant: ["tabular-nums"],
  },
  timerSubtext: {
    color: "#A5A6B9",
    fontSize: 12,
  },
  startButton: {
    height: 51,
    borderRadius: 15,
    backgroundColor: "#C5BEFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
  },
  disabledButton: {
    opacity: 0.45,
  },
  startButtonText: {
    color: C.dark,
    fontSize: 14,
    fontWeight: "800",
  },
});
