import { StyleSheet } from "react-native";
import { DASHBOARD_COLORS as C } from "@/constants/dashboard";

export const infoStyles = StyleSheet.create({
  infoCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
    backgroundColor: "#EFEDFF",
    padding: 15,
    borderRadius: 15,
    marginTop: 9,
  },
  infoText: {
    flex: 1,
    fontSize: 11,
    lineHeight: 18,
    color: C.text,
  },
});