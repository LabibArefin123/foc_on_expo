import { Ionicons } from "@expo/vector-icons";
import { Pressable, Switch, Text, View } from "react-native";

import { focusModeStyles as styles } from "./focus-mode.styles";

interface Props {
  enabled: boolean;
  onToggle: (value: boolean) => void;
}

export default function FocusModeHeader({ enabled, onToggle }: Props) {
  return (
    <>
      <View style={styles.topRow}>
        <View style={styles.statusGroup}>
          <View style={styles.iconBox}>
            <Ionicons name="flash" size={21} color="#FFFFFF" />
          </View>

          <View>
            <Text style={styles.cardTitle}>Focus Mode</Text>
            <Text style={styles.statusText}>
              {enabled ? "You're in control" : "Ready when you are"}
            </Text>
          </View>
        </View>

        <Switch
          value={enabled}
          onValueChange={onToggle}
          trackColor={{
            false: "#53546D",
            true: "#A89EFF",
          }}
          thumbColor="#FFFFFF"
        />
      </View>

      <View style={styles.divider} />
    </>
  );
}
