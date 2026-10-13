
import { StyleSheet } from "react-native";

import { DASHBOARD_COLORS as C } from "@/constants/dashboard";

export const durationStyles = StyleSheet.create({
  durationCard: {
    backgroundColor: C.surface,
    borderRadius: 19,
    padding: 17,
    borderWidth: 1,
    borderColor: C.border,
  },
  durationDisplay: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 19,
  },
  durationText: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 6,
  },
  durationNumber: {
    fontSize: 29,
    fontWeight: "800",
    color: C.text,
  },
  durationUnit: {
    color: C.secondary,
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1,
  },
  durationOptions: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  durationButton: {
    flex: 1,
    minWidth: "28%",
    height: 39,
    borderRadius: 11,
    backgroundColor: "#F5F5FA",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedDuration: {
    backgroundColor: C.primary,
  },
  durationButtonText: {
    color: C.secondary,
    fontSize: 11,
    fontWeight: "700",
  },
  selectedDurationText: {
    color: "#FFFFFF",
  },
});
