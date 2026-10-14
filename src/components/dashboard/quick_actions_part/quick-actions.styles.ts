import { StyleSheet } from "react-native";
import { DASHBOARD_COLORS as C } from "../../../constants/dashboard";

export const quickActionsStyles = StyleSheet.create({
  container: {
    marginBottom: 25,
  },
  title: {
    fontSize: 18,
    fontWeight: "800",
    color: C.text,
    marginBottom: 13,
  },
  actions: {
    gap: 11,
  },
  actionCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: C.surface,
    borderRadius: 18,
    padding: 15,
    borderWidth: 1,
    borderColor: C.border,
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },
  iconBox: {
    width: 45,
    height: 45,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  restrictionsIcon: {
    backgroundColor: "#EFEDFF",
  },
  settingsIcon: {
    backgroundColor: "#E7F8F0",
  },
  actionContent: {
    flex: 1,
    marginLeft: 13,
  },
  actionTitle: {
    fontSize: 13,
    fontWeight: "800",
    color: C.text,
  },
  actionSubtitle: {
    fontSize: 11,
    color: C.secondary,
    marginTop: 5,
  },
});