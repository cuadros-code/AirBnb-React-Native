import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import LocationSearchScreen from '../screens/LocationSearch/'
import GuestScreen from '../screens/Guests'
import HomeTabNavigator from './HomeTabNavigator'
import SearchResults from '../screens/SearchResults'

const Stack = createStackNavigator()

const Router = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"Home"}
          component={HomeTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={"Location Search"}
          component={LocationSearchScreen}
          options={{ title: "Location stack 1" }}
        />
        <Stack.Screen
          name={"Guest"}
          component={GuestScreen}
          options={{ title: "How many people?" }}
        />
        <Stack.Screen
          name={"SearchResults"}
          component={SearchResults}
          options={{ title: "Results" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router
