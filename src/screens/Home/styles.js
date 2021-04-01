import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
  overlay: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.234)',
  },
  image: {
    resizeMode: "cover",
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    marginTop: 110,
    fontWeight: 'bold',
    width: '70%',
    padding: 20,
    color: 'white',
  },
  button: {
    backgroundColor: 'white',
    width: 200,
    marginLeft: 20,
    height: 45,
    marginTop: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBotton: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  searchButton: {
    backgroundColor: '#fff',
    height: 50,
    width: Dimensions.get('screen').width - 20,
    top: 30,
    borderRadius: 30,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
  searchButtonText: {
    fontSize: 17,
    marginLeft: 10,
    fontWeight: 'bold',
  },

})

export default styles