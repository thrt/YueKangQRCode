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

const App = () => {
  const [time, setTime] = useState('');
  let timer = null;

  useEffect(() => {
    timer = setInterval(() => {
      setTime(moment().format('YYYY-MM-DD HH:mm:ss'));
    }, 1000);
    return () => {
      timer && clearInterval(timer);
    };
  }, []);

  return (
    <View style={styles.all}>
      <View style={{height: 44}} />
      <Image
        source={require('./images/wechat_tabbar.jpg')}
        style={styles.wechatHeader}
      />
      <ScrollView style={{flex: 1}}>
        <View style={styles.viewCityTime}>
          <View style={styles.viewCityMore}>
            <Text style={styles.fontCityTime}>深圳</Text>
            <View style={{width: 4}} />
            <Image
              style={styles.imageCityMore}
              source={require('./images/city_more.jpg')}
            />
          </View>
          <View style={styles.viewTimeParent}>
            <Text style={styles.fontCityTime}>{time}</Text>
          </View>
        </View>
        <View style={{height: 12}} />
        <Image
          source={require('./images/wechat_code.jpg')}
          style={styles.wechatCode}
        />
        <View style={{height: 8}} />
        <View style={styles.viewItems}>
          <Item
            image={require('./images/item_ok.jpg')}
            fontColor="#3db36e"
            title="核酸检测"
            message="阴性"
            timeOrArea="2021-06-02 10:00"
          />
          <Item
            image={require('./images/item_information.jpg')}
            fontColor="grey"
            title="新冠疫苗"
            message="暂未查询到数据"
            timeOrArea="由接种点上报"
          />
        </View>
        <Image
          source={require('./images/wechat_footer.jpg')}
          style={styles.wechatFooter}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  viewItems: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    paddingHorizontal: 20,
  },
  viewCityMore: {
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
  },
  imageCityMore: {
    height: 16,
    width: 16,
  },
  viewCityTime: {
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  viewTimeParent: {
    backgroundColor: '#3c7dd3',
    borderRadius: 20,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    width: Dimensions.get('screen').width * 0.68,
  },
  all: {
    flex: 1,
    backgroundColor: '#4594f8',
  },
  wechatHeader: {
    height: 55,
    width: Dimensions.get('screen').width,
  },
  wechatFooter: {
    height: 2322 / 2,
    width: Dimensions.get('screen').width,
  },
  wechatCode: {
    height: 323,
    width: Dimensions.get('screen').width,
  },
  fontCityTime: {
    fontSize: 24,
    color: 'white',
    fontWeight: '500',
  },
});
export default App;
