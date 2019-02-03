import React, {Component} from 'react';
import {Linking, Text, TouchableOpacity, View, Image} from 'react-native';

import {connect} from 'react-redux';

const styles = require('./SearchResultsStyles');

class SearchResults extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={styles.searchResultsContainer}>
        <Text style={styles.title}>{this.props.results.title}</Text>
        <Text style={styles.content}>{this.props.results.extract}</Text>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    results: state.results
  };
}

export default connect(mapStateToProps, null)(SearchResults);
