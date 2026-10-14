import { Ionicons } from "@expo/vector-icons";
import { Switch, Text, View } from "react-native";

import type { RestrictionsSummaryProps } from "@/types/app-restrictions.types";

import { summaryStyles } from "@/styles/app_restrictions/app_restrict_summary.styles";

export default function RestrictionsSummary({
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
          trackColor={{ false: "#D8D9E3", true: "#A89EFF" }}
          thumbColor="#FFFFFF"
        />
      </View>
    </View>
  );
}
