import type { RestrictedApp } from "@/types/app-restrictions.types";

export const INITIAL_APPS: RestrictedApp[] = [
  {
    id: "1",
    name: "Instagram",
    packageName: "com.instagram.android",
    icon: "logo-instagram",
    color: "#D95783",
    minutes: 42,
    limit: 60,
    enabled: true,
  },
  {
    id: "2",
    name: "YouTube",
    packageName: "com.google.android.youtube",
    icon: "logo-youtube",
    color: "#EF4444",
    minutes: 35,
    limit: 45,
    enabled: true,
  },
  {
    id: "3",
    name: "TikTok",
    packageName: "com.zhiliaoapp.musically",
    icon: "musical-notes",
    color: "#242433",
    minutes: 24,
    limit: 30,
    enabled: true,
  },
  {
    id: "4",
    name: "Facebook",
    packageName: "com.facebook.katana",
    icon: "logo-facebook",
    color: "#1877F2",
    minutes: 18,
    limit: 45,
    enabled: false,
  },
];
