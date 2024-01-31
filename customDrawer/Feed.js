import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Scene from './Scene';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';

const Feed = () => {
  const navigation = useNavigation();
  return (
    <Scene>
      <View style={{backgroundColor: 'white', flex: 1}}>
        <TouchableOpacity
          style={{margin: 20}}
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Entypo name="menu" size={30} color="black" />
        </TouchableOpacity>
        <View
          style={{
            height: 150,
            width: 250,
            backgroundColor: 'black',
            borderRadius: 30,
            alignSelf: 'center',
          }}></View>
      </View>
    </Scene>
  );
};

export default Feed;
