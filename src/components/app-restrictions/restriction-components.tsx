import { Ionicons } from "@expo/vector-icons";
import { Pressable, Switch, Text, View } from "react-native";

import { DASHBOARD_COLORS as C } from "@/constants/dashboard";
import type {
  RestrictionsHeaderProps,
  RestrictionsSummaryProps,
  RestrictedAppCardProps,
} from "@/types/app-restrictions.types";
import { styles } from "@/styles/app-restrictions.styles";

// Header
export function RestrictionsHeader({ onBack }: RestrictionsHeaderProps) {
  return (
    <View style={styles.header}>
      <Pressable style={styles.backButton} onPress={onBack}>
        <Ionicons name="arrow-back" size={22} color={C.text} />
      </Pressable>

      <View style={styles.headerText}>
        <Text style={styles.headerTitle}>App restrictions</Text>
        <Text style={styles.headerSubtitle}>
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
    <View style={styles.summaryCard}>
      <View style={styles.summaryTop}>
        <View>
          <Text style={styles.summaryLabel}>PROTECTED APPS</Text>

          <Text style={styles.summaryNumber}>
            {activeApps}
            <Text style={styles.summaryTotal}> / {totalApps}</Text>
          </Text>

          <Text style={styles.summaryDescription}>
            Apps currently selected for restrictions
          </Text>
        </View>

        <View style={styles.summaryIcon}>
          <Ionicons name="shield-checkmark" size={29} color="#FFFFFF" />
        </View>
      </View>

      <View style={styles.summaryDivider} />

      <View style={styles.masterRow}>
        <View style={styles.masterInfo}>
          <Text style={styles.masterTitle}>Enable all restrictions</Text>

          <Text style={styles.masterSubtitle}>Control your selected apps</Text>
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
    <View style={styles.appCard}>
      <View style={styles.appHeader}>
        <View style={[styles.appIcon, { backgroundColor: `${app.color}18` }]}>
          <Ionicons name={app.icon} size={23} color={app.color} />
        </View>

        <View style={styles.appInfo}>
          <Text style={styles.appName}>{app.name}</Text>

          <Text style={styles.appUsage}>{app.minutes} minutes used today</Text>
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

      <View style={styles.usageSection}>
        <View style={styles.usageHeader}>
          <Text style={styles.usageLabel}>DAILY USAGE</Text>

          <Text style={styles.usageValue}>
            {app.minutes} / {app.limit} min
          </Text>
        </View>

        <View style={styles.progressBackground}>
          <View
            style={[
              styles.progress,
              {
                width: `${percentage}%`,
                backgroundColor: percentage >= 85 ? C.danger : C.primary,
              },
            ]}
          />
        </View>
      </View>

      <View style={styles.limitRow}>
        <Text style={styles.limitLabel}>Daily time limit</Text>

        <View style={styles.limitControls}>
          <Pressable
            style={[
              styles.limitButton,
              controlsDisabled && styles.disabledButton,
            ]}
            onPress={() => onLimitChange(app, -5)}
            disabled={controlsDisabled || app.limit <= 5}
          >
            <Ionicons name="remove" size={18} color={C.text} />
          </Pressable>

          <Text style={styles.limitValue}>{app.limit} min</Text>

          <Pressable
            style={[
              styles.limitButton,
              controlsDisabled && styles.disabledButton,
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
    <View style={styles.infoCard}>
      <Ionicons name="information-circle-outline" size={21} color={C.primary} />

      <Text style={styles.infoText}>
        App limits are currently stored locally in this screen. Android usage
        monitoring and actual app blocking require native permissions and
        integration.
      </Text>
    </View>
  );
}
