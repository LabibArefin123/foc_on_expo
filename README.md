# FocOn

**FocOn** is a modern, premium Digital Wellbeing and Focus Management mobile application built with Expo and React Native.

Designed to help users reduce digital distractions, manage social media usage, and stay focused on what truly matters.

**## Features**

- Premium mobile-first interface
- Smart Focus Mode activation (ON/OFF)
- Social media and entertainment app monitoring
- Select and manage restricted applications
- Custom app usage limits (5, 10 minutes or custom duration)
- Individual app-based time restrictions
- Shared usage limit across selected apps
- Smart notifications and usage reminders
- Remaining-time countdown notifications
- Full-screen app restriction interface
- Flexible Mode and Strict Mode
- Configurable focus sessions
- Daily screen-time overview
- Focus session history and analytics
- Persistent local storage
- Background monitoring through native Android services
- Smooth animations and transitions
- Responsive Android and iOS layouts

**## Technology Stack**

- Expo
- React Native
- TypeScript
- Expo Router
- React Native StyleSheet
- AsyncStorage
- Expo SQLite
- Expo Notifications
- React Native Reanimated
- Expo Development Build
- Native Android Kotlin
- Android UsageStatsManager
- Android Foreground Services
- Android Notification Manager
- Android Overlay Permissions

**## Installation**

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/FocOn.git
```

Navigate into the project:

```bash
cd FocOn
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npx expo start
```

**## Development**

Run on Android:

```bash
npx expo run:android
```

Run on iOS:

```bash
npx expo run:ios
```

Generate the native Android project:

```bash
npx expo prebuild --platform android
```

**Note:** FocOn requires an Expo Development Build and native Android integration for application monitoring and restriction functionality. Expo Go does not support the complete monitoring system.

**## Android Permissions**

FocOn may require the following permissions and user-approved capabilities:

- Usage Access – Monitor application usage.
- Notification Permission – Display smart notifications.
- Foreground Service – Maintain background monitoring.
- Display Over Other Apps – Display the restriction interface when needed.
- Boot Completed Receiver – Restore monitoring after device restart.

Permissions are requested transparently and only when required by the corresponding features.

**## Project Structure**

- `app/` - Application screens and navigation
- `components/` - Reusable UI components
- `services/` - Application services and business logic
- `services/storage/` - Local database and preferences
- `services/notifications/` - Smart notification management
- `services/monitoring/` - Application usage monitoring
- `constants/` - Application constants and colors
- `styles/` - Styling and design system
- `hooks/` - Custom React hooks
- `types/` - TypeScript definitions
- `utils/` - Helper functions
- `android/` - Native Android Kotlin integration
- `assets/` - Images, fonts, logos, and icons

**## License**

This project is intended for personal learning and development.
