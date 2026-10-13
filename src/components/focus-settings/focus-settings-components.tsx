import { Ionicons } from "@expo/vector-icons";
import { Pressable, Switch, Text, View } from "react-native";

import { DASHBOARD_COLORS as C } from "@/constants/dashboard";

import type {
  DurationSelectorProps,
  FocusModeSelectorProps,
  FocusSettingsHeaderProps,
  SavePreferencesProps,
  SessionPreferencesProps,
  SettingSwitchProps,
} from "@/types/focus-settings.types";

import { actionStyles } from "@/styles/focus_settings/focus_setting_actions.styles";
import { durationStyles } from "@/styles/focus_settings/focus_setting_duration.styles";
import { headerStyles } from "@/styles/focus_settings/focus_setting_header.styles";
import { introStyles } from "@/styles/focus_settings/focus_setting_intro.styles";
import { mainStyles } from "@/styles/focus_settings/focus_setting_main.styles";
import { modeStyles } from "@/styles/focus_settings/focus_setting_mode.styles";
import { preferencesStyles } from "@/styles/focus_settings/focus_setting_preferences.styles";

// Header
export function FocusSettingsHeader({ onBack }: FocusSettingsHeaderProps) {
  return (
    <View style={headerStyles.header}>
      <Pressable style={headerStyles.backButton} onPress={onBack}>
        <Ionicons name="arrow-back" size={22} color={C.text} />
      </Pressable>

      <View style={headerStyles.headerText}>
        <Text style={headerStyles.headerTitle}>Focus settings</Text>

        <Text style={headerStyles.headerSubtitle}>
          Personalize your productivity
        </Text>
      </View>
    </View>
  );
}

// Intro
export function FocusSettingsIntro() {
  return (
    <View style={introStyles.introCard}>
      <View style={introStyles.introIcon}>
        <Ionicons name="options" size={25} color="#FFFFFF" />
      </View>

      <Text style={introStyles.introTitle}>Make focus work for you</Text>

      <Text style={introStyles.introDescription}>
        Customize your sessions, choose your focus style and create a routine
        that fits your lifestyle.
      </Text>
    </View>
  );
}

// Focus Mode Selector
export function FocusModeSelector({
  mode,
  onModeChange,
}: FocusModeSelectorProps) {
  return (
    <View style={mainStyles.section}>
      <Text style={mainStyles.sectionTitle}>Focus mode</Text>

      <Text style={mainStyles.sectionSubtitle}>
        Choose how you want to stay productive
      </Text>

      <View style={modeStyles.modeContainer}>
        <Pressable
          style={[
            modeStyles.modeCard,
            mode === "flexible" && modeStyles.selectedMode,
          ]}
          onPress={() => onModeChange("flexible")}
        >
          <View
            style={[
              modeStyles.modeIcon,
              mode === "flexible" && modeStyles.selectedModeIcon,
            ]}
          >
            <Ionicons
              name="leaf-outline"
              size={22}
              color={mode === "flexible" ? "#FFFFFF" : C.primary}
            />
          </View>

          <Text style={modeStyles.modeTitle}>Flexible</Text>

          <Text style={modeStyles.modeDescription}>
            Take control with adjustable focus sessions.
          </Text>

          {mode === "flexible" && (
            <View style={modeStyles.selectedIndicator}>
              <Ionicons name="checkmark-circle" size={18} color={C.primary} />
            </View>
          )}
        </Pressable>

        <Pressable
          style={[
            modeStyles.modeCard,
            mode === "strict" && modeStyles.selectedMode,
          ]}
          onPress={() => onModeChange("strict")}
        >
          <View
            style={[
              modeStyles.modeIcon,
              mode === "strict" && modeStyles.selectedModeIcon,
            ]}
          >
            <Ionicons
              name="shield-checkmark-outline"
              size={22}
              color={mode === "strict" ? "#FFFFFF" : C.primary}
            />
          </View>

          <Text style={modeStyles.modeTitle}>Strict</Text>

          <Text style={modeStyles.modeDescription}>
            Follow stronger restrictions during focus sessions.
          </Text>

          {mode === "strict" && (
            <View style={modeStyles.selectedIndicator}>
              <Ionicons name="checkmark-circle" size={18} color={C.primary} />
            </View>
          )}
        </Pressable>
      </View>
    </View>
  );
}

// Duration Selector
export function DurationSelector({
  title,
  subtitle,
  duration,
  durations,
  icon,
  iconColor,
  onDurationChange,
}: DurationSelectorProps) {
  return (
    <View style={mainStyles.section}>
      <Text style={mainStyles.sectionTitle}>{title}</Text>

      <Text style={mainStyles.sectionSubtitle}>{subtitle}</Text>

      <View style={durationStyles.durationCard}>
        <View style={durationStyles.durationDisplay}>
          <Ionicons name={icon} size={25} color={iconColor} />

          <View style={durationStyles.durationText}>
            <Text style={durationStyles.durationNumber}>{duration}</Text>

            <Text style={durationStyles.durationUnit}>MINUTES</Text>
          </View>
        </View>

        <View style={durationStyles.durationOptions}>
          {durations.map((item) => (
            <Pressable
              key={item}
              onPress={() => onDurationChange(item)}
              style={[
                durationStyles.durationButton,
                duration === item && durationStyles.selectedDuration,
              ]}
            >
              <Text
                style={[
                  durationStyles.durationButtonText,
                  duration === item && durationStyles.selectedDurationText,
                ]}
              >
                {item}m
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
}

// Individual Setting Switch
export function SettingSwitch({
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

// Session Preferences
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

// Save Preferences Button
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

// Footer
export function FocusSettingsFooter() {
  return (
    <Text style={actionStyles.footer}>
      Build better habits, one focused session at a time.
    </Text>
  );
}
