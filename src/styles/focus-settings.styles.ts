import { StyleSheet } from "react-native";

import { DASHBOARD_COLORS as C } from "@/constants/dashboard";

export const styles = StyleSheet.create({
  // Screen
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
    marginBottom: 24,
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

  // Intro
  introCard: {
    backgroundColor: C.dark,
    borderRadius: 23,
    padding: 21,
    marginBottom: 27,
  },
  introIcon: {
    width: 47,
    height: 47,
    borderRadius: 15,
    backgroundColor: C.primary,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 17,
  },
  introTitle: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "800",
  },
  introDescription: {
    color: "#A5A6B9",
    fontSize: 12,
    lineHeight: 19,
    marginTop: 8,
  },

  // Sections
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

  // Focus Mode
  modeContainer: {
    flexDirection: "row",
    gap: 11,
  },
  modeCard: {
    flex: 1,
    backgroundColor: C.surface,
    borderRadius: 18,
    padding: 14,
    borderWidth: 1.5,
    borderColor: C.border,
    minHeight: 166,
  },
  selectedMode: {
    borderColor: C.primary,
    backgroundColor: "#F7F6FF",
  },
  modeIcon: {
    width: 40,
    height: 40,
    borderRadius: 13,
    backgroundColor: "#EFEDFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 13,
  },
  selectedModeIcon: {
    backgroundColor: C.primary,
  },
  modeTitle: {
    fontSize: 14,
    color: C.text,
    fontWeight: "800",
  },
  modeDescription: {
    fontSize: 10,
    lineHeight: 16,
    color: C.secondary,
    marginTop: 6,
  },
  selectedIndicator: {
    position: "absolute",
    top: 12,
    right: 11,
  },

  // Duration
  durationCard: {
    backgroundColor: C.surface,
    borderRadius: 19,
    padding: 17,
    borderWidth: 1,
    borderColor: C.border,
  },
  durationDisplay: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 19,
  },
  durationText: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 6,
  },
  durationNumber: {
    fontSize: 29,
    fontWeight: "800",
    color: C.text,
  },
  durationUnit: {
    color: C.secondary,
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1,
  },
  durationOptions: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  durationButton: {
    flex: 1,
    minWidth: "28%",
    height: 39,
    borderRadius: 11,
    backgroundColor: "#F5F5FA",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedDuration: {
    backgroundColor: C.primary,
  },
  durationButtonText: {
    color: C.secondary,
    fontSize: 11,
    fontWeight: "700",
  },
  selectedDurationText: {
    color: "#FFFFFF",
  },

  // Session Preferences
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

  // Save Button
  saveButton: {
    height: 53,
    borderRadius: 16,
    backgroundColor: C.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
  },
  saveButtonPressed: {
    opacity: 0.8,
  },
  saveButtonText: {
    fontSize: 13,
    fontWeight: "800",
    color: "#FFFFFF",
  },

  // Footer
  footer: {
    fontSize: 10,
    color: C.secondary,
    textAlign: "center",
    marginTop: 17,
  },
});