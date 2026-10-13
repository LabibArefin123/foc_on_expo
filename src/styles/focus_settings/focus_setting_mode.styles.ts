
import { StyleSheet } from "react-native";

import { DASHBOARD_COLORS as C } from "@/constants/dashboard";

export const modeStyles = StyleSheet.create({
  modeContainer: {
    flexDirection: "row",
    gap: 11,
  },
  modeCard: {
    flex: 1,
    backgroundColor: C.surface,
    borderRadius: 18,
    padding: 14,
    borderWidth: 1.5,
    borderColor: C.border,
    minHeight: 166,
  },
  selectedMode: {
    borderColor: C.primary,
    backgroundColor: "#F7F6FF",
  },
  modeIcon: {
    width: 40,
    height: 40,
    borderRadius: 13,
    backgroundColor: "#EFEDFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 13,
  },
  selectedModeIcon: {
    backgroundColor: C.primary,
  },
  modeTitle: {
    fontSize: 14,
    color: C.text,
    fontWeight: "800",
  },
  modeDescription: {
    fontSize: 10,
    lineHeight: 16,
    color: C.secondary,
    marginTop: 6,
  },
  selectedIndicator: {
    position: "absolute",
    top: 12,
    right: 11,
  },
});
