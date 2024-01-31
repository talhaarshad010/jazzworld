import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  loginsuccessreq,
  loginsuccessupdate,
} from './src/store/actions/dataupdate';

const Login = () => {
  const [email, setemail] = useState('');
  const [pass, setpass] = useState('');
  const dispatch = useDispatch();
  const dt = useSelector(state => state.dataupdate.data);
  const onsubmit = () => {
    if (!email && !pass) {
      return alert('fill out these feilds');
    }
    const payload = {
      email: email,
      pass: pass,
    };
    dispatch(loginsuccessupdate(payload));
  };
  const renderItem = ({item, index}) => {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text>{item.email}</Text>
        <Text>{item.pass}</Text>
      </View>
    );
  };
  return (
    <View>
      <TextInput
        onChangeText={setemail}
        value={email}
        placeholder="EMAIL"
        style={{
          height: 40,
          marginHorizontal: 10,
          borderRadius: 15,
          backgroundColor: 'lightgray',
          marginTop: 10,
        }}
      />
      <TextInput
        onChangeText={setpass}
        value={pass}
        placeholder="PASSWORD"
        style={{
          height: 40,
          marginHorizontal: 10,
          borderRadius: 15,
          backgroundColor: 'lightgray',
          marginVertical: 10,
        }}
      />
      <TouchableOpacity
        onPress={() => {
          onsubmit();
        }}
        style={{
          backgroundColor: 'brown',
          marginHorizontal: 100,
          borderRadius: 20,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
            padding: 10,
          }}>
          Submit
        </Text>
      </TouchableOpacity>
      <FlatList data={dt} renderItem={renderItem} />
    </View>
  );
};

export default Login;
