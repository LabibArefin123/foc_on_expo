import { DASHBOARD_COLORS as C } from "@/constants/dashboard";
import { StyleSheet } from "react-native";

export const sectionStyles = StyleSheet.create({
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "800",
    color: C.text,
  },
  sectionSubtitle: {
    fontSize: 11,
    color: C.secondary,
    marginTop: 5,
  },
  appCount: {
    fontSize: 9,
    fontWeight: "800",
    color: C.primary,
    letterSpacing: 0.7,
  },
});
