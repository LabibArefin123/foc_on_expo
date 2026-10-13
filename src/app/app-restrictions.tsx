import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { INITIAL_APPS } from "@/constants/app-restrictions";
import { DASHBOARD_COLORS as C } from "@/constants/dashboard";

import {
  RestrictedAppCard,
  RestrictionsHeader,
  RestrictionsInfo,
  RestrictionsSummary,
} from "@/components/app-restrictions/restriction-components";

import { styles } from "@/styles/app-restrictions.styles";
import type { RestrictedApp } from "@/types/app-restrictions.types";

export default function AppRestrictionsScreen() {
  const router = useRouter();

  const [apps, setApps] = useState(INITIAL_APPS);
  const [masterEnabled, setMasterEnabled] = useState(true);

  const activeApps = apps.filter((app) => app.enabled).length;

  // Update individual app
  const updateApp = (id: string, changes: Partial<RestrictedApp>) => {
    setApps((previous) =>
      previous.map((app) => (app.id === id ? { ...app, ...changes } : app)),
    );
  };

  // Update daily time limit
  const updateLimit = (app: RestrictedApp, amount: number) => {
    const nextLimit = Math.max(5, Math.min(240, app.limit + amount));

    updateApp(app.id, { limit: nextLimit });
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <StatusBar barStyle="dark-content" backgroundColor={C.background} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Header */}
        <RestrictionsHeader onBack={() => router.back()} />

        {/* Summary */}
        <RestrictionsSummary
          activeApps={activeApps}
          totalApps={apps.length}
          masterEnabled={masterEnabled}
          onMasterChange={setMasterEnabled}
        />

        {/* Restricted Apps Section */}
        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionTitle}>Your restricted apps</Text>

            <Text style={styles.sectionSubtitle}>
              Set a daily usage limit for each app
            </Text>
          </View>

          <Text style={styles.appCount}>{apps.length} APPS</Text>
        </View>

        {/* App List */}
        {apps.map((app) => (
          <RestrictedAppCard
            key={app.id}
            app={app}
            masterEnabled={masterEnabled}
            onAppChange={(id, enabled) => updateApp(id, { enabled })}
            onLimitChange={updateLimit}
          />
        ))}

        {/* Information */}
        <RestrictionsInfo />
      </ScrollView>
    </SafeAreaView>
  );
}
