import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

import { DASHBOARD_COLORS as C } from "../../../constants/dashboard";
import { quickActionsStyles as styles } from "./quick-actions.styles";

interface Props {
  title: string;
  subtitle: string;
  icon: keyof typeof Ionicons.glyphMap;
  iconColor: string;
  iconBackground: object;
  onPress: () => void;
}

export default function QuickActionItem({
  title,
  subtitle,
  icon,
  iconColor,
  iconBackground,
  onPress,
}: Props) {
  return (
    <Pressable
      style={({ pressed }) => [styles.actionCard, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View style={[styles.iconBox, iconBackground]}>
        <Ionicons name={icon} size={22} color={iconColor} />
      </View>

      <View style={styles.actionContent}>
        <Text style={styles.actionTitle}>{title}</Text>
        <Text style={styles.actionSubtitle}>{subtitle}</Text>
      </View>

      <Ionicons name="chevron-forward" size={18} color={C.secondary} />
    </Pressable>
  );
}
