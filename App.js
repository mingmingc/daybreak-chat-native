import React from 'react';
import Routes from './src/Routes';
import Connect from './src/Connect';
import { USER_ID, APP_ID } from './src/const';

export default function App() {
  Connect(APP_ID, USER_ID);
  return (
    <Routes />
  );
}
