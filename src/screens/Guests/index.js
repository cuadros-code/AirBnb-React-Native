import React, { useState } from 'react'
import { Pressable, View, Text, StyleSheet } from 'react-native'
import GuestsSelector from '../../components/GuestsSelector'
// import { useNavigation } from '@react-navigation/native'
// const navigation = useNavigation()

const GuestScreen = ({ navigation }) => {

  const [numberAdults, setNumberAdults] = useState(0)
  const [numberChildrens, setNumberChildrens] = useState(0)
  const [numberInfants, setNumberInfants] = useState(0)


  return (
    <>
      <View style={{ flex: 1 }}>

        <GuestsSelector
          title="Adults"
          description="Ages 13 or above"
          state={numberAdults}
          setState={setNumberAdults}
        />
        <GuestsSelector
          title="Children"
          description="Ages 2 - 12"
          state={numberChildrens}
          setState={setNumberChildrens}
        />
        <GuestsSelector
          title="Infants"
          description="Under 2"
          state={numberInfants}
          setState={setNumberInfants}
        />
      </View>

      <View>
        <Pressable
          style={styles.buttonSearch}
          onPress={() => navigation.navigate('Home', {
            screen: 'Explore', // TabNavigator
            params: {
              screen: 'SearchResults'
            }
          })}
        >
          <Text style={styles.textButtonSearch} >Search</Text>
        </Pressable>
      </View>
    </>
  )
}

export default GuestScreen

const styles = StyleSheet.create({
  buttonSearch: {
    backgroundColor: '#f15454',
    width: '90%',
    paddingVertical: 15,
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 10,
    alignItems: 'center',
  },
  textButtonSearch: {
    color: '#fff',
    fontSize: 19,
    fontWeight: 'bold',
  }
})