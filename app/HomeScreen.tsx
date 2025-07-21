import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
import { Building, Coffee, Heart } from 'lucide-react-native';

const MAP_URL =
  'https://maps.apple.com/?address=4005%20Golden%20Triangle%20Blvd,%20Fort%20Worth,%20TX%2076244&ll=32.9346,-97.2911&q=Axiom%20Coffee';

const HomeScreen = () => (
  <SafeAreaView style={styles.safeArea}>
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>
        <Text style={styles.title}>Axiom Coffee</Text>
        <Text style={styles.tagline}>CONNECTING TO THE COMMUNITY</Text>
        <View style={styles.card}>
          <Text style={styles.mission}>
            Axiom meaning a statement or proposition that is regarded as being established, accepted, or self-evidently true. Axiom Coffee has been talked about and worked on for four years. Axiom exists to serve the best coffee in an environment that develops community.
          </Text>
        </View>
        <View style={styles.versatileBlock}>
          <Building color="#4B2473" size={32} style={styles.blockIcon} />
          <Text style={styles.blockTitle}>Versatile Space</Text>
          <Text style={styles.blockText}>
            Experience a dynamic environment designed for productivity and connection. Whether you're studying, hosting business meetings in our Executive Suite, or gathering with friends and family, our space adapts to your needs.
          </Text>
        </View>
        <View style={styles.roastedBlock}>
          <Coffee color="#4B2473" size={32} style={styles.blockIcon} />
          <Text style={styles.blockTitle}>Expertly Roasted</Text>
          <Text style={styles.blockText}>
            Savor coffee crafted from organically grown beans, meticulously sourced from the mile-high mountains near Tegucigalpa, Honduras. Our dedication to quality ensures every cup delivers exceptional flavor and freshness.
          </Text>
        </View>
        <View style={styles.ethicalBlock}>
          <Heart color="#4B2473" size={32} style={styles.blockIcon} />
          <Text style={styles.blockTitle}>Ethically Sourced</Text>
          <Text style={styles.blockText}>
            Enjoy coffee that reflects our commitment to responsible sourcing. We partner with growers in the mountainous regions outside Tegucigalpa, Honduras, supporting sustainable practices and fair relationships.
          </Text>
        </View>
        <View style={styles.hoursCard}>
          <Text style={styles.infoTitle}>Hours</Text>
          <Text style={styles.info}>Monday - Saturday: 8:00 AM – 6:00 PM</Text>
          <Text style={styles.info}>Sunday Closed</Text>
        </View>
        <View style={styles.mapContainer}>
          <WebView
            source={{ uri: MAP_URL }}
            style={styles.map}
            javaScriptEnabled
            scrollEnabled={false}
            allowsInlineMediaPlayback
          />
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    padding: 24,
    alignItems: 'center',
  },
  container: {
    width: '100%',
    alignItems: 'center',
  },
  versatileBlock: {
    backgroundColor: '#F3E9FF',
    borderRadius: 12,
    padding: 16,
    width: '100%',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#4B2473',
  },
  roastedBlock: {
    backgroundColor: '#E6D6F7',
    borderRadius: 12,
    padding: 16,
    width: '100%',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#4B2473',
  },
  ethicalBlock: {
    backgroundColor: '#EDE7F6',
    borderRadius: 12,
    padding: 16,
    width: '100%',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#4B2473',
  },
  blockIcon: {
    alignSelf: 'center',
    marginBottom: 4,
  },
  blockTitle: {
    color: '#4B2473',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center',
  },
  blockText: {
    color: '#4B2473',
    fontSize: 15,
    textAlign: 'center',
  },
  title: {
    color: '#4B2473',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 16,
    textAlign: 'center',
  },
  tagline: {
    color: '#4B2473',
    fontSize: 18,
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#E6D6F7',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    width: '100%',
  },
  mission: {
    color: '#4B2473',
    fontSize: 16,
    textAlign: 'center',
  },
  hoursCard: {
    backgroundColor: '#E6D6F7',
    borderRadius: 12,
    padding: 16,
    width: '100%',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#4B2473',
  },
  infoTitle: {
    color: '#4B2473',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center',
  },
  info: {
    color: '#4B2473',
    fontSize: 15,
    marginBottom: 4,
    textAlign: 'center',
  },
  mapContainer: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    overflow: 'hidden',
    marginTop: 16,
  },
  map: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
});

export default HomeScreen;