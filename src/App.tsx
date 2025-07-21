// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './components/Navigation/BottomTabNavigator';

const App = () => (
  <NavigationContainer>
    <BottomTabNavigator />
  </NavigationContainer>
);

export default App;