import { Ionicons } from "@expo/vector-icons";
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { DASHBOARD_COLORS as C } from "@/constants/dashboard";

type NotificationContentProps = {
  visible: boolean;
  onClose: () => void;
};

const upcomingUpdates = [
  {
    date: "15 November 2026",
    title: "First upcoming update",
    description: "The next FocOn update is planned for this date.",
    icon: "rocket-outline" as const,
  },
  {
    date: "30 November 2026",
    title: "Second upcoming update",
    description: "Another FocOn update is planned for this date.",
    icon: "sparkles-outline" as const,
  },
];

// Floating notification panel
export default function NotificationContent({
  visible,
  onClose,
}: NotificationContentProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      statusBarTranslucent
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <Pressable style={styles.backdrop} onPress={onClose} />

        <View style={styles.modalContainer}>
          {/* Panel header */}
          <View style={styles.header}>
            <View style={styles.headerIcon}>
              <Ionicons
                name="notifications-outline"
                size={23}
                color={C.primary}
              />
            </View>

            <View style={styles.headerText}>
              <Text style={styles.title}>What's coming next?</Text>
              <Text style={styles.subtitle}>
                Stay updated with upcoming FocOn releases.
              </Text>
            </View>

            <Pressable
              style={styles.closeButton}
              onPress={onClose}
              hitSlop={10}
            >
              <Ionicons name="close" size={21} color={C.text} />
            </Pressable>
          </View>

          {/* Upcoming updates */}
          <ScrollView
            style={styles.updateList}
            showsVerticalScrollIndicator={false}
          >
            {upcomingUpdates.map((update, index) => (
              <View key={update.date} style={styles.updateCard}>
                <View style={styles.updateIcon}>
                  <Ionicons name={update.icon} size={21} color={C.primary} />
                </View>

                <View style={styles.updateInfo}>
                  <Text style={styles.updateDate}>{update.date}</Text>
                  <Text style={styles.updateTitle}>{update.title}</Text>
                  <Text style={styles.updateDescription}>
                    {update.description}
                  </Text>
                </View>

                <View style={styles.statusBadge}>
                  <Text style={styles.statusText}>Planned</Text>
                </View>
              </View>
            ))}

            {/* More updates */}
            <View style={styles.moreUpdates}>
              <Ionicons name="calendar-outline" size={19} color={C.primary} />
              <Text style={styles.moreUpdatesText}>
                More updates and release announcements will be shared soon.
              </Text>
            </View>
          </ScrollView>

          {/* Close action */}
          <Pressable
            style={({ pressed }) => [
              styles.doneButton,
              pressed && styles.doneButtonPressed,
            ]}
            onPress={onClose}
          >
            <Text style={styles.doneButtonText}>Got it</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 22,
    backgroundColor: "rgba(20, 20, 35, 0.48)",
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
  },
  modalContainer: {
    width: "100%",
    maxWidth: 440,
    maxHeight: "80%",
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 20,
    elevation: 12,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.16,
    shadowRadius: 18,
  },
  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 22,
  },
  headerIcon: {
    width: 46,
    height: 46,
    borderRadius: 15,
    backgroundColor: "#F0EEFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  headerText: {
    flex: 1,
    paddingTop: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: C.text,
  },
  subtitle: {
    fontSize: 12,
    lineHeight: 18,
    color: "#858597",
    marginTop: 4,
  },
  closeButton: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: "#F4F4F7",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
  updateList: {
    flexGrow: 0,
  },
  updateCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 13,
    marginBottom: 12,
    borderRadius: 16,
    backgroundColor: "#F8F7FC",
    borderWidth: 1,
    borderColor: "#EFEDF7",
  },
  updateIcon: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: "#EFEDFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  updateInfo: {
    flex: 1,
  },
  updateDate: {
    fontSize: 11,
    fontWeight: "700",
    color: C.primary,
    marginBottom: 5,
  },
  updateTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: C.text,
  },
  updateDescription: {
    fontSize: 11,
    lineHeight: 16,
    color: "#858597",
    marginTop: 4,
  },
  statusBadge: {
    paddingHorizontal: 7,
    paddingVertical: 4,
    borderRadius: 8,
    backgroundColor: "#FFF3DF",
    marginLeft: 5,
  },
  statusText: {
    fontSize: 9,
    fontWeight: "700",
    color: "#B7791F",
  },
  moreUpdates: {
    flexDirection: "row",
    alignItems: "center",
    padding: 13,
    borderRadius: 14,
    backgroundColor: "#F0EEFF",
    marginBottom: 15,
  },
  moreUpdatesText: {
    flex: 1,
    fontSize: 11,
    lineHeight: 17,
    color: C.text,
    marginLeft: 9,
  },
  doneButton: {
    height: 48,
    borderRadius: 14,
    backgroundColor: C.primary,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  doneButtonPressed: {
    opacity: 0.85,
  },
  doneButtonText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#FFFFFF",
  },
});
