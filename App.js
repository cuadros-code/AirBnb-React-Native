import 'react-native-gesture-handler';
import React from 'react';
import {
  StatusBar
} from 'react-native';
import Router from './src/navigation/Router';

const App = () => {

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#000"
      />
      <Router />
    </>
  );
};

export default App;
