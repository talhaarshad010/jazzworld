import {View, Text} from 'react-native';
import React, {useEffect} from 'react';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('MainScreen');
    }, 3000);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'red', fontSize: 40, fontWeight: 'bold'}}>
        Jazz world
      </Text>
    </View>
  );
};

export default Splash;
