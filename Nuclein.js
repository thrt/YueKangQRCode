// 核酸检测
import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';

const Nuclein = props => {
  const colors = {
    '48': ['#b191f5', '#8660db'],
    '72': ['#52dabf', '#08b898'],
  }

  const isReact3Day = colors.hasOwnProperty(props.duration)

  const createContainer = () => {
    // 近48小时 和 近72小时
    // 更早的时间
    return isReact3Day ? <View style={styles.viewRecent}>
      <Text style={styles.textRecentTime}>{props.duration}</Text>
      <View style={{width: 2}} />
      <View style={styles.viewRecentRight}>
        <Text style={styles.textRecentRight}>小时</Text>
        <Text style={styles.textRecentRight}>阴性</Text>
      </View>
    </View> : <View>
      <Text style={styles.textMessage}>阴性</Text>
    </View>
  }
  
  return (
    <TouchableOpacity
      style={styles.all}
      onLongPress={() => {
        props.onItemLongPress()
      }}
      onPress={() => {
        props.onItemPress()
      }}
    >
      <LinearGradient style={styles.viewLinear} colors={colors[props.duration] || ['#ffffff', '#ffffff']}>
        <View style={styles.viewTitle}>
          <Image source={require('./images/item_ok.png')} style={[styles.imageImage, { tintColor: isReact3Day ? 'white' : '#3db36e' }]} />
          <View style={{ width: 4 }} />
          <Text style={[styles.textTitle, { color: isReact3Day ? 'white' : 'black' }]}>核酸检测</Text>
          <View style={{ width: 4 }} />
          <Image
            source={require('./images/item_more.png')}
            style={[styles.imageMore, { tintColor: isReact3Day ? 'white' : 'grey' }]}
          />
        </View>
        {createContainer()}
        <Text style={[styles.textTime, { color: isReact3Day ? 'white' : 'grey' }]}>{props.time}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  viewLinear: {
    paddingVertical: 12,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 4,
    height: 138,
    width: Dimensions.get('screen').width / 2 - 32,
  },
  all: {
    height: 144,
    width: Dimensions.get('screen').width / 2 - 26,
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4
  },
  viewRecent: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center'
  },
  textRecentTime: {
    fontSize: 56,
    color: 'white',
  },
  viewRecentRight: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    display: 'flex',
    height: 48
  },
  textRecentRight: {
    fontSize: 20,
    color: 'white',
    fontWeight: '500',
    textAlign: 'justify'
  },
  viewMore: {

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
    height: 22,
    width: 22,
  },
  imageMore: {
    height: 14,
    width: 14,
  },
  textMessage: {
    fontSize: 22,
    fontWeight: '400',
    color: '#3db36e'
  },
  textTime: {
    fontSize: 16,
    color: 'grey',
  },
});

export default Nuclein;
