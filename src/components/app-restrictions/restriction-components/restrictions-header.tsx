import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

import { DASHBOARD_COLORS as C } from "@/constants/dashboard";

import type { RestrictionsHeaderProps } from "@/types/app-restrictions.types";

import { headerStyles } from "@/styles/app_restrictions/app_restrict_header.styles";

export default function RestrictionsHeader({
  onBack,
}: RestrictionsHeaderProps) {
  return (
    <View style={headerStyles.header}>
      <Pressable style={headerStyles.backButton} onPress={onBack}>
        <Ionicons name="arrow-back" size={22} color={C.text} />
      </Pressable>

      <View style={headerStyles.headerText}>
        <Text style={headerStyles.headerTitle}>App restrictions</Text>
        <Text style={headerStyles.headerSubtitle}>
          Take control of your screen time
        </Text>
      </View>
    </View>
  );
}
