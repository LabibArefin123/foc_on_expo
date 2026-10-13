import { useState } from "react";
import { Alert } from "react-native";

import { DEFAULT_FOCUS_SETTINGS } from "@/constants/focus-settings";
import type { FocusMode } from "@/types/focus-settings.types";

export function useFocusSettings() {
  // Focus settings
  const [mode, setMode] = useState<FocusMode>(DEFAULT_FOCUS_SETTINGS.mode);

  const [focusDuration, setFocusDuration] = useState(
    DEFAULT_FOCUS_SETTINGS.focusDuration,
  );

  const [breakDuration, setBreakDuration] = useState(
    DEFAULT_FOCUS_SETTINGS.breakDuration,
  );

  // Session preferences
  const [autoBreak, setAutoBreak] = useState(DEFAULT_FOCUS_SETTINGS.autoBreak);

  const [notifications, setNotifications] = useState(
    DEFAULT_FOCUS_SETTINGS.notifications,
  );

  const [soundEnabled, setSoundEnabled] = useState(
    DEFAULT_FOCUS_SETTINGS.soundEnabled,
  );

  const [vibration, setVibration] = useState(DEFAULT_FOCUS_SETTINGS.vibration);

  // Save preferences
  const saveSettings = () => {
    Alert.alert(
      "Settings updated",
      "Your focus preferences have been updated for this session.",
    );
  };

  return {
    mode,
    setMode,
    focusDuration,
    setFocusDuration,
    breakDuration,
    setBreakDuration,
    autoBreak,
    setAutoBreak,
    notifications,
    setNotifications,
    soundEnabled,
    setSoundEnabled,
    vibration,
    setVibration,
    saveSettings,
  };
}
