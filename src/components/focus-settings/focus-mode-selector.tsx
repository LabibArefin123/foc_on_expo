import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

import { DASHBOARD_COLORS as C } from "@/constants/dashboard";
import { mainStyles } from "@/styles/focus_settings/focus_setting_main.styles";
import { modeStyles } from "@/styles/focus_settings/focus_setting_mode.styles";
import type { FocusModeSelectorProps } from "@/types/focus-settings.types";

// Focus mode selection
export function FocusModeSelector({
  mode,
  onModeChange,
}: FocusModeSelectorProps) {
  return (
    <View style={mainStyles.section}>
      <Text style={mainStyles.sectionTitle}>Focus mode</Text>

      <Text style={mainStyles.sectionSubtitle}>
        Choose how you want to stay productive
      </Text>

      <View style={modeStyles.modeContainer}>
        <Pressable
          style={[
            modeStyles.modeCard,
            mode === "flexible" && modeStyles.selectedMode,
          ]}
          onPress={() => onModeChange("flexible")}
        >
          <View
            style={[
              modeStyles.modeIcon,
              mode === "flexible" && modeStyles.selectedModeIcon,
            ]}
          >
            <Ionicons
              name="leaf-outline"
              size={22}
              color={mode === "flexible" ? "#FFFFFF" : C.primary}
            />
          </View>

          <Text style={modeStyles.modeTitle}>Flexible</Text>

          <Text style={modeStyles.modeDescription}>
            Take control with adjustable focus sessions.
          </Text>

          {mode === "flexible" && (
            <View style={modeStyles.selectedIndicator}>
              <Ionicons name="checkmark-circle" size={18} color={C.primary} />
            </View>
          )}
        </Pressable>

        <Pressable
          style={[
            modeStyles.modeCard,
            mode === "strict" && modeStyles.selectedMode,
          ]}
          onPress={() => onModeChange("strict")}
        >
          <View
            style={[
              modeStyles.modeIcon,
              mode === "strict" && modeStyles.selectedModeIcon,
            ]}
          >
            <Ionicons
              name="shield-checkmark-outline"
              size={22}
              color={mode === "strict" ? "#FFFFFF" : C.primary}
            />
          </View>

          <Text style={modeStyles.modeTitle}>Strict</Text>

          <Text style={modeStyles.modeDescription}>
            Follow stronger restrictions during focus sessions.
          </Text>

          {mode === "strict" && (
            <View style={modeStyles.selectedIndicator}>
              <Ionicons name="checkmark-circle" size={18} color={C.primary} />
            </View>
          )}
        </Pressable>
      </View>
    </View>
  );
}
