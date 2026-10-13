import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

import { durationStyles } from "@/styles/focus_settings/focus_setting_duration.styles";
import { mainStyles } from "@/styles/focus_settings/focus_setting_main.styles";
import type { DurationSelectorProps } from "@/types/focus-settings.types";

// Focus and break duration selection
export function DurationSelector({
  title,
  subtitle,
  duration,
  durations,
  icon,
  iconColor,
  onDurationChange,
}: DurationSelectorProps) {
  return (
    <View style={mainStyles.section}>
      <Text style={mainStyles.sectionTitle}>{title}</Text>
      <Text style={mainStyles.sectionSubtitle}>{subtitle}</Text>

      <View style={durationStyles.durationCard}>
        <View style={durationStyles.durationDisplay}>
          <Ionicons name={icon} size={25} color={iconColor} />

          <View style={durationStyles.durationText}>
            <Text style={durationStyles.durationNumber}>{duration}</Text>
            <Text style={durationStyles.durationUnit}>MINUTES</Text>
          </View>
        </View>

        <View style={durationStyles.durationOptions}>
          {durations.map((item) => (
            <Pressable
              key={item}
              onPress={() => onDurationChange(item)}
              style={[
                durationStyles.durationButton,
                duration === item && durationStyles.selectedDuration,
              ]}
            >
              <Text
                style={[
                  durationStyles.durationButtonText,
                  duration === item && durationStyles.selectedDurationText,
                ]}
              >
                {item}m
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
}
    