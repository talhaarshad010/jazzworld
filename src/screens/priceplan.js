import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Priceplan = ({navigation}) => {
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
          Price Plan
        </Text>
      </View>
      <Text
        style={{color: 'black', fontSize: 20, fontWeight: 'bold', padding: 15}}>
        CALLS
      </Text>
      <View
        style={{
          backgroundColor: 'white',
          marginHorizontal: 15,
          borderRadius: 5,
          flexDirection: 'column',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
            borderBottomColor: 'gray',
            borderBottomWidth: 1,
          }}>
          <View style={{flexDirection: 'column'}}>
            <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>
              On Net
            </Text>
            <Text>60 s</Text>
          </View>
          <Text>Rs 3.50</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
            marginBottom: 10,
          }}>
          <View>
            <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>
              Off Net
            </Text>
            <Text>60 s</Text>
          </View>
          <Text>Rs 3.50</Text>
        </View>
      </View>
      <Text
        style={{color: 'black', fontSize: 20, fontWeight: 'bold', padding: 15}}>
        SMS
      </Text>
      <View
        style={{
          backgroundColor: 'white',
          marginHorizontal: 15,
          borderRadius: 5,
          flexDirection: 'column',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
            alignItems: 'center',
            borderBottomColor: 'gray',
            borderBottomWidth: 1,
          }}>
          <View style={{flexDirection: 'column'}}>
            <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>
              On Net
            </Text>
            <Text>SMS</Text>
          </View>
          <Text>Rs 2.50</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
            marginBottom: 10,
          }}>
          <View>
            <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>
              Off Net
            </Text>
            <Text>SMS</Text>
          </View>
          <Text>Rs 2.50</Text>
        </View>
      </View>
      <Text
        style={{color: 'black', fontSize: 20, fontWeight: 'bold', padding: 15}}>
        SMS
      </Text>
      <View
        style={{
          backgroundColor: 'white',
          marginHorizontal: 15,
          borderRadius: 5,
          flexDirection: 'column',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'column', justifyContent: 'center'}}>
            <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>
              DATA
            </Text>
            <Text>MB</Text>
          </View>
          <Text>Rs 5.00</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Packages');
        }}
        style={{backgroundColor: '#BB2525', margin: 15}}>
        <Text
          style={{
            color: 'white',
            fontSize: 25,
            fontWeight: 'bold',
            textAlign: 'center',
            padding: 10,
          }}>
          View Packages
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Priceplan;
