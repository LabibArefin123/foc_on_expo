import { useEffect, useState } from "react";
import { Alert } from "react-native";

const DEFAULT_SESSION_SECONDS = 25 * 60;

export default function useDashboard() {
  const [focusEnabled, setFocusEnabled] = useState(false);
  const [strictMode, setStrictMode] = useState(false);
  const [sessionActive, setSessionActive] = useState(false);
  const [remainingSeconds, setRemainingSeconds] = useState(
    DEFAULT_SESSION_SECONDS,
  );

  // Focus session countdown
  useEffect(() => {
    if (!sessionActive) return;

    const interval = setInterval(() => {
      setRemainingSeconds((previous) => previous - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [sessionActive]);

  // Handle session completion
  useEffect(() => {
    if (remainingSeconds !== 0 || !sessionActive) return;

    setSessionActive(false);

    Alert.alert(
      "Focus session completed! 🎉",
      "Amazing work! You've completed your focus session.",
    );
  }, [remainingSeconds, sessionActive]);

  // Toggle focus mode
  const handleFocusToggle = (value: boolean) => {
    setFocusEnabled(value);

    if (!value) {
      setSessionActive(false);
    }
  };

  // Start or pause session
  const handleStartPause = () => {
    if (!focusEnabled) return;

    if (remainingSeconds <= 0) {
      setRemainingSeconds(DEFAULT_SESSION_SECONDS);
    }

    setSessionActive((previous) => !previous);
  };

  // Toggle flexible or strict mode
  const handleModeChange = () => {
    setStrictMode((previous) => !previous);
  };

  // Show upcoming feature message
  const showComingSoon = (feature: string) => {
    Alert.alert(
      "Coming soon",
      `${feature} will be available in an upcoming FocOn update.`,
    );
  };

  return {
    focusEnabled,
    strictMode,
    sessionActive,
    remainingSeconds,
    handleFocusToggle,
    handleStartPause,
    handleModeChange,
    showComingSoon,
  };
}
