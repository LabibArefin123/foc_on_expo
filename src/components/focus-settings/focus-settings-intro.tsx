import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

import { introStyles } from "@/styles/focus_settings/focus_setting_intro.styles";

// Introduction card
export function FocusSettingsIntro() {
  return (
    <View style={introStyles.introCard}>
      <View style={introStyles.introIcon}>
        <Ionicons name="options" size={25} color="#FFFFFF" />
      </View>

      <Text style={introStyles.introTitle}>Make focus work for you</Text>

      <Text style={introStyles.introDescription}>
        Customize your sessions, choose your focus style and create a routine
        that fits your lifestyle.
      </Text>
    </View>
  );
}
