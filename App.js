/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import HomeScreen from './src/screens/Home';
import Post from './src/components/Post'
import data from './assets/data/feed'
import SearchResults from './src/screens/SearchResults';
import LocationSearchScreen from './src/screens/LocationSearch';
import GuestScreen from './src/screens/Guests';


const App: () => Node = () => {

  // const post = data[0]
  return (
    <>
      <SafeAreaView>
        {/* <HomeScreen /> */}
        {/* <Post post={post} /> */}
        {/* <SearchResults /> */}
        {/* <LocationSearchScreen /> */}
        <GuestScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
