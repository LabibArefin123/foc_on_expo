import { View } from "react-native";

import FocusModeHeader from "./focus-mode-header";
import FocusModeSelector from "./focus-mode-selector";
import FocusModeTimer from "./focus-mode-timer";
import FocusModeButton from "./focus-mode-button";
import { focusModeStyles as styles } from "./focus-mode.styles";

interface Props {
  enabled: boolean;
  onToggle: (value: boolean) => void;
  strictMode: boolean;
  onModeChange: () => void;
  sessionActive: boolean;
  remainingSeconds: number;
  onStartPause: () => void;
}

export default function FocusModeCard(props: Props) {
  return (
    <View style={styles.card}>
      <FocusModeHeader enabled={props.enabled} onToggle={props.onToggle} />

      <FocusModeSelector
        enabled={props.enabled}
        strictMode={props.strictMode}
        onModeChange={props.onModeChange}
      />

      <FocusModeTimer
        sessionActive={props.sessionActive}
        remainingSeconds={props.remainingSeconds}
      />

      <FocusModeButton
        enabled={props.enabled}
        sessionActive={props.sessionActive}
        onStartPause={props.onStartPause}
      />
    </View>
  );
}
