import { useEffect, useState } from "react";
import { Alert, ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import DashboardHeader from "../../components/dashboard/DashboardHeader";
import FocusModeCard from "../../components/dashboard/FocusModeCard";
import ProductivityCard from "../../components/dashboard/ProductivityCard";
import TodayOverview from "../../components/dashboard/TodayOverview";
import AppUsageCard from "../../components/dashboard/AppUsageCard";
import QuickActions from "../../components/dashboard/QuickActions";

import { DASHBOARD_COLORS as C, TODAY_STATS } from "../../constants/dashboard";

export default function DashboardScreen() {
  const [focusEnabled, setFocusEnabled] = useState(false);
  const [strictMode, setStrictMode] = useState(false);
  const [sessionActive, setSessionActive] = useState(false);
  const [remainingSeconds, setRemainingSeconds] = useState(25 * 60);

  useEffect(() => {
    if (!sessionActive) return;

    const interval = setInterval(() => {
      setRemainingSeconds((previous) => {
        if (previous <= 1) {
          clearInterval(interval);
          setSessionActive(false);
          Alert.alert(
            "Focus session completed! 🎉",
            "Amazing work! You've completed your focus session.",
          );
          return 0;
        }

        return previous - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [sessionActive]);

  const handleFocusToggle = (value: boolean) => {
    setFocusEnabled(value);

    if (!value) {
      setSessionActive(false);
    }
  };

  const handleStartPause = () => {
    if (!focusEnabled) return;

    if (remainingSeconds <= 0) {
      setRemainingSeconds(25 * 60);
    }

    setSessionActive((previous) => !previous);
  };

  const handleModeChange = () => {
    setStrictMode((previous) => !previous);
  };

  const showComingSoon = (feature: string) => {
    Alert.alert(
      "Coming soon",
      `${feature} will be available when we build the next dashboard screens.`,
    );
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <StatusBar barStyle="dark-content" backgroundColor={C.background} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <DashboardHeader
          onNotificationPress={() => showComingSoon("Notifications")}
        />

        <FocusModeCard
          enabled={focusEnabled}
          onToggle={handleFocusToggle}
          strictMode={strictMode}
          onModeChange={handleModeChange}
          sessionActive={sessionActive}
          remainingSeconds={remainingSeconds}
          onStartPause={handleStartPause}
        />

        <TodayOverview
          focusMinutes={TODAY_STATS.focusMinutes}
          distractionMinutes={TODAY_STATS.distractionMinutes}
          completedSessions={TODAY_STATS.completedSessions}
        />

        <View style={styles.productivityWrapper}>
          <ProductivityCard score={TODAY_STATS.productivityScore} />
        </View>

        <AppUsageCard />

        <QuickActions
          onRestrictionsPress={() => showComingSoon("App restrictions")}
          onSettingsPress={() => showComingSoon("Focus settings")}
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
  scrollContent: {
    paddingHorizontal: 21,
    paddingTop: 15,
    paddingBottom: 35,
  },
  productivityWrapper: {
    marginBottom: 25,
  },
});
