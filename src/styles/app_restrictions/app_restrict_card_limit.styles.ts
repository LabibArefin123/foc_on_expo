
import { StyleSheet } from "react-native";
import { DASHBOARD_COLORS as C } from "@/constants/dashboard";

export const cardLimitStyles = StyleSheet.create({
  limitRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 17,
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: C.border,
  },
  limitLabel: {
    fontSize: 11,
    fontWeight: "700",
    color: C.secondary,
  },
  limitControls: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  limitButton: {
    width: 29,
    height: 29,
    borderRadius: 9,
    backgroundColor: "#F0EFF9",
    alignItems: "center",
    justifyContent: "center",
  },
  disabledButton: {
    opacity: 0.45,
  },
  limitValue: {
    color: C.text,
    fontSize: 12,
    fontWeight: "800",
    minWidth: 48,
    textAlign: "center",
  },
});
