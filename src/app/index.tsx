import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

import DashboardScreenContent from "@/components/dashboard/dashboard-screen-content";
import useDashboard from "@/hooks/use-dashboard";

import { DASHBOARD_COLORS as C } from "@/constants/dashboard";
import { dashboardScreenStyles as styles } from "@/styles/dashboard/dashboard-screen.styles";

// Home dashboard screen
export default function HomeScreen() {
  const router = useRouter();
  const dashboard = useDashboard();

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <StatusBar barStyle="dark-content" backgroundColor={C.background} />

      <DashboardScreenContent
        {...dashboard}
        onRestrictionsPress={() => router.push("/app-restrictions")}
        onSettingsPress={() => router.push("/setting-focus")}
      />
    </SafeAreaView>
  );
}
