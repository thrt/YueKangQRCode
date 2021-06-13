// 疫苗接种
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
import PropTypes from 'prop-types';

const Vaccin = props => {
  return (
    <View style={styles.all}>
      <View style={styles.viewTitle}>
        <Image source={require('./images/item_information.jpg')} style={styles.imageImage} />
        <View style={{ width: 4 }} />
        <Text style={styles.textTitle}>新冠疫苗</Text>
        <View style={{ width: 4 }} />
        <Image
          source={require('./images/item_more.png')}
          style={styles.imageMore}
        />
      </View>
      <Text style={styles.textMessage}>
        {props.message}
      </Text>
      <Text style={styles.textTimeOrArea}>由接种点上报</Text>
    </View>
  );
};

Vaccin.propTypes = {
}

const styles = StyleSheet.create({
  all: {
    height: 144,
    width: Dimensions.get('screen').width / 2 - 26,
    borderRadius: 4,
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
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
    height: 14,
    width: 14,
    tintColor: 'grey'
  },
  textMessage: {
    fontSize: 22,
    fontWeight: '400',
    color: 'grey'
  },
  textTimeOrArea: {
    fontSize: 16,
    color: 'grey',
  },
});

export default Vaccin;
