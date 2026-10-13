import type { Ionicons } from "@expo/vector-icons";
import type { ComponentProps } from "react";

export interface RestrictedApp {
  id: string;
  name: string;
  packageName: string;
  icon: ComponentProps<typeof Ionicons>["name"];
  color: string;
  minutes: number;
  limit: number;
  enabled: boolean;
}

export interface RestrictionsHeaderProps {
  onBack: () => void;
}

export interface RestrictionsSummaryProps {
  activeApps: number;
  totalApps: number;
  masterEnabled: boolean;
  onMasterChange: (value: boolean) => void;
}

export interface RestrictedAppCardProps {
  app: RestrictedApp;
  masterEnabled: boolean;
  onAppChange: (id: string, enabled: boolean) => void;
  onLimitChange: (app: RestrictedApp, amount: number) => void;
}
