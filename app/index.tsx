import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Footer from '../components/Footer';
import LittleLemonHeader from '../components/LittleLemonHeader';
import WelcomeScreen from '../WelcomeScreen';

export default function Index() {
  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader />
        <WelcomeScreen />
      </View>
      <View style={styles.footerContainer}>
        <Footer />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});

