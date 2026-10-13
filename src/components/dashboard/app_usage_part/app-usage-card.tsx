import { View } from "react-native";

import { APP_USAGE } from "@/constants/dashboard";

import AppUsageHeader from "./app-usage-header";
import AppUsageItem from "./app-usage-item";
import { appUsageStyles as styles } from "./app-usage.styles";

// Complete app usage card
export default function AppUsageCard() {
  return (
    <View style={styles.container}>
      <AppUsageHeader />

      <View style={styles.card}>
        {APP_USAGE.map((app, index) => (
          <AppUsageItem
            key={app.id}
            app={app}
            isLast={index === APP_USAGE.length - 1}
          />
        ))}
      </View>
    </View>
  );
}
