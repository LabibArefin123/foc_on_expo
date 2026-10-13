import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

import { DASHBOARD_COLORS as C } from "@/constants/dashboard";
import { headerStyles } from "@/styles/focus_settings/focus_setting_header.styles";
import type { FocusSettingsHeaderProps } from "@/types/focus-settings.types";

// Screen header
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
