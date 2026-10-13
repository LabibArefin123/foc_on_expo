import { StyleSheet } from "react-native";
import { DASHBOARD_COLORS as C } from "@/constants/dashboard";

export const summaryStyles = StyleSheet.create({
  summaryCard: {
    backgroundColor: C.dark,
    borderRadius: 23,
    padding: 20,
    marginBottom: 27,
  },
  summaryTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  summaryLabel: {
    color: "#A5A6B9",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.2,
  },
  summaryNumber: {
    color: "#FFFFFF",
    fontSize: 39,
    fontWeight: "800",
    marginTop: 7,
  },
  summaryTotal: {
    color: "#A5A6B9",
    fontSize: 19,
  },
  summaryDescription: {
    color: "#A5A6B9",
    fontSize: 11,
    marginTop: 4,
  },
  summaryIcon: {
    width: 55,
    height: 55,
    borderRadius: 18,
    backgroundColor: C.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  summaryDivider: {
    height: 1,
    backgroundColor: "#393A51",
    marginVertical: 19,
  },
  masterRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  masterInfo: {
    flex: 1,
  },
  masterTitle: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700",
  },
  masterSubtitle: {
    color: "#A5A6B9",
    fontSize: 10,
    marginTop: 5,
  },
});