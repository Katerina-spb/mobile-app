import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Search from './components/Search';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <Search />
        <Text>Hello there. This is Katya....</Text>
        <Text>Как дела????????</Text>
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
