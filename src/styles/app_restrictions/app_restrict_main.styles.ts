import { DASHBOARD_COLORS as C } from "@/constants/dashboard";
import { StyleSheet } from "react-native";

export const mainStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: C.background,
  },
  content: {
    paddingHorizontal: 21,
    paddingTop: 15,
    paddingBottom: 35,
  },
});
