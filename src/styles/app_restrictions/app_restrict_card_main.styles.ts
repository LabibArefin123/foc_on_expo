import { DASHBOARD_COLORS as C } from "@/constants/dashboard";
import { StyleSheet } from "react-native";

export const cardMainStyles = StyleSheet.create({
  appCard: {
    backgroundColor: C.surface,
    borderRadius: 20,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: C.border,
  },
  appHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  appIcon: {
    width: 46,
    height: 46,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  appInfo: {
    flex: 1,
    marginLeft: 12,
  },
  appName: {
    color: C.text,
    fontSize: 14,
    fontWeight: "800",
  },
  appUsage: {
    color: C.secondary,
    fontSize: 10,
    marginTop: 5,
  },
});
