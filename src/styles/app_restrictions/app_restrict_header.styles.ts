import { DASHBOARD_COLORS as C } from "@/constants/dashboard";
import { StyleSheet } from "react-native";

export const headerStyles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },
  backButton: {
    width: 43,
    height: 43,
    borderRadius: 14,
    backgroundColor: C.surface,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: C.border,
  },
  headerText: {
    marginLeft: 13,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: C.text,
  },
  headerSubtitle: {
    fontSize: 11,
    color: C.secondary,
    marginTop: 4,
  },
});
