import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Dashboard from './components/Dashboard';
import Chat from './components/Chat';

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "dashboard" component = {Dashboard} title = "Dashboard" initial = {true} />
         <Scene key = "chat" component = {Chat} title = "Chat" />
      </Scene>
   </Router>
);

export default Routes;