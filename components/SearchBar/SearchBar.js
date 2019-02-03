import React, {Component} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
// import {API_KEY} from '../../constants/api.js';

import {connect} from 'react-redux';
import {searchResults} from "../../actions";

const styles = require('./SearchBarStyles');
// const cx = '012040760514751621405:3qggxrt9tk8';
const apiURL_EN = 'https://en.wikipedia.org/api/rest_v1/page/summary/'
const apiURL_MS = 'https://ms.wikipedia.org/api/rest_v1/page/summary/'


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }
  searchOnMedium = () => {
    let URL_EN = apiURL_EN + this.state.searchTerm;
    fetch(URL_EN, {
      method: 'GET'
    }).then((response) => {
      if (response.status == 404) {
        let URL_MS = apiURL_MS + this.state.searchTerm;
        fetch(URL_MS, {
          method: 'GET'
        }).then((response) => {
          response.json().then((data) => {
            // console.log(data.extract);
            this.props.searchResults(data);
          })
        }).catch((error) => console.log(error));
      } else {
        response.json().then((data) => {
          // console.log(data.extract);
          this.props.searchResults(data);
        })
      }
    }).catch((error) => console.log(error));
  }

  render() {
    return (

      <View style={styles.searchBarContainer}>
        <TextInput
          placeholder='Enter your search terms'
          placeholderTextColor='#fff'
          style={styles.textInputSearch}
          underlineColorAndroid={'transparent'}
          onChangeText={(searchTerm) => this.setState({ searchTerm })}
          value={this.state.searchTerm}
        />
        <TouchableOpacity
          style={styles.textSearchButton}
          onPress={() => this.searchOnMedium()}
        >
          <FontAwesome name="search" size={16} color="#fff"/>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect(null, {searchResults})(SearchBar);
