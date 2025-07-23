# Coffee Expo App

**Disclaimer:** "Native Coffee" is a fictional establishment created as a playful reference to React Native. This app is not associated with any real business or location.

A mobile application built with [Expo](https://expo.dev) and React Native to showcase coffee expo events, menus, and interactive features. The app provides a modern, tab-based navigation experience and leverages Expo's file-based routing for scalable development.

## Features

- Event listings and schedules
- Interactive menu browsing
- Themed UI with custom components
- Responsive design for iOS and Android
- Fast development workflow with Expo CLI

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

### Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npx expo start
   ```

3. **Run on your device or emulator:**
   - Scan the QR code with [Expo Go](https://expo.dev/go) (iOS/Android)
   - Use an Android emulator or iOS simulator

### Project Structure

```
coffee-expo-app/
├── app/
│   ├── BottomTabNavigator.tsx
│   ├── HomeScreen.tsx
│   ├── MenuScreen.tsx
│   ├── layout.tsx
│   ├── index.tsx
│   └── tabs/
│       ├── EventsScreen.tsx
│       ├── HomeScreen.tsx
│       └── MenuScreen.tsx
├── assets/
│   ├── fonts/
│   │   └── SpaceMono-Regular.ttf
│   └── images/
│       ├── adaptive-icon.png
│       ├── favicon.png
│       ├── icon.png
│       ├── partial-react-logo.png
│       ├── react-logo.png
│       ├── react-logo@2x.png
│       ├── react-logo@3x.png
│       └── splash-icon.png
├── components/
│   └── ui/
│       ├── Collapsible.tsx
│       ├── ExternalLink.tsx
│       ├── HapticTab.tsx
│       ├── HelloWave.tsx
│       ├── IconSymbol.ios.tsx
│       ├── IconSymbol.tsx
│       ├── ParallaxScrollView.tsx
│       ├── TabBarBackground.ios.tsx
│       ├── TabBarBackground.tsx
│       ├── ThemedText.tsx
│       └── ThemedView.tsx
├── constants/
│   └── Colors.ts
├── hooks/
│   ├── useColorScheme.ts
│   ├── useColorScheme.web.ts
│   └── useThemeColor.ts
├── scripts/
│   └── reset-project.js
├── src/
│   └── App.tsx
├── .gitignore
├── app.json
├── eslint.config.js
├── package.json
├── package-lock.json
├── plan.md
├── README.md
└── tsconfig.json
```

## Development Scripts

- **Reset project to starter state:**
  ```bash
  npm run reset-project
  ```

## Contributing

1. Fork the repository
2. Create a new branch for your feature or bugfix
3. Commit your changes with clear messages
4. Open a pull request

## Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Docs](https://reactnative.dev/)
- [Expo Community](https://chat.expo.dev)
