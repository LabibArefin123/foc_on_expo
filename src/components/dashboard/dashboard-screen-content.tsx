import { ScrollView, View } from "react-native";

import AppUsageCard from "@/components/dashboard/AppUsageCard";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import FocusModeCard from "@/components/dashboard/FocusModeCard";
import ProductivityCard from "@/components/dashboard/ProductivityCard";
import QuickActions from "@/components/dashboard/QuickActions";
import TodayOverview from "@/components/dashboard/TodayOverview";

import { TODAY_STATS } from "@/constants/dashboard";
import { dashboardScreenStyles as styles } from "@/styles/dashboard/dashboard-screen.styles";
import type useDashboard from "@/hooks/use-dashboard";

type DashboardContentProps = ReturnType<typeof useDashboard> & {
  onRestrictionsPress: () => void;
  onSettingsPress: () => void;
};

// Dashboard screen content
export default function DashboardScreenContent({
  focusEnabled,
  strictMode,
  sessionActive,
  remainingSeconds,
  handleFocusToggle,
  handleStartPause,
  handleModeChange,
  showComingSoon,
  onRestrictionsPress,
  onSettingsPress,
}: DashboardContentProps) {
  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      {/* Dashboard header */}
      <DashboardHeader
        onNotificationPress={() => showComingSoon("Notifications")}
      />

      {/* Focus mode */}
      <FocusModeCard
        enabled={focusEnabled}
        onToggle={handleFocusToggle}
        strictMode={strictMode}
        onModeChange={handleModeChange}
        sessionActive={sessionActive}
        remainingSeconds={remainingSeconds}
        onStartPause={handleStartPause}
      />

      {/* Daily overview */}
      <TodayOverview
        focusMinutes={TODAY_STATS.focusMinutes}
        distractionMinutes={TODAY_STATS.distractionMinutes}
        completedSessions={TODAY_STATS.completedSessions}
      />

      {/* Productivity score */}
      <View style={styles.productivityWrapper}>
        <ProductivityCard score={TODAY_STATS.productivityScore} />
      </View>

      {/* Most used apps */}
      <AppUsageCard />

      {/* Quick actions */}
      <QuickActions
        onRestrictionsPress={onRestrictionsPress}
        onSettingsPress={onSettingsPress}
      />
    </ScrollView>
  );
}
