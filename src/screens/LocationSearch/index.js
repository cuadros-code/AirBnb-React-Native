import React, { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import styles, { colors } from './styles'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
const googleKey = process.env.REACT_APP_KEY_API_GOOGLE

const LocationSearchScreen = ({ navigation }) => {
  const [inputText, setInputText] = useState('')

  return (
    <View style={styles.container}>

      <View style={{ height: 500 }} >
        <GooglePlacesAutocomplete
          placeholder='Where are tou going'
          suppressDefaultStyles
          fetchDetails
          onPress={(data, details = null) => {
            navigation.navigate('Guest')
            console.log(data, details);
          }}
          styles={{
            textInput: styles.textInput,
            textInputContainer: {
              borderColor: colors.grayLigth,
              borderWidth: 1,
              borderRadius: 10
            }
          }}
          query={{
            key: googleKey,
            language: 'en',
            types: '(cities)'
          }}
          renderRow={(item) => (
            <View
              style={styles.row}
            >
              <View style={styles.iconContainer}>
                <Entypo name="location-pin" size={30} />
              </View>
              <Text style={styles.locationText}> {item.description} </Text>
            </View>
          )}
        />
      </View>
    </View>
  )
}

export default LocationSearchScreen
