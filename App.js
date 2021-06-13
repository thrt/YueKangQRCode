/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import moment from 'moment';
import Item from './Item';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      n: '',
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        n: Math.random(),
      });
      console.log(this);
    }, 1000);
  }

  render() {
    return (
      <View>
        <Text>{this.state.n}</Text>
      </View>
    );
  }
}
export default App;
