import { Text, View } from "react-native";

import { focusModeStyles as styles } from "./focus-mode.styles";

interface Props {
  sessionActive: boolean;
  remainingSeconds: number;
}

export default function FocusModeTimer({
  sessionActive,
  remainingSeconds,
}: Props) {
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  const timer = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0",
  )}`;

  return (
    <View style={styles.timerContainer}>
      <Text style={styles.timerLabel}>
        {sessionActive ? "TIME REMAINING" : "READY TO FOCUS?"}
      </Text>

      <Text style={styles.timer}>{timer}</Text>

      <Text style={styles.timerSubtext}>
        {sessionActive
          ? "Stay present. You've got this."
          : "Make today a little more productive."}
      </Text>
    </View>
  );
}
