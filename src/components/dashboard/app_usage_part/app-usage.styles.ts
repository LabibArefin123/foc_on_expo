import { StyleSheet } from "react-native";

import { DASHBOARD_COLORS as C } from "@/constants/dashboard";

export const appUsageStyles = StyleSheet.create({
  container: {
    marginBottom: 25,
  },
  heading: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 13,
  },
  title: {
    fontSize: 18,
    fontWeight: "800",
    color: C.text,
  },
  subtitle: {
    fontSize: 11,
    color: C.secondary,
    marginTop: 5,
  },
  viewButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  viewText: {
    fontSize: 12,
    color: C.primary,
    fontWeight: "700",
  },
  card: {
    backgroundColor: C.surface,
    borderRadius: 21,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: C.border,
  },
  appRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    gap: 12,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: C.border,
  },
  appIcon: {
    width: 43,
    height: 43,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  appContent: {
    flex: 1,
  },
  appInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  appName: {
    fontSize: 13,
    color: C.text,
    fontWeight: "700",
  },
  duration: {
    fontSize: 11,
    color: C.secondary,
  },
  progressBackground: {
    height: 6,
    backgroundColor: "#EFEFF5",
    borderRadius: 10,
    overflow: "hidden",
  },
  progress: {
    height: "100%",
    borderRadius: 10,
  },
});
