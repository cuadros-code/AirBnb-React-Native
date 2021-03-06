import React from 'react'
import { Text, View, ImageBackground, Pressable } from 'react-native'
import styles from './styles'
import Fontisto from 'react-native-vector-icons/Fontisto'
// import { useNavigation } from '@react-navigation/native'
// const navigation = useNavigation()

const HomeScreen = ({ navigation }) => {


  return (
    <View>
      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.image}
      >
        <View style={styles.overlay}>
          <Pressable
            style={styles.searchButton}
            onPress={() => navigation.navigate('Location Search')}
          >
            <Fontisto name="search" size={25} color="#f15454" />
            <Text style={styles.searchButtonText} >Where are you going?</Text>
          </Pressable>

          <Text
            style={styles.title}
          >
            Go Near
        </Text>

          <Pressable
            style={styles.button}
            onPress={() => console.log('hola')}
          >
            <Text style={styles.textBotton} >Explore nearby stays</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  )
}

export default HomeScreen

