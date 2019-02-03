const React = require('react-native');
const { Dimensions, StyleSheet } = React;

module.exports = StyleSheet.create({
  searchBarContainer: {
    width: Dimensions.get('window').width - 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    flex: 1
  },
  textInputSearch: {
    flex: 8,
    color: '#fff',
    backgroundColor: '#2f95dc',
    borderRadius: 3,
    marginRight: 10,
    height: 40,
    paddingLeft: 10
  },
  textSearchButton: {
    flex: 1,
    backgroundColor: '#2f95dc',
    alignItems: 'center',
    borderRadius: 3,
    justifyContent: 'center',
    padding: 10,
    height: 40
  }
})
