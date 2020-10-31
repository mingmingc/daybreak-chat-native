import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { APP_ID, USER_ID } from './src/const';
import Connect from './src/Connect';
import Routes from './src/Routes';

export default function App() {
  Connect(APP_ID, USER_ID);
  return (
    <Routes />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
