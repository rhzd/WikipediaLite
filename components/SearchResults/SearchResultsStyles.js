const React = require('react-native');
const { Dimensions, StyleSheet } = React;

module.exports = StyleSheet.create({
  searchResultsContainer: {
    width: Dimensions.get('window').width - 20,
    alignItems: 'center',
    flex: 9
  },
  resultLink: {
    display: 'flex',
    backgroundColor: '#000',
    borderRadius: 5,
    height: 40,
    width: Dimensions.get('window').width - 10,
    marginVertical: 5,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    marginBottom: 20,
    marginTop:20,
    fontSize: 20,
    color: '#000',
    textAlign: 'center'
  },
  content: {
    fontSize: 17,
    marginHorizontal: 10,
    color: '#344955',
  }
})
