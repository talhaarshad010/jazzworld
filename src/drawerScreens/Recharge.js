import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {success} from '../store/actions/rechargeA';
const Recharge = ({navigation}) => {
  const [amount, setamount] = useState(0);
  const [recharge, setrecharge] = useState(false);
  const dispatch = useDispatch();
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
          RECHARGE
        </Text>
      </View>
      <TextInput
        onChangeText={text => {
          setamount(text);
        }}
        value={amount}
        keyboardAppearance="dark"
        keyboardType="number-pad"
        placeholder="Enter Amount"
        style={{
          backgroundColor: 'white',
          borderRadius: 15,
          margin: 15,
          fontSize: 15,
          padding: 10,
        }}
      />
      <Text style={{marginHorizontal: 15}}>Amount must be 45 to 5000</Text>
      <View>
        <TouchableOpacity
          onPress={() => {
            // let payload = {value: amount};
            setrecharge(!recharge);
            let payload = {
              new: amount,
            };
            dispatch(success(payload));
          }}
          style={{backgroundColor: '#BB2525', margin: 15, borderRadius: 3}}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
              padding: 10,
            }}>
            Recharge
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Recharge;
