import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  map: {
    height: '100%',
    width: '100%',
  },
});

const SearchsResultsMap = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={{ flex: 1 }}
        region={{
          latitude: 52.5200066,
          longitude: 13.404954,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005
        }}
      >
      </MapView>
    </View>
  )
}

export default SearchsResultsMap
