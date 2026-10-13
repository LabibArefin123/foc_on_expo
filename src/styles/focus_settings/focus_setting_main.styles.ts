import { StyleSheet } from "react-native";

import { DASHBOARD_COLORS as C } from "@/constants/dashboard";

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
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 17,
    color: C.text,
    fontWeight: "800",
  },
  sectionSubtitle: {
    fontSize: 11,
    color: C.secondary,
    marginTop: 5,
    marginBottom: 14,
  },
});
