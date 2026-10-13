
import { StyleSheet } from "react-native";

import { DASHBOARD_COLORS as C } from "@/constants/dashboard";

export const actionStyles = StyleSheet.create({
  saveButton: {
    height: 53,
    borderRadius: 16,
    backgroundColor: C.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
  },
  saveButtonPressed: {
    opacity: 0.8,
  },
  saveButtonText: {
    fontSize: 13,
    fontWeight: "800",
    color: "#FFFFFF",
  },
  footer: {
    fontSize: 10,
    color: C.secondary,
    textAlign: "center",
    marginTop: 17,
  },
});
