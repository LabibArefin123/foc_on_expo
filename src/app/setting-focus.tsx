import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, ScrollView, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { DASHBOARD_COLORS as C } from "@/constants/dashboard";

import {
  BREAK_DURATIONS,
  DEFAULT_FOCUS_SETTINGS,
  FOCUS_DURATIONS,
} from "@/constants/focus-settings";

import {
  DurationSelector,
  FocusModeSelector,
  FocusSettingsFooter,
  FocusSettingsHeader,
  FocusSettingsIntro,
  SavePreferencesButton,
  SessionPreferences,
} from "@/components/focus-settings/focus-settings-components";

import { mainStyles } from "@/styles/focus_settings/focus_setting_main.styles";

import type { FocusMode } from "@/types/focus-settings.types";

export default function FocusSettingsScreen() {
  const router = useRouter();

  // Focus Settings
  const [mode, setMode] = useState<FocusMode>(DEFAULT_FOCUS_SETTINGS.mode);

  const [focusDuration, setFocusDuration] = useState(
    DEFAULT_FOCUS_SETTINGS.focusDuration,
  );

  const [breakDuration, setBreakDuration] = useState(
    DEFAULT_FOCUS_SETTINGS.breakDuration,
  );

  // Session Preferences
  const [autoBreak, setAutoBreak] = useState(DEFAULT_FOCUS_SETTINGS.autoBreak);

  const [notifications, setNotifications] = useState(
    DEFAULT_FOCUS_SETTINGS.notifications,
  );

  const [soundEnabled, setSoundEnabled] = useState(
    DEFAULT_FOCUS_SETTINGS.soundEnabled,
  );

  const [vibration, setVibration] = useState(DEFAULT_FOCUS_SETTINGS.vibration);

  // Save Settings
  const saveSettings = () => {
    Alert.alert(
      "Settings updated",
      "Your focus preferences have been updated for this session.",
    );
  };

  return (
    <SafeAreaView style={mainStyles.safeArea} edges={["top"]}>
      <StatusBar barStyle="dark-content" backgroundColor={C.background} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={mainStyles.content}
      >
        {/* Header */}
        <FocusSettingsHeader onBack={() => router.back()} />

        {/* Introduction */}
        <FocusSettingsIntro />

        {/* Focus Mode */}
        <FocusModeSelector mode={mode} onModeChange={setMode} />

        {/* Focus Duration */}
        <DurationSelector
          title="Focus duration"
          subtitle="How long do you want to concentrate?"
          duration={focusDuration}
          durations={FOCUS_DURATIONS}
          icon="timer-outline"
          iconColor={C.primary}
          onDurationChange={setFocusDuration}
        />

        {/* Break Duration */}
        <DurationSelector
          title="Break duration"
          subtitle="Give your mind some time to recharge"
          duration={breakDuration}
          durations={BREAK_DURATIONS}
          icon="cafe-outline"
          iconColor={C.success}
          onDurationChange={setBreakDuration}
        />

        {/* Session Preferences */}
        <SessionPreferences
          autoBreak={autoBreak}
          notifications={notifications}
          soundEnabled={soundEnabled}
          vibration={vibration}
          onAutoBreakChange={setAutoBreak}
          onNotificationsChange={setNotifications}
          onSoundChange={setSoundEnabled}
          onVibrationChange={setVibration}
        />

        {/* Save */}
        <SavePreferencesButton onSave={saveSettings} />

        {/* Footer */}
        <FocusSettingsFooter />
      </ScrollView>
    </SafeAreaView>
  );
}
