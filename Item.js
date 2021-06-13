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

const App = props => {
  return (
    <View style={styles.all}>
      <View style={styles.viewTitle}>
        <Image source={props.image} style={styles.imageImage} />
        <View style={{width: 4}} />
        <Text style={styles.textTitle}>{props.title}</Text>
        <View style={{width: 4}} />
        <Image
          source={require('./images/item_more.jpg')}
          style={styles.imageMore}
        />
      </View>
      <Text style={[styles.textMessage, {color: props.fontColor}]}>
        {props.message}
      </Text>
      <Text style={styles.textTimeOrArea}>{props.timeOrArea}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  all: {
    height: 144,
    width: Dimensions.get('screen').width / 2 - 24,
    borderRadius: 4,
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    display: 'flex',
  },
  textTitle: {
    fontSize: 18,
    color: 'black',
  },
  viewTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
  },
  imageImage: {
    height: 24,
    width: 24,
  },
  imageMore: {
    height: 18,
    width: 18,
  },
  textMessage: {
    fontSize: 22,
    fontWeight: '400',
  },
  textTimeOrArea: {
    fontSize: 16,
    color: 'grey',
  },
});

export default App;
