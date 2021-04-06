import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

  container: {
    margin: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 15
  },
  bedrooms: {
    marginVertical: 10,
    fontSize: 16,
    color: 'grey'
  },
  description: {
    fontSize: 18,
    lineHeight: 24,
    color: '#3d474b'
  },
  prices: {
    marginTop: 5,
    fontSize: 20,
  },
  oldPrices: {
    color: 'grey',
    textDecorationLine: 'line-through'
  },
  newPrices: {
    fontWeight: 'bold',
  },
  totalPrices: {
    marginTop: 5,
    textDecorationLine: 'underline',
    color: 'grey',
  },


})

export default styles
