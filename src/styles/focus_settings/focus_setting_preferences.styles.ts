
import { StyleSheet } from "react-native";

import { DASHBOARD_COLORS as C } from "@/constants/dashboard";

export const preferencesStyles = StyleSheet.create({
  settingsCard: {
    backgroundColor: C.surface,
    borderRadius: 19,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: C.border,
  },
  switchRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },
  settingIcon: {
    width: 39,
    height: 39,
    borderRadius: 12,
    backgroundColor: "#EFEDFF",
    alignItems: "center",
    justifyContent: "center",
  },
  switchInfo: {
    flex: 1,
    marginLeft: 11,
    marginRight: 6,
  },
  switchTitle: {
    fontSize: 12,
    fontWeight: "800",
    color: C.text,
  },
  switchDescription: {
    fontSize: 10,
    color: C.secondary,
    marginTop: 4,
  },
  divider: {
    height: 1,
    backgroundColor: C.border,
  },
});
