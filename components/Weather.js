
import React, { useState } from 'react';
import WeatherIcon from './WeatherIcon.js';
import { Text, TextInput, View, Button, onChangeText } from 'react-native';
// import './WeatherData.css';

function Weather (props) {

  const [isCelsius, setIsCelsius] = useState(true);
  let celsius = Math.round(props.data.main.temp);
  // let celsius = 10;
  let fahrenheit = Math.round((10 * 9) / 5 + 32);

  function switchUnits (e) {
    e.preventDefault();
    setIsCelsius(!isCelsius);
  }
  // "01d"

  return (
    <View id = 'data_container'>

      <WeatherIcon iconNum={props.data.weather[0].icon} />
      {/* <WeatherIcon iconNum="01d" /> */}
      {isCelsius
      ? <span id = 'temp'> {celsius}<span id = 'units'> °C | <a href = '/' onClick = {switchUnits}>°F</a></span></span>
      : <span id = 'temp'> {fahrenheit}<span id = 'units'> <a href = '/' onClick = {switchUnits}>°C</a>|°F </span></span>
      }

      {/* <ul id = 'list'> */}
        {/* <li>{props.data.weather[0].main}</li>
        <li>Humidity: {props.data.main.humidity}%</li>
        <li>Wind: {Math.floor(props.data.wind.speed)} km/hr</li> */}

        {/* <li><Text>111</Text></li>
        <li><Text>Humidity:80%</Text></li>
        <li><Text>Wind: 2 km/hr</Text></li>
      </ul> */}

        <Text>{props.data.weather[0].main}</Text>
        <Text>Humidity: {props.data.main.humidity}%</Text>
        <Text>Wind: {Math.floor(props.data.wind.speed)} km/hr</Text>



    </View>
  )
}

export default Weather;