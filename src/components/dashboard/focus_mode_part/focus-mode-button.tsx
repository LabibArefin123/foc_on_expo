import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text } from "react-native";

import { DASHBOARD_COLORS as C } from "../../../constants/dashboard";
import { focusModeStyles as styles } from "./focus-mode.styles";

interface Props {
  enabled: boolean;
  sessionActive: boolean;
  onStartPause: () => void;
}

export default function FocusModeButton({
  enabled,
  sessionActive,
  onStartPause,
}: Props) {
  return (
    <Pressable
      style={[styles.startButton, !enabled && styles.disabledButton]}
      onPress={onStartPause}
      disabled={!enabled}
    >
      <Ionicons
        name={sessionActive ? "pause" : "play"}
        size={18}
        color={C.dark}
      />

      <Text style={styles.startButtonText}>
        {sessionActive ? "Pause Session" : "Start Focus Session"}
      </Text>
    </Pressable>
  );
}
