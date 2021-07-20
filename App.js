import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Search from './components/Search';
import City from './components/City';

export default function App() {
  const [city, setCity] = useState('Austin');

  const handleCityChange = (newCity) => {
    setCity(newCity);
  }

  return (
    <SafeAreaView style={styles.container}>
        <Search handleChange = {handleCityChange} />
        <City city = {city} />

        <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
