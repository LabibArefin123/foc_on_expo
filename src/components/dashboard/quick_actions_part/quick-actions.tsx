import { View } from "react-native";

import { DASHBOARD_COLORS as C } from "../../../constants/dashboard";
import QuickActionsHeader from "./quick-actions-header";
import QuickActionItem from "./quick-action-item";
import { quickActionsStyles as styles } from "./quick-actions.styles";

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
      <QuickActionsHeader />

      <View style={styles.actions}>
        <QuickActionItem
          title="App restrictions"
          subtitle="Manage your daily app limits"
          icon="shield-checkmark-outline"
          iconColor={C.primary}
          iconBackground={styles.restrictionsIcon}
          onPress={onRestrictionsPress}
        />

        <QuickActionItem
          title="Focus settings"
          subtitle="Customize your focus experience"
          icon="settings-outline"
          iconColor={C.success}
          iconBackground={styles.settingsIcon}
          onPress={onSettingsPress}
        />
      </View>
    </View>
  );
}
