import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {PackagesDATA} from '../utils/packagesDATA';
import {success} from '../store/actions/pushpackagesA';
const Packages = ({navigation}) => {
  const dispatch = useDispatch();
  const renderItems = ({item, index}) => {
    return (
      <View
        style={{
          height: 150,
          backgroundColor: 'white',
          padding: 10,
          marginBottom: 20,
        }}>
        <Text style={{color: 'black', fontSize: 25, fontWeight: 'bold'}}>
          {item.title}
        </Text>
        <Text>Validity:{item.Validity}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginVertical: 20,
            alignItems: 'center',
          }}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>
            {item.Internet}
          </Text>
          <Text style={{color: 'black', fontWeight: 'bold'}}>{item.onnet}</Text>
          <Text style={{color: 'black', fontWeight: 'bold'}}>{item.SMS}</Text>
          <View>
            <TouchableOpacity>
              <Text style={{color: 'red'}}>View Details</Text>
            </TouchableOpacity>
            <Text style={{color: '#E9B824', fontWeight: 'bold', fontSize: 20}}>
              {item.Rs}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            dispatch(success(item));
          }}
          style={{backgroundColor: '#BB2525', marginHorizontal: 30}}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 25,
              fontWeight: 'bold',
              padding: 5,
            }}>
            Subscribe
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View>
      <View
        style={{
          backgroundColor: '#BB2525',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Ionicons
            name="chevron-back"
            size={25}
            color="white"
            style={{marginHorizontal: 10}}
          />
        </TouchableOpacity>
        <Text
          style={{
            margin: 15,
            fontSize: 25,
            color: 'white',
            fontWeight: 'bold',
            marginLeft: 120,
          }}>
          PACKAGES
        </Text>
      </View>
      <FlatList data={PackagesDATA} renderItem={renderItems} />
    </View>
  );
};

export default Packages;
