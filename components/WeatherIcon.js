import React from 'react';
import { View, StyleSheet } from 'react-native';
import ReactAnimatedWeather from 'react-animated-weather';

function WeatherIcon (props) {

  const iconMatch = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "CLOUDY",
    "03n": "CLOUDY",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "SLEET",
    "09n": "SLEET",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "SLEET",
    "11n": "SLEET",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };

  return (
    <View style = {styles.icon}>
      <ReactAnimatedWeather
        icon={iconMatch[props.iconNum]}
        color="#ffd7c9"
        size={props.size || 64}
        animate={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    maxWidth: 100,
    top: 10
  },
});

export default WeatherIcon;