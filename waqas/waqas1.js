import {
  ActivityIndicator,
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useDispatch} from 'react-redux';
import {requestuser} from '../store/Action/SigninA';

const Signup = ({navigation}) => {
  const [email, setemail] = useState(null);
  const [pass, setpass] = useState(null);
  const [IsBool, setIsBool] = useState(false);
  const [dbdata, setdbdata] = useState([]);
  const [image, setimage] = useState();

  const [specifieddata, setspecifeiddata] = useState({});
  const dispatch = useDispatch();

  const onsubmit = async () => {
    if (!email && !pass) {
      return alert('Kindly enter the details');
    }
    let payload = {
      email: email,
      pass: pass,
      type: '@SignIn',
    };

    await firestore()
      .collection('DemoDB')
      .add(payload)
      .then(i => {
        alert('data save to our datbase');
        setemail(null);
        setpass(null);
        setIsBool(true);
      })
      .catch(err => {
        alert(JSON.stringify(err));
      });
  };
  useEffect(() => {
    getdbdata();
  }, []);
  useEffect(() => {
    console.log('specifieddata', specifieddata);
  }, [specifieddata]);

  const getdbdata = async () => {
    await firestore()
      .collection('DemoDB')
      .get()
      .then(i => {
        console.log('//////....', i.docs);
        setdbdata(i.docs);
      });
  };

  const OnLogin = async () => {
    dbdata?.forEach(element => {
      if (element.data()?.email === email && element.data()?.pass === pass) {
        setspecifeiddata(element);
        dispatch(requestuser(element));
        navigation.navigate('DashBoard', {data: element});
      }
      console.log('checklogindata', element);
      // console.log('checkreduxdata', element);
    });
  };

  // const launchglery = launchImageLibrary({}).then(img => {
  //   setimage(img.assets);
  // });
  // console.log('Imaaaage', image);
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/profile1.jpg')}
        style={{height: 50, width: 50}}
      />
      <TouchableOpacity>
        <Text> Take Image from gallery </Text>
      </TouchableOpacity>
      <Text style={styles.signtxt}>{IsBool ? 'Login' : 'SignUp'}</Text>
      <TextInput
        style={styles.textinput}
        placeholder="Email"
        value={email}
        onChangeText={setemail}
      />
      <TextInput
        style={styles.textinput}
        placeholder="Password"
        value={pass}
        onChangeText={setpass}
      />
      <TouchableOpacity
        onPress={() => {
          setIsBool(!IsBool);
        }}>
        <Text>{IsBool ? 'Dont have accont' : 'Alredy have an account '}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={IsBool ? OnLogin : onsubmit}
        style={styles.buton}>
        <Text style={{color: 'white'}}> {IsBool ? 'Login' : 'Signup'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  textinput: {
    height: 50,
    width: '90%',
    backgroundColor: '#999',
    alignSelf: 'center',
    paddingHorizontal: 20,
    margin: 20,
  },
  buton: {
    height: 50,
    width: 100,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 20,
  },
  signtxt: {
    color: 'red',
    fontSize: 20,
    alignSelf: 'center',
  },
});
