import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { DASHBOARD_COLORS as C } from "../../constants/dashboard";

interface Props {
  onRestrictionsPress: () => void;
  onSettingsPress: () => void;
}

export default function QuickActions({
  onRestrictionsPress,
  onSettingsPress,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quick actions</Text>

      <View style={styles.actions}>
        {/* App Restrictions */}
        <Pressable
          style={({ pressed }) => [
            styles.actionCard,
            pressed && styles.pressed,
          ]}
          onPress={onRestrictionsPress}
        >
          <View style={[styles.iconBox, styles.restrictionsIcon]}>
            <Ionicons
              name="shield-checkmark-outline"
              size={22}
              color={C.primary}
            />
          </View>

          <View style={styles.actionContent}>
            <Text style={styles.actionTitle}>App restrictions</Text>
            <Text style={styles.actionSubtitle}>
              Manage your daily app limits
            </Text>
          </View>

          <Ionicons name="chevron-forward" size={18} color={C.secondary} />
        </Pressable>

        {/* Focus Settings */}
        <Pressable
          style={({ pressed }) => [
            styles.actionCard,
            pressed && styles.pressed,
          ]}
          onPress={onSettingsPress}
        >
          <View style={[styles.iconBox, styles.settingsIcon]}>
            <Ionicons name="settings-outline" size={22} color={C.success} />
          </View>

          <View style={styles.actionContent}>
            <Text style={styles.actionTitle}>Focus settings</Text>
            <Text style={styles.actionSubtitle}>
              Customize your focus experience
            </Text>
          </View>

          <Ionicons name="chevron-forward" size={18} color={C.secondary} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
  },

  title: {
    fontSize: 18,
    fontWeight: "800",
    color: C.text,
    marginBottom: 13,
  },

  actions: {
    gap: 11,
  },

  actionCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: C.surface,
    borderRadius: 18,
    padding: 15,
    borderWidth: 1,
    borderColor: C.border,
  },

  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.99 }],
  },

  iconBox: {
    width: 45,
    height: 45,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },

  restrictionsIcon: {
    backgroundColor: "#EFEDFF",
  },

  settingsIcon: {
    backgroundColor: "#E7F8F0",
  },

  actionContent: {
    flex: 1,
    marginLeft: 13,
  },

  actionTitle: {
    fontSize: 13,
    fontWeight: "800",
    color: C.text,
  },

  actionSubtitle: {
    fontSize: 11,
    color: C.secondary,
    marginTop: 5,
  },
});
