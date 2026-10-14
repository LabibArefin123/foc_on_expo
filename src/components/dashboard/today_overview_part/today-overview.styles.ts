import { StyleSheet } from "react-native";
import { DASHBOARD_COLORS as C } from "../../../constants/dashboard";

export const todayOverviewStyles = StyleSheet.create({
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
  today: {
    color: C.primary,
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1,
  },
  grid: {
    flexDirection: "row",
    gap: 10,
  },
  card: {
    flex: 1,
    backgroundColor: C.surface,
    borderRadius: 19,
    padding: 13,
    borderWidth: 1,
    borderColor: C.border,
  },
  iconBox: {
    width: 37,
    height: 37,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
  },
  value: {
    fontSize: 19,
    fontWeight: "800",
    color: C.text,
  },
  label: {
    fontSize: 10,
    color: C.secondary,
    marginTop: 5,
  },
});