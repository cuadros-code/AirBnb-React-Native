import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/Home'
import SearchResulstTabNavigator from './SearchResulstTabNavigator'

const Stack = createStackNavigator()

const ExploreNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={HomeScreen}
        options={{
          headerShown: false,
          title: 'Explore Navigator'
        }}
      />
      <Stack.Screen
        name="SearchResults"
        component={SearchResulstTabNavigator}
        options={{
          title: 'Explore Navigator'
        }}
      />

    </Stack.Navigator>
  )
}

export default ExploreNavigator
