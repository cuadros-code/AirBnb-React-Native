import { StyleSheet } from 'react-native'

export const colors = {
  grayLigth: '#e1e1e1'
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  textInput: {
    fontSize: 18,
  },
  row: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  iconContainer: {
    backgroundColor: '#e1e1e1',
    marginRight: 10,
    borderRadius: 15,
    padding: 10
  }
})

export default styles