import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

import { DASHBOARD_COLORS as C } from "@/constants/dashboard";

import { infoStyles } from "@/styles/app_restrictions/app_restrict_info.styles";

export default function RestrictionsInfo() {
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
