import { useRouter } from "expo-router";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { DASHBOARD_COLORS as C } from "@/constants/dashboard";

import FocusSettingsContent from "@/components/focus-settings/focus-settings-screen-content";

import { useFocusSettings } from "@/hooks/use-focus-settings";

import { mainStyles } from "@/styles/focus_settings/focus_setting_main.styles";

export default function FocusSettingsScreen() {
  const router = useRouter();

  // Focus settings
  const focusSettings = useFocusSettings();

  return (
    <SafeAreaView style={mainStyles.safeArea} edges={["top"]}>
      <StatusBar barStyle="dark-content" backgroundColor={C.background} />

      <FocusSettingsContent {...focusSettings} onBack={() => router.back()} />
    </SafeAreaView>
  );
}
