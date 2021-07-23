import { StatusBar } from 'expo-status-bar';
import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Search from './components/Search';
import City from './components/City';
import Weather from './components/Weather';
import apiMaster from './apiMaster.js';

export default function App() {
  const [city, setCity] = useState('Austin');
  const [currentWeather, setCurrentWeather] = useState(false)

  const handleGetWeather = useCallback(() => {
    const getWeather = () => {
      apiMaster.getWeather(city)
      .then((response) => {
        console.log(response)
        setCurrentWeather(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
    }
    getWeather();
  }, [city]);

  useEffect(() => {
    handleGetWeather();
  }, [city]);

  const handleCityChange = (newCity) => {
    setCity(newCity);
  }


  if (currentWeather) {
    return (
      <SafeAreaView style={styles.container}>
          <Search handleChange = {handleCityChange} />
            <City city = {city} />
            <Weather data = {currentWeather} />

          <StatusBar style="auto" />
      </SafeAreaView>
    );
  } else {
    return 'Loading...'
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
