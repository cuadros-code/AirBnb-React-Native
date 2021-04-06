import React, { useState } from 'react'
import { View, Text, TextInput, FlatList, Image } from 'react-native'
import styles from './styles'
import searchResults from '../../../assets/data/search'
import Entypo from 'react-native-vector-icons/Entypo'


const LocationSearchScreen = () => {
  const [inputText, setInputText] = useState('')


  return (
    <View style={styles.container}>
      <TextInput
        value={inputText}
        onChangeText={setInputText}
        style={styles.textInput}
        placeholder="Search Locations"
      />
      <FlatList
        data={searchResults}
        renderItem={({ item }) => (
          <View
            style={styles.row}
            onStartShouldSetResponder={() => console.log(item.description)}
          >
            <View style={styles.iconContainer}>
              <Entypo name="location-pin" size={30} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </View>
        )}
      />

    </View>
  )
}

export default LocationSearchScreen
