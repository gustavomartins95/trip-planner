import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 20,
  },
  wrapperInfo: {
    flex: 1,
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingLeft: 20,
  },
  itemDescription: {
    fontSize: 12,
    paddingLeft: 20,
  },
  itemWrapperPrice: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 20,
  },
  itemPrice: {
    textAlign: 'right',
    color: '#24C6DC',
    fontWeight: 'bold',
  },

  wrapper: {
    flex: 1,
  },
  header: {
    backgroundColor: '#EEEEEE',
    height: 220,
  },
  backButton: {
    position: 'absolute',
    top: 30,
    left: 10,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
  },
  tripName: {
    position: 'absolute',
    left: 10,
    bottom: 15,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  tripPrice: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    textAlign: 'right',
    backgroundColor: '#24C6DC',
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    color: 'white',
    fontWeight: 'bold',
  },

  input: {
    fontSize: 16,
    backgroundColor: '#E1E1E1',
    padding: 20,
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
  },
  wrapperButton: {
    backgroundColor: '#7DC383',
    padding: 20,
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
  },
  button: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },
})
