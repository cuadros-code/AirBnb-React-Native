import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import SearchResults from '../screens/SearchResults'
import SearchsResultsMap from '../screens/SearchsResultsMap'

const Tab = createMaterialTopTabNavigator()

const SearchResulstTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#f15454',
        indicatorStyle: {
          backgroundColor: '#f15454'
        }
      }}
    >
      <Tab.Screen name="list" component={SearchResults} />
      <Tab.Screen name="map" component={SearchsResultsMap} />
    </Tab.Navigator>
  )
}

export default SearchResulstTabNavigator
