import type { Ionicons } from "@expo/vector-icons";
import type { ComponentProps } from "react";

export type FocusMode = "flexible" | "strict";

export interface SettingSwitchProps {
  title: string;
  description: string;
  value: boolean;
  onChange: (value: boolean) => void;
  icon: ComponentProps<typeof Ionicons>["name"];
}

export interface FocusSettingsHeaderProps {
  onBack: () => void;
}

export interface FocusModeSelectorProps {
  mode: FocusMode;
  onModeChange: (mode: FocusMode) => void;
}

export interface DurationSelectorProps {
  title: string;
  subtitle: string;
  duration: number;
  durations: number[];
  icon: ComponentProps<typeof Ionicons>["name"];
  iconColor: string;
  onDurationChange: (duration: number) => void;
}

export interface SessionPreferencesProps {
  autoBreak: boolean;
  notifications: boolean;
  soundEnabled: boolean;
  vibration: boolean;
  onAutoBreakChange: (value: boolean) => void;
  onNotificationsChange: (value: boolean) => void;
  onSoundChange: (value: boolean) => void;
  onVibrationChange: (value: boolean) => void;
}

export interface SavePreferencesProps {
  onSave: () => void;
}
