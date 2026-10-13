import { DASHBOARD_COLORS as C } from "@/constants/dashboard";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: C.background,
  },
  content: {
    paddingHorizontal: 21,
    paddingTop: 15,
    paddingBottom: 35,
  },

  // Header
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

  // Summary
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

  // Section Header
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "800",
    color: C.text,
  },
  sectionSubtitle: {
    fontSize: 11,
    color: C.secondary,
    marginTop: 5,
  },
  appCount: {
    fontSize: 9,
    fontWeight: "800",
    color: C.primary,
    letterSpacing: 0.7,
  },

  // App Card
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

  // Usage
  usageSection: {
    marginTop: 19,
  },
  usageHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 9,
  },
  usageLabel: {
    fontSize: 9,
    color: C.secondary,
    fontWeight: "800",
    letterSpacing: 0.7,
  },
  usageValue: {
    fontSize: 10,
    color: C.text,
    fontWeight: "700",
  },
  progressBackground: {
    height: 6,
    borderRadius: 10,
    backgroundColor: "#EFEFF5",
    overflow: "hidden",
  },
  progress: {
    height: "100%",
    borderRadius: 10,
  },

  // Daily Limit
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

  // Information
  infoCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
    backgroundColor: "#EFEDFF",
    padding: 15,
    borderRadius: 15,
    marginTop: 9,
  },
  infoText: {
    flex: 1,
    fontSize: 11,
    lineHeight: 18,
    color: C.text,
  },
});
    