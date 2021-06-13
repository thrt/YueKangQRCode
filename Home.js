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
  Alert,
} from 'react-native';
import moment from 'moment';
import Vaccin from './Vaccin';
import Nuclein from './Nuclein';
import Picker from 'react-native-picker';

const Home = (props) => {
  const [time, setTime] = useState('');
  const [nucleinTime, setNucleinTime] = useState('48');

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
      <View style={{ height: 44 }} />
      <Image
        source={require('./images/wechat_tabbar.jpg')}
        style={styles.wechatHeader}
      />
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.viewCityTime}>
          <View style={styles.viewCityMore}>
            <Text style={styles.fontCityTime}>深圳</Text>
            <View style={{ width: 4 }} />
            <Image
              style={styles.imageCityMore}
              source={require('./images/city_more.jpg')}
            />
          </View>
          <View style={styles.viewTimeParent}>
            <Text style={styles.fontCityTime}>{time}</Text>
          </View>
        </View>
        <View style={{ height: 12 }} />
        <Image
          source={require('./images/wechat_code.jpg')}
          style={styles.wechatCode}
        />
        <View style={{ height: 8 }} />
        <View style={styles.viewItems}>
          <Nuclein
            duration={nucleinTime}
            time={moment().add(nucleinTime == '近一周' ? -120 : -(parseInt(nucleinTime) + 6), 'hours').format('YYYY-MM-DD HH:mm')}
            onItemLongPress={() => {
              Picker.init({
                pickerData: ['48', '72', '近一周'],
                onPickerConfirm: (pickedValue, pickedIndex) => {
                  setNucleinTime(pickedValue)
                },
                onPickerCancel: (pickedValue, pickedIndex) => {
                },
                onPickerSelect: (pickedValue, pickedIndex) => {
                }
              })
              Picker.show();
            }}
            onItemPress={() => {
              Alert.alert('提示', '网络错误，请稍后重试', [{ text: '确定', onPress: () => { } }])
            }}
          />
          <Vaccin
            message="暂未查询到数据"
            onItemPress={() => {
              Alert.alert('提示', '未查询到相关记录', [{
                text: '确定', onPress: () => {
                }
              }])
            }}
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
export default Home;