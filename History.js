/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import moment from 'moment';
import Vaccin from './Vaccin';
import Nuclein from './Nuclein';
import Picker from 'react-native-picker';

const History = (props) => {

  return (
    <View style={styles.all}>

    </View>
  );
};

const styles = StyleSheet.create({
  all: {
    flex: 1,
    backgroundColor: '#4594f8',
  },
});

export default History;