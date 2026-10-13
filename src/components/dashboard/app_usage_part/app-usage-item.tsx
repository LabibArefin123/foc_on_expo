import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

import { APP_USAGE, DASHBOARD_COLORS as C } from "@/constants/dashboard";
import { appUsageStyles as styles } from "./app-usage.styles";

type AppUsageItemProps = {
  app: (typeof APP_USAGE)[number];
  isLast: boolean;
};

// Individual app usage row
export default function AppUsageItem({ app, isLast }: AppUsageItemProps) {
  const percentage = Math.min((app.minutes / app.limit) * 100, 100);

  return (
    <View style={[styles.appRow, !isLast && styles.separator]}>
      <View style={[styles.appIcon, { backgroundColor: `${app.color}15` }]}>
        <Ionicons name={app.icon as any} size={22} color={app.color} />
      </View>

      <View style={styles.appContent}>
        <View style={styles.appInfo}>
          <Text style={styles.appName}>{app.name}</Text>

          <Text style={styles.duration}>
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
    </View>
  );
}
