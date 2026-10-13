import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { APP_USAGE, DASHBOARD_COLORS as C } from "../../constants/dashboard";

export default function AppUsageCard() {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <View>
          <Text style={styles.title}>App usage</Text>
          <Text style={styles.subtitle}>Your most-used distracting apps</Text>
        </View>

        <Pressable style={styles.viewButton}>
          <Text style={styles.viewText}>View all</Text>
          <Ionicons name="chevron-forward" size={14} color={C.primary} />
        </Pressable>
      </View>

      <View style={styles.card}>
        {APP_USAGE.map((app, index) => {
          const percentage = Math.min((app.minutes / app.limit) * 100, 100);

          return (
            <View
              key={app.id}
              style={[
                styles.appRow,
                index !== APP_USAGE.length - 1 && styles.separator,
              ]}
            >
              <View
                style={[styles.appIcon, { backgroundColor: `${app.color}15` }]}
              >
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
                        backgroundColor:
                          percentage >= 85 ? C.danger : C.primary,
                      },
                    ]}
                  />
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
  },
  heading: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 13,
  },
  title: {
    fontSize: 18,
    fontWeight: "800",
    color: C.text,
  },
  subtitle: {
    fontSize: 11,
    color: C.secondary,
    marginTop: 5,
  },
  viewButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  viewText: {
    fontSize: 12,
    color: C.primary,
    fontWeight: "700",
  },
  card: {
    backgroundColor: C.surface,
    borderRadius: 21,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: C.border,
  },
  appRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    gap: 12,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: C.border,
  },
  appIcon: {
    width: 43,
    height: 43,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  appContent: {
    flex: 1,
  },
  appInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  appName: {
    fontSize: 13,
    color: C.text,
    fontWeight: "700",
  },
  duration: {
    fontSize: 11,
    color: C.secondary,
  },
  progressBackground: {
    height: 6,
    backgroundColor: "#EFEFF5",
    borderRadius: 10,
    overflow: "hidden",
  },
  progress: {
    height: "100%",
    borderRadius: 10,
  },
});
