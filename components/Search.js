import React, { useState } from 'react';
import { Text, TextInput, View, Button, onChangeText } from 'react-native';

const Search = (props) => {
  const [value, onChangeText] = useState('');

  const handlePress = () => {
    props.handleChange(value);
  }

  return (
    <View>
      <View style = {{flexDirection: 'row'}}>
        <TextInput
          onChangeText ={onChangeText}
          style={{ height: 30, width: 200, borderColor: 'gray', borderWidth: 1 }} />
        <Button title = 'Search' onPress={handlePress} />
      </View>
    </View>
  )
}

export default Search;