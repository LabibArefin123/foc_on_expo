import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

import { focusModeStyles as styles } from "./focus-mode.styles";

interface Props {
  enabled: boolean;
  strictMode: boolean;
  onModeChange: () => void;
}

export default function FocusModeSelector({
  enabled,
  strictMode,
  onModeChange,
}: Props) {
  return (
    <View style={styles.modeRow}>
      <View>
        <Text style={styles.smallLabel}>YOUR FOCUS MODE</Text>

        <Pressable style={styles.modeButton} onPress={onModeChange}>
          <Ionicons
            name={strictMode ? "shield-checkmark" : "leaf"}
            size={15}
            color="#C7C0FF"
          />

          <Text style={styles.modeText}>
            {strictMode ? "Strict Mode" : "Flexible Mode"}
          </Text>

          <Ionicons name="chevron-down" size={14} color="#C7C0FF" />
        </Pressable>
      </View>

      <View style={styles.activeBadge}>
        <View
          style={[
            styles.activeDot,
            { backgroundColor: enabled ? "#48D6A0" : "#85869B" },
          ]}
        />

        <Text style={styles.activeText}>{enabled ? "ACTIVE" : "OFF"}</Text>
      </View>
    </View>
  );
}
