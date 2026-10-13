import { ScrollView } from "react-native";

import { DASHBOARD_COLORS as C } from "@/constants/dashboard";

import { BREAK_DURATIONS, FOCUS_DURATIONS } from "@/constants/focus-settings";

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

import type { useFocusSettings } from "@/hooks/use-focus-settings";

type FocusSettingsContentProps = ReturnType<typeof useFocusSettings> & {
  onBack: () => void;
};

export default function FocusSettingsContent({
  onBack,
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
}: FocusSettingsContentProps) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={mainStyles.content}
    >
      {/* Header */}
      <FocusSettingsHeader onBack={onBack} />

      {/* Introduction */}
      <FocusSettingsIntro />

      {/* Focus mode */}
      <FocusModeSelector mode={mode} onModeChange={setMode} />

      {/* Focus duration */}
      <DurationSelector
        title="Focus duration"
        subtitle="How long do you want to concentrate?"
        duration={focusDuration}
        durations={FOCUS_DURATIONS}
        icon="timer-outline"
        iconColor={C.primary}
        onDurationChange={setFocusDuration}
      />

      {/* Break duration */}
      <DurationSelector
        title="Break duration"
        subtitle="Give your mind some time to recharge"
        duration={breakDuration}
        durations={BREAK_DURATIONS}
        icon="cafe-outline"
        iconColor={C.success}
        onDurationChange={setBreakDuration}
      />

      {/* Session preferences */}
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
  );
}
