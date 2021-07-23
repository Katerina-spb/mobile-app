import React, { useState } from 'react';
import WeatherIcon from './WeatherIcon.js';
import { Text, TextInput, View, Button, onChangeText } from 'react-native';

function Weather (props) {

  const [isCelsius, setIsCelsius] = useState(true);
  let celsius = Math.round(props.data.main.temp);
  let fahrenheit = Math.round((props.data.main.temp * 9) / 5 + 32);

  function switchUnits (e) {
    e.preventDefault();
    setIsCelsius(!isCelsius);
  }

  return (
    <View id = 'data_container'>
      <WeatherIcon iconNum={props.data.weather[0].icon} />

      {isCelsius
      ? <span id = 'temp'> {celsius}<span id = 'units'> °C | <a href = '/' onClick = {switchUnits}>°F</a></span></span>
      : <span id = 'temp'> {fahrenheit}<span id = 'units'> <a href = '/' onClick = {switchUnits}>°C</a>|°F </span></span>
      }

        <Text>{props.data.weather[0].main}</Text>
        <Text>Humidity: {props.data.main.humidity}%</Text>
        <Text>Wind: {Math.floor(props.data.wind.speed)} km/hr</Text>

    </View>
  )
}

export default Weather;