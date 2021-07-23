import React, { useState } from 'react';
import WeatherIcon from './WeatherIcon.js';
import { Text, TextInput, View, Button, onChangeText, StyleSheet } from 'react-native';

function Weather (props) {

  const [isCelsius, setIsCelsius] = useState(true);
  let celsius = Math.round(props.data.main.temp);
  let fahrenheit = Math.round((props.data.main.temp * 9) / 5 + 32);

  function switchUnits (e) {
    e.preventDefault();
    setIsCelsius(!isCelsius);
  }

  return (
    <View style = {styles.container}>
      <WeatherIcon iconNum={props.data.weather[0].icon} />

      {isCelsius
      ? <Text style = {styles.temp}> {celsius}<Text style = {styles.units}> °C | <a href = '/' onClick = {switchUnits}>°F</a></Text></Text>
      : <Text style = {styles.temp}> {fahrenheit}<Text style = {styles.units}> <a href = '/' onClick = {switchUnits}>°C</a>|°F </Text></Text>
      }

      <View style = {styles.description}>
        <Text>{props.data.weather[0].main}</Text>
        <Text>Humidity: {props.data.main.humidity}%</Text>
        <Text>Wind: {Math.floor(props.data.wind.speed)} km/hr</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
  temp: {
    fontSize: 60
  },
  units: {
    position: 'relative',
    top: -27,
    fontSize: 20,
  },
  icon: {
    top: 10
  },
  description: {
    fontSize: 60,
    marginLeft: 10
  }
})

export default Weather;