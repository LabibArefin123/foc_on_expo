import { Ionicons } from "@expo/vector-icons";
import { Pressable, Switch, Text, View } from "react-native";

import { DASHBOARD_COLORS as C } from "@/constants/dashboard";

import type { RestrictedAppCardProps } from "@/types/app-restrictions.types";

import {
  cardMainStyles,
  cardUsageStyles,
  cardProgressStyles,
  cardLimitStyles,
} from "@/styles/app_restrictions/app_restrict_card.styles";

export default function RestrictedAppCard({
  app,
  masterEnabled,
  onAppChange,
  onLimitChange,
}: RestrictedAppCardProps) {
  const percentage = Math.min((app.minutes / app.limit) * 100, 100);
  const controlsDisabled = !masterEnabled || !app.enabled;

  return (
    <View style={cardMainStyles.appCard}>
      <View style={cardMainStyles.appHeader}>
        <View
          style={[
            cardMainStyles.appIcon,
            { backgroundColor: `${app.color}18` },
          ]}
        >
          <Ionicons name={app.icon} size={23} color={app.color} />
        </View>

        <View style={cardMainStyles.appInfo}>
          <Text style={cardMainStyles.appName}>{app.name}</Text>
          <Text style={cardMainStyles.appUsage}>
            {app.minutes} minutes used today
          </Text>
        </View>

        <Switch
          value={app.enabled}
          onValueChange={(value) => onAppChange(app.id, value)}
          disabled={!masterEnabled}
          trackColor={{ false: "#D8D9E3", true: "#A89EFF" }}
          thumbColor="#FFFFFF"
        />
      </View>

      <View style={cardUsageStyles.usageSection}>
        <View style={cardUsageStyles.usageHeader}>
          <Text style={cardUsageStyles.usageLabel}>DAILY USAGE</Text>

          <Text style={cardUsageStyles.usageValue}>
            {app.minutes} / {app.limit} min
          </Text>
        </View>

        <View style={cardProgressStyles.progressBackground}>
          <View
            style={[
              cardProgressStyles.progress,
              {
                width: `${percentage}%`,
                backgroundColor: percentage >= 85 ? C.danger : C.primary,
              },
            ]}
          />
        </View>
      </View>

      <View style={cardLimitStyles.limitRow}>
        <Text style={cardLimitStyles.limitLabel}>Daily time limit</Text>

        <View style={cardLimitStyles.limitControls}>
          <Pressable
            style={[
              cardLimitStyles.limitButton,
              controlsDisabled && cardLimitStyles.disabledButton,
            ]}
            onPress={() => onLimitChange(app, -5)}
            disabled={controlsDisabled || app.limit <= 5}
          >
            <Ionicons name="remove" size={18} color={C.text} />
          </Pressable>

          <Text style={cardLimitStyles.limitValue}>{app.limit} min</Text>

          <Pressable
            style={[
              cardLimitStyles.limitButton,
              controlsDisabled && cardLimitStyles.disabledButton,
            ]}
            onPress={() => onLimitChange(app, 5)}
            disabled={controlsDisabled || app.limit >= 240}
          >
            <Ionicons name="add" size={18} color={C.text} />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
