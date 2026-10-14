import { View } from "react-native";

import { DASHBOARD_COLORS as C } from "../../../constants/dashboard";
import TodayOverviewHeader from "./today-overview-header";
import TodayOverviewItem from "./today-overview-item";
import { formatDuration } from "./today-overview.utils";
import { todayOverviewStyles as styles } from "./today-overview.styles";

interface Props {
  focusMinutes: number;
  distractionMinutes: number;
  completedSessions: number;
}

export default function TodayOverview({
  focusMinutes,
  distractionMinutes,
  completedSessions,
}: Props) {
  const stats = [
    {
      label: "Focus time",
      value: formatDuration(focusMinutes),
      icon: "time-outline" as const,
      color: C.primary,
      background: "#EFEDFF",
    },
    {
      label: "Distractions",
      value: formatDuration(distractionMinutes),
      icon: "phone-portrait-outline" as const,
      color: C.warning,
      background: "#FFF4E4",
    },
    {
      label: "Sessions",
      value: String(completedSessions),
      icon: "checkmark-circle-outline" as const,
      color: C.success,
      background: "#E7F8F0",
    },
  ];

  return (
    <View style={styles.container}>
      <TodayOverviewHeader />

      <View style={styles.grid}>
        {stats.map((item) => (
          <TodayOverviewItem
            key={item.label}
            label={item.label}
            value={item.value}
            icon={item.icon}
            color={item.color}
            background={item.background}
          />
        ))}
      </View>
    </View>
  );
}
