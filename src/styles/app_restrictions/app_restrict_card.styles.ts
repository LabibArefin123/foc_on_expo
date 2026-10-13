import { StyleSheet } from "react-native";
import { DASHBOARD_COLORS as C } from "@/constants/dashboard";

export const cardStyles = StyleSheet.create({
  // App Card
  appCard: {
    backgroundColor: C.surface,
    borderRadius: 20,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: C.border,
  },
  appHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  appIcon: {
    width: 46,
    height: 46,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  appInfo: {
    flex: 1,
    marginLeft: 12,
  },
  appName: {
    color: C.text,
    fontSize: 14,
    fontWeight: "800",
  },
  appUsage: {
    color: C.secondary,
    fontSize: 10,
    marginTop: 5,
  },

  // Usage
  usageSection: {
    marginTop: 19,
  },
  usageHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 9,
  },
  usageLabel: {
    fontSize: 9,
    color: C.secondary,
    fontWeight: "800",
    letterSpacing: 0.7,
  },
  usageValue: {
    fontSize: 10,
    color: C.text,
    fontWeight: "700",
  },
  progressBackground: {
    height: 6,
    borderRadius: 10,
    backgroundColor: "#EFEFF5",
    overflow: "hidden",
  },
  progress: {
    height: "100%",
    borderRadius: 10,
  },

  // Daily Limit
  limitRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 17,
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: C.border,
  },
  limitLabel: {
    fontSize: 11,
    fontWeight: "700",
    color: C.secondary,
  },
  limitControls: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  limitButton: {
    width: 29,
    height: 29,
    borderRadius: 9,
    backgroundColor: "#F0EFF9",
    alignItems: "center",
    justifyContent: "center",
  },
  disabledButton: {
    opacity: 0.45,
  },
  limitValue: {
    color: C.text,
    fontSize: 12,
    fontWeight: "800",
    minWidth: 48,
    textAlign: "center",
  },
});