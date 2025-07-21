// MenuScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const menu = {
  hotDrinks: [
    { name: 'Coffee', small: { price: '$2', cal: 5 }, medium: { price: '$2.5', cal: 10 }, large: { price: '$3', cal: 15 } },
    { name: 'Espresso', small: { price: '$2', cal: 5 }, medium: { price: '$2.5', cal: 10 }, large: { price: '$3', cal: 15 } },
    { name: 'Americano', small: { price: '$2.5', cal: 10 }, medium: { price: '$3', cal: 15 }, large: { price: '$3.5', cal: 20 } },
    { name: 'Cappuccino', small: { price: '$3', cal: 80 }, medium: { price: '$3.5', cal: 120 }, large: { price: '$4', cal: 160 } },
    { name: 'Macchiato', small: { price: '$3', cal: 90 }, medium: { price: '$3.5', cal: 130 }, large: { price: '$4', cal: 170 } },
    { name: 'Flat White', small: { price: '$3', cal: 95 }, medium: { price: '$3.5', cal: 140 }, large: { price: '$4', cal: 180 } },
  ],
  coldDrinks: [
    { name: 'Iced Coffee', small: { price: '$2.5', cal: 10 }, medium: { price: '$3', cal: 15 }, large: { price: '$3.5', cal: 20 } },
    { name: 'Cold Brew', small: { price: '$3', cal: 15 }, medium: { price: '$3.5', cal: 20 }, large: { price: '$4', cal: 25 } },
    { name: 'Iced Latte', small: { price: '$3', cal: 100 }, medium: { price: '$3.5', cal: 150 }, large: { price: '$4', cal: 200 } },
    { name: 'Iced Mocha', small: { price: '$3.5', cal: 150 }, medium: { price: '$4', cal: 200 }, large: { price: '$4.5', cal: 250 } },
    { name: 'Iced Americano', small: { price: '$2.5', cal: 10 }, medium: { price: '$3', cal: 15 }, large: { price: '$3.5', cal: 20 } },
    { name: 'Iced Macchiato', small: { price: '$3', cal: 90 }, medium: { price: '$3.5', cal: 130 }, large: { price: '$4', cal: 170 } },
  ],
  specialtyDrinks: [
    { name: 'Latte', small: { price: '$3', cal: 100 }, medium: { price: '$3.5', cal: 150 }, large: { price: '$4', cal: 200 } },
    { name: 'Mocha', small: { price: '$3.5', cal: 150 }, medium: { price: '$4', cal: 200 }, large: { price: '$4.5', cal: 250 } },
    { name: 'Chai Latte', small: { price: '$3.5', cal: 120 }, medium: { price: '$4', cal: 170 }, large: { price: '$4.5', cal: 220 } },
    { name: 'Matcha Latte', small: { price: '$4', cal: 110 }, medium: { price: '$4.5', cal: 160 }, large: { price: '$5', cal: 210 } },
    { name: 'Hot Chocolate', small: { price: '$3', cal: 180 }, medium: { price: '$3.5', cal: 230 }, large: { price: '$4', cal: 280 } },
    { name: 'Affogato', small: { price: '$4', cal: 220 }, medium: { price: '$4.5', cal: 270 }, large: { price: '$5', cal: 320 } },
  ],
  pastries: [
    { name: 'Croissant', price: '$2.5', cal: 250 },
    { name: 'Muffin', price: '$2', cal: 200 },
    { name: 'Scone', price: '$2.5', cal: 220 },
    { name: 'Cinnamon Roll', price: '$3', cal: 350 },
    { name: 'Chocolate Chip Cookie', price: '$1.5', cal: 180 },
    { name: 'Banana Bread', price: '$2.5', cal: 210 },
  ],
};

const renderDrinkSection = (
  title: string,
  items: Array<{
    name: string;
    small: { price: string; cal: number };
    medium: { price: string; cal: number };
    large: { price: string; cal: number };
  }>
) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <View style={styles.gridHeader}>
      <Text style={styles.gridHeaderText}>Item</Text>
      <Text style={styles.gridHeaderText}>Small</Text>
      <Text style={styles.gridHeaderText}>Medium</Text>
      <Text style={styles.gridHeaderText}>Large</Text>
    </View>
    {items.map((item: any, idx: number) => (
      <View style={styles.gridRow} key={idx}>
        <Text style={styles.gridItem}>{item.name}</Text>
        <Text style={styles.gridItem}>{item.small.price} ({item.small.cal} cal)</Text>
        <Text style={styles.gridItem}>{item.medium.price} ({item.medium.cal} cal)</Text>
        <Text style={styles.gridItem}>{item.large.price} ({item.large.cal} cal)</Text>
      </View>
    ))}
  </View>
);

const renderPastriesSection = (
  items: Array<{ name: string; price: string; cal: number }>
) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Pastries</Text>
    <View style={styles.gridHeader}>
      <Text style={styles.gridHeaderText}>Item</Text>
      <Text style={styles.gridHeaderText}>Price</Text>
      <Text style={styles.gridHeaderText}>Calories</Text>
    </View>
    {items.map((item: any, idx: number) => (
      <View style={styles.gridRow} key={idx}>
        <Text style={styles.gridItem}>{item.name}</Text>
        <Text style={styles.gridItem}>{item.price}</Text>
        <Text style={styles.gridItem}>{item.cal}</Text>
      </View>
    ))}
  </View>
);

const MenuScreen = () => (
  <ScrollView style={styles.container}>
    {renderDrinkSection('Hot Drinks', menu.hotDrinks)}
    {renderDrinkSection('Cold Drinks', menu.coldDrinks)}
    {renderDrinkSection('Specialty Drinks', menu.specialtyDrinks)}
    {renderPastriesSection(menu.pastries)}
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  section: {
    backgroundColor: '#E6D6F7',
    borderRadius: 12,
    marginBottom: 20,
    padding: 12,
  },
  sectionTitle: {
    color: '#4B2473',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  gridHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  gridHeaderText: {
    color: '#4B2473',
    fontWeight: 'bold',
    width: '25%',
    textAlign: 'center',
  },
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  gridItem: {
    color: '#4B2473',
    width: '25%',
    textAlign: 'center',
    fontSize: 15,
    // Prevent wrapping and overflow for React Native
    flexShrink: 1,
    flexGrow: 0,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
});

export default MenuScreen;