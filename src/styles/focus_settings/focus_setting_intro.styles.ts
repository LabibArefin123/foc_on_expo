
import { StyleSheet } from "react-native";

import { DASHBOARD_COLORS as C } from "@/constants/dashboard";

export const introStyles = StyleSheet.create({
  introCard: {
    backgroundColor: C.dark,
    borderRadius: 23,
    padding: 21,
    marginBottom: 27,
  },
  introIcon: {
    width: 47,
    height: 47,
    borderRadius: 15,
    backgroundColor: C.primary,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 17,
  },
  introTitle: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "800",
  },
  introDescription: {
    color: "#A5A6B9",
    fontSize: 12,
    lineHeight: 19,
    marginTop: 8,
  },
});
