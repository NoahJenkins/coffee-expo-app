// App.tsx
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import BottomTabNavigator from './BottomTabNavigator';

const App = () => (
  <NavigationContainer>
    <BottomTabNavigator />
  </NavigationContainer>
);

export default App;