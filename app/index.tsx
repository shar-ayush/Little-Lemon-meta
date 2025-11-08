import * as React from 'react';
import { View } from "react-native";
import Footer from '../components/Footer';
import LittleLemonHeader from '../components/LittleLemonHeader';
import WelcomeScreen from '../WelcomeScreen';
export default function Index() {
  return (
    <>
      <View style={{flex: 1, backgroundColor: '#495E57'}}>
        <LittleLemonHeader />
        <WelcomeScreen />
      </View>
      <View>
        <Footer />
      </View>
    </>

    
  );
}
