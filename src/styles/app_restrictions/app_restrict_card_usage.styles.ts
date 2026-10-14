
import { StyleSheet } from "react-native";
import { DASHBOARD_COLORS as C } from "@/constants/dashboard";

export const cardUsageStyles = StyleSheet.create({
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
});
