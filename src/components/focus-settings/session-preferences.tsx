import { Ionicons } from "@expo/vector-icons";
import { Pressable, Switch, Text, View } from "react-native";

import { DASHBOARD_COLORS as C } from "@/constants/dashboard";

import { actionStyles } from "@/styles/focus_settings/focus_setting_actions.styles";
import { mainStyles } from "@/styles/focus_settings/focus_setting_main.styles";
import { preferencesStyles } from "@/styles/focus_settings/focus_setting_preferences.styles";

import type {
  SavePreferencesProps,
  SessionPreferencesProps,
  SettingSwitchProps,
} from "@/types/focus-settings.types";

// Individual preference switch
function SettingSwitch({
  title,
  description,
  value,
  onChange,
  icon,
}: SettingSwitchProps) {
  return (
    <View style={preferencesStyles.switchRow}>
      <View style={preferencesStyles.settingIcon}>
        <Ionicons name={icon} size={19} color={C.primary} />
      </View>

      <View style={preferencesStyles.switchInfo}>
        <Text style={preferencesStyles.switchTitle}>{title}</Text>
        <Text style={preferencesStyles.switchDescription}>{description}</Text>
      </View>

      <Switch
        value={value}
        onValueChange={onChange}
        trackColor={{
          false: "#D8D9E3",
          true: "#A89EFF",
        }}
        thumbColor="#FFFFFF"
      />
    </View>
  );
}

// Session preference controls
export function SessionPreferences({
  autoBreak,
  notifications,
  soundEnabled,
  vibration,
  onAutoBreakChange,
  onNotificationsChange,
  onSoundChange,
  onVibrationChange,
}: SessionPreferencesProps) {
  return (
    <View style={mainStyles.section}>
      <Text style={mainStyles.sectionTitle}>Session preferences</Text>

      <Text style={mainStyles.sectionSubtitle}>
        Make your focus sessions more comfortable
      </Text>

      <View style={preferencesStyles.settingsCard}>
        <SettingSwitch
          icon="cafe-outline"
          title="Automatic breaks"
          description="Start a break when focus ends"
          value={autoBreak}
          onChange={onAutoBreakChange}
        />

        <View style={preferencesStyles.divider} />

        <SettingSwitch
          icon="notifications-outline"
          title="Notifications"
          description="Get focus session reminders"
          value={notifications}
          onChange={onNotificationsChange}
        />

        <View style={preferencesStyles.divider} />

        <SettingSwitch
          icon="volume-high-outline"
          title="Sound effects"
          description="Play sounds when sessions end"
          value={soundEnabled}
          onChange={onSoundChange}
        />

        <View style={preferencesStyles.divider} />

        <SettingSwitch
          icon="phone-portrait-outline"
          title="Vibration"
          description="Vibrate when sessions finish"
          value={vibration}
          onChange={onVibrationChange}
        />
      </View>
    </View>
  );
}

// Save preferences button
export function SavePreferencesButton({ onSave }: SavePreferencesProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        actionStyles.saveButton,
        pressed && actionStyles.saveButtonPressed,
      ]}
      onPress={onSave}
    >
      <Ionicons name="checkmark-circle-outline" size={20} color="#FFFFFF" />
      <Text style={actionStyles.saveButtonText}>Save preferences</Text>
    </Pressable>
  );
}

// Screen footer
export function FocusSettingsFooter() {
  return (
    <Text style={actionStyles.footer}>
      Build better habits, one focused session at a time.
    </Text>
  );
}
