import { Ionicons } from "@expo/vector-icons";
import { Pressable, Switch, Text, View } from "react-native";

import { DASHBOARD_COLORS as C } from "@/constants/dashboard";

import type {
  FocusSettingsHeaderProps,
  FocusModeSelectorProps,
  DurationSelectorProps,
  SettingSwitchProps,
  SessionPreferencesProps,
  SavePreferencesProps,
} from "@/types/focus-settings.types";

import { styles } from "@/styles/focus-settings.styles";

// Header
export function FocusSettingsHeader({ onBack }: FocusSettingsHeaderProps) {
  return (
    <View style={styles.header}>
      <Pressable style={styles.backButton} onPress={onBack}>
        <Ionicons name="arrow-back" size={22} color={C.text} />
      </Pressable>

      <View style={styles.headerText}>
        <Text style={styles.headerTitle}>Focus settings</Text>
        <Text style={styles.headerSubtitle}>Personalize your productivity</Text>
      </View>
    </View>
  );
}

// Intro
export function FocusSettingsIntro() {
  return (
    <View style={styles.introCard}>
      <View style={styles.introIcon}>
        <Ionicons name="options" size={25} color="#FFFFFF" />
      </View>

      <Text style={styles.introTitle}>Make focus work for you</Text>

      <Text style={styles.introDescription}>
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
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Focus mode</Text>

      <Text style={styles.sectionSubtitle}>
        Choose how you want to stay productive
      </Text>

      <View style={styles.modeContainer}>
        <Pressable
          style={[styles.modeCard, mode === "flexible" && styles.selectedMode]}
          onPress={() => onModeChange("flexible")}
        >
          <View
            style={[
              styles.modeIcon,
              mode === "flexible" && styles.selectedModeIcon,
            ]}
          >
            <Ionicons
              name="leaf-outline"
              size={22}
              color={mode === "flexible" ? "#FFFFFF" : C.primary}
            />
          </View>

          <Text style={styles.modeTitle}>Flexible</Text>

          <Text style={styles.modeDescription}>
            Take control with adjustable focus sessions.
          </Text>

          {mode === "flexible" && (
            <View style={styles.selectedIndicator}>
              <Ionicons name="checkmark-circle" size={18} color={C.primary} />
            </View>
          )}
        </Pressable>

        <Pressable
          style={[styles.modeCard, mode === "strict" && styles.selectedMode]}
          onPress={() => onModeChange("strict")}
        >
          <View
            style={[
              styles.modeIcon,
              mode === "strict" && styles.selectedModeIcon,
            ]}
          >
            <Ionicons
              name="shield-checkmark-outline"
              size={22}
              color={mode === "strict" ? "#FFFFFF" : C.primary}
            />
          </View>

          <Text style={styles.modeTitle}>Strict</Text>

          <Text style={styles.modeDescription}>
            Follow stronger restrictions during focus sessions.
          </Text>

          {mode === "strict" && (
            <View style={styles.selectedIndicator}>
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
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>

      <Text style={styles.sectionSubtitle}>{subtitle}</Text>

      <View style={styles.durationCard}>
        <View style={styles.durationDisplay}>
          <Ionicons name={icon} size={25} color={iconColor} />

          <View style={styles.durationText}>
            <Text style={styles.durationNumber}>{duration}</Text>

            <Text style={styles.durationUnit}>MINUTES</Text>
          </View>
        </View>

        <View style={styles.durationOptions}>
          {durations.map((item) => (
            <Pressable
              key={item}
              onPress={() => onDurationChange(item)}
              style={[
                styles.durationButton,
                duration === item && styles.selectedDuration,
              ]}
            >
              <Text
                style={[
                  styles.durationButtonText,
                  duration === item && styles.selectedDurationText,
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
    <View style={styles.switchRow}>
      <View style={styles.settingIcon}>
        <Ionicons name={icon} size={19} color={C.primary} />
      </View>

      <View style={styles.switchInfo}>
        <Text style={styles.switchTitle}>{title}</Text>

        <Text style={styles.switchDescription}>{description}</Text>
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
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Session preferences</Text>

      <Text style={styles.sectionSubtitle}>
        Make your focus sessions more comfortable
      </Text>

      <View style={styles.settingsCard}>
        <SettingSwitch
          icon="cafe-outline"
          title="Automatic breaks"
          description="Start a break when focus ends"
          value={autoBreak}
          onChange={onAutoBreakChange}
        />

        <View style={styles.divider} />

        <SettingSwitch
          icon="notifications-outline"
          title="Notifications"
          description="Get focus session reminders"
          value={notifications}
          onChange={onNotificationsChange}
        />

        <View style={styles.divider} />

        <SettingSwitch
          icon="volume-high-outline"
          title="Sound effects"
          description="Play sounds when sessions end"
          value={soundEnabled}
          onChange={onSoundChange}
        />

        <View style={styles.divider} />

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
        styles.saveButton,
        pressed && styles.saveButtonPressed,
      ]}
      onPress={onSave}
    >
      <Ionicons name="checkmark-circle-outline" size={20} color="#FFFFFF" />

      <Text style={styles.saveButtonText}>Save preferences</Text>
    </Pressable>
  );
}

// Footer
export function FocusSettingsFooter() {
  return (
    <Text style={styles.footer}>
      Build better habits, one focused session at a time.
    </Text>
  );
}
