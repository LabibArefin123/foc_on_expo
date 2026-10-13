export const FOCUS_DURATIONS = [15, 25, 30, 45, 60, 90];

export const BREAK_DURATIONS = [5, 10, 15, 20];

export const DEFAULT_FOCUS_SETTINGS = {
  mode: "flexible" as const,
  focusDuration: 25,
  breakDuration: 5,
  autoBreak: true,
  notifications: true,
  soundEnabled: true,
  vibration: true,
};