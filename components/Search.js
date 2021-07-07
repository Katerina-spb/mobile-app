import React, { useState } from 'react';
import { Text, TextInput, View, Button, onChangeText } from 'react-native';

const Search = () => {
  const [value, onChangeText] = useState('');
  const [city, setCity] = useState('Austin');

  const handlePress = () => {
    console.log('button pressed');
    setCity(value)

  }

  return (
    <View>
      <View style = {{flexDirection: 'row'}}>
        <TextInput
          onChangeText ={onChangeText}
          style={{ height: 30, width: 200, borderColor: 'gray', borderWidth: 1 }} />
        <Button title = 'Search' onPress={handlePress} />
      </View>
      <Text>{city}</Text>
    </View>
  )
}

export default Search;