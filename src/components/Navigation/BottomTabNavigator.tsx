// BottomTabNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Home/HomeScreen';
import MenuScreen from '../Menu/MenuScreen';
import EventsScreen from '../Events/EventsScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarActiveTintColor: '#4B2473',
      tabBarInactiveTintColor: '#E6D6F7',
      tabBarStyle: { backgroundColor: '#fff', borderTopColor: '#E6D6F7' },
      tabBarIcon: ({ color, size }) => {
        let iconName: keyof typeof Ionicons.glyphMap = 'home';
        if (route.name === 'Home') iconName = 'home';
        else if (route.name === 'Menu') iconName = 'cafe';
        else if (route.name === 'Events') iconName = 'calendar';
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Menu" component={MenuScreen} />
    <Tab.Screen name="Events" component={EventsScreen} />
  </Tab.Navigator>
);

export default BottomTabNavigator;
