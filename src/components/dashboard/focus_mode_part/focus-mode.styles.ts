import { StyleSheet } from "react-native";
import { DASHBOARD_COLORS as C } from "../../../constants/dashboard";

export const focusModeStyles = StyleSheet.create({
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