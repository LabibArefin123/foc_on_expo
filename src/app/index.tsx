import { useEffect, useState } from "react";
import { Alert, ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AppUsageCard from "@/components/dashboard/AppUsageCard";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import FocusModeCard from "@/components/dashboard/FocusModeCard";
import ProductivityCard from "@/components/dashboard/ProductivityCard";
import QuickActions from "@/components/dashboard/QuickActions";
import TodayOverview from "@/components/dashboard/TodayOverview";
import { DASHBOARD_COLORS as C, TODAY_STATS } from "@/constants/dashboard";
import { useRouter } from "expo-router";

const DEFAULT_SESSION_SECONDS = 25 * 60;

export default function HomeScreen() {
  const router = useRouter();
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

  // Focus Mode ON/OFF
  const handleFocusToggle = (value: boolean) => {
    setFocusEnabled(value);

    if (!value) {
      setSessionActive(false);
    }
  };

  // Start / Pause session
  const handleStartPause = () => {
    if (!focusEnabled) return;

    if (remainingSeconds <= 0) {
      setRemainingSeconds(DEFAULT_SESSION_SECONDS);
    }

    setSessionActive((previous) => !previous);
  };

  // Flexible / Strict mode
  const handleModeChange = () => {
    setStrictMode((previous) => !previous);
  };

  // Temporary navigation actions
  const showComingSoon = (feature: string) => {
    Alert.alert(
      "Coming soon",
      `${feature} will be available in an upcoming FocOn update.`,
    );
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <StatusBar barStyle="dark-content" backgroundColor={C.background} />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Dashboard Header */}
        <DashboardHeader
          onNotificationPress={() => showComingSoon("Notifications")}
        />

        {/* Focus Mode */}
        <FocusModeCard
          enabled={focusEnabled}
          onToggle={handleFocusToggle}
          strictMode={strictMode}
          onModeChange={handleModeChange}
          sessionActive={sessionActive}
          remainingSeconds={remainingSeconds}
          onStartPause={handleStartPause}
        />

        {/* Daily Overview */}
        <TodayOverview
          focusMinutes={TODAY_STATS.focusMinutes}
          distractionMinutes={TODAY_STATS.distractionMinutes}
          completedSessions={TODAY_STATS.completedSessions}
        />

        {/* Productivity Score */}
        <View style={styles.productivityWrapper}>
          <ProductivityCard score={TODAY_STATS.productivityScore} />
        </View>

        {/* Most Used Apps */}
        <AppUsageCard />

        {/* Quick Actions */}
        <QuickActions
          onRestrictionsPress={() => router.push("/app-restrictions")}
          onSettingsPress={() => router.push("/setting-focus")}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: C.background,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 21,
    paddingTop: 15,
    paddingBottom: 35,
  },
  productivityWrapper: {
    marginBottom: 25,
  },
});
