import React, { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'

const GuestsSelector = ({ title, description, state, setState }) => {

  const [numberAdults, setNumberAdults] = useState(0)

  return (
    <View style={styles.container} >
      <View style={styles.row}>
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 17 }} >{title}</Text>
          <Text style={{ color: '#8d8d8d', fontSize: 15 }} >{description}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable
            onPress={() => setState(Math.max(0, state - 1))}
            style={styles.button}
          >
            <Text style={{ fontSize: 20 }}>-</Text>
          </Pressable>

          <Text style={{ fontSize: 20, marginHorizontal: 10 }} >{state}</Text>

          <Pressable
            onPress={() => setState(state + 1)}
            style={styles.button}
          >
            <Text style={{ fontSize: 20 }} >+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default GuestsSelector
