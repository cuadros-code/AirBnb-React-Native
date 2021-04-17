import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/Home'
import SearchResults from '../screens/SearchResults'
import LocationSearchScreen from '../screens/LocationSearch'

const Stack = createStackNavigator()

const ExploreNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={HomeScreen}
        options={{
          // headerShown: false
          title: 'Explore Navigator'
        }}
      />
      <Stack.Screen
        name="SearchResults"
        component={SearchResults}
        options={{
          title: 'Explore Navigator'
        }}
      />
      <Stack.Screen
        name="LocationSearch"
        component={LocationSearchScreen}
        options={{
          title: 'Search your destination'
        }}
      />
    </Stack.Navigator>
  )
}

export default ExploreNavigator
