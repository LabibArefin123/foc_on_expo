import { Ionicons } from "@expo/vector-icons";
import { Pressable, Switch, Text, View } from "react-native";

import { DASHBOARD_COLORS as C } from "@/constants/dashboard";

import type {
  RestrictionsHeaderProps,
  RestrictionsSummaryProps,
  RestrictedAppCardProps,
} from "@/types/app-restrictions.types";

import { headerStyles } from "@/styles/app_restrictions/app_restrict_header.styles";
import { summaryStyles } from "@/styles/app_restrictions/app_restrict_summary.styles";
import { cardStyles } from "@/styles/app_restrictions/app_restrict_card.styles";
import { infoStyles } from "@/styles/app_restrictions/app_restrict_info.styles";

// Header
export function RestrictionsHeader({ onBack }: RestrictionsHeaderProps) {
  return (
    <View style={headerStyles.header}>
      <Pressable style={headerStyles.backButton} onPress={onBack}>
        <Ionicons name="arrow-back" size={22} color={C.text} />
      </Pressable>

      <View style={headerStyles.headerText}>
        <Text style={headerStyles.headerTitle}>App restrictions</Text>

        <Text style={headerStyles.headerSubtitle}>
          Take control of your screen time
        </Text>
      </View>
    </View>
  );
}

// Summary
export function RestrictionsSummary({
  activeApps,
  totalApps,
  masterEnabled,
  onMasterChange,
}: RestrictionsSummaryProps) {
  return (
    <View style={summaryStyles.summaryCard}>
      <View style={summaryStyles.summaryTop}>
        <View>
          <Text style={summaryStyles.summaryLabel}>PROTECTED APPS</Text>

          <Text style={summaryStyles.summaryNumber}>
            {activeApps}
            <Text style={summaryStyles.summaryTotal}> / {totalApps}</Text>
          </Text>

          <Text style={summaryStyles.summaryDescription}>
            Apps currently selected for restrictions
          </Text>
        </View>

        <View style={summaryStyles.summaryIcon}>
          <Ionicons name="shield-checkmark" size={29} color="#FFFFFF" />
        </View>
      </View>

      <View style={summaryStyles.summaryDivider} />

      <View style={summaryStyles.masterRow}>
        <View style={summaryStyles.masterInfo}>
          <Text style={summaryStyles.masterTitle}>Enable all restrictions</Text>

          <Text style={summaryStyles.masterSubtitle}>
            Control your selected apps
          </Text>
        </View>

        <Switch
          value={masterEnabled}
          onValueChange={onMasterChange}
          trackColor={{
            false: "#D8D9E3",
            true: "#A89EFF",
          }}
          thumbColor="#FFFFFF"
        />
      </View>
    </View>
  );
}

// Restricted App Card
export function RestrictedAppCard({
  app,
  masterEnabled,
  onAppChange,
  onLimitChange,
}: RestrictedAppCardProps) {
  const percentage = Math.min((app.minutes / app.limit) * 100, 100);

  const controlsDisabled = !masterEnabled || !app.enabled;

  return (
    <View style={cardStyles.appCard}>
      <View style={cardStyles.appHeader}>
        <View
          style={[cardStyles.appIcon, { backgroundColor: `${app.color}18` }]}
        >
          <Ionicons name={app.icon} size={23} color={app.color} />
        </View>

        <View style={cardStyles.appInfo}>
          <Text style={cardStyles.appName}>{app.name}</Text>

          <Text style={cardStyles.appUsage}>
            {app.minutes} minutes used today
          </Text>
        </View>

        <Switch
          value={app.enabled}
          onValueChange={(value) => onAppChange(app.id, value)}
          disabled={!masterEnabled}
          trackColor={{
            false: "#D8D9E3",
            true: "#A89EFF",
          }}
          thumbColor="#FFFFFF"
        />
      </View>

      <View style={cardStyles.usageSection}>
        <View style={cardStyles.usageHeader}>
          <Text style={cardStyles.usageLabel}>DAILY USAGE</Text>

          <Text style={cardStyles.usageValue}>
            {app.minutes} / {app.limit} min
          </Text>
        </View>

        <View style={cardStyles.progressBackground}>
          <View
            style={[
              cardStyles.progress,
              {
                width: `${percentage}%`,
                backgroundColor: percentage >= 85 ? C.danger : C.primary,
              },
            ]}
          />
        </View>
      </View>

      <View style={cardStyles.limitRow}>
        <Text style={cardStyles.limitLabel}>Daily time limit</Text>

        <View style={cardStyles.limitControls}>
          <Pressable
            style={[
              cardStyles.limitButton,
              controlsDisabled && cardStyles.disabledButton,
            ]}
            onPress={() => onLimitChange(app, -5)}
            disabled={controlsDisabled || app.limit <= 5}
          >
            <Ionicons name="remove" size={18} color={C.text} />
          </Pressable>

          <Text style={cardStyles.limitValue}>{app.limit} min</Text>

          <Pressable
            style={[
              cardStyles.limitButton,
              controlsDisabled && cardStyles.disabledButton,
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

// Information
export function RestrictionsInfo() {
  return (
    <View style={infoStyles.infoCard}>
      <Ionicons name="information-circle-outline" size={21} color={C.primary} />

      <Text style={infoStyles.infoText}>
        App limits are currently stored locally in this screen. Android usage
        monitoring and actual app blocking require native permissions and
        integration.
      </Text>
    </View>
  );
}
