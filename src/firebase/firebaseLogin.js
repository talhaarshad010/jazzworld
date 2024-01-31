import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {userdata} from '../store/actions/userdataA';
const FirebaseLogin = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [Pass, setPass] = useState(null);
  const [bool, setBool] = useState(false);
  const [userData, SetUserData] = useState([]);
  const [SpecificUser, SetSpecificUser] = useState({});
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    FetchData();
  }, [bool]);
  useEffect(() => {
    console.log('Selected User', SpecificUser);
  }, [SpecificUser]);
  const FetchData = () => {
    firestore()
      .collection('DemoDB')
      .get()
      .then(data => {
        SetUserData(data.docs);
      });
  };
  const SignUp = async () => {
    setLoading(true);
    if (!email || !Pass) {
      return alert('Enter Credentials');
    }
    let payload = {
      email: email,
      pass: Pass,
      Type: 'Sign UP',
    };
    await firestore()
      .collection('DemoDB')
      .add(payload)
      .then(
        i => alert('DATA SAVED'),
        setEmail(null),
        setPass(null),
        setBool(true),
        setLoading(false),
      )
      .catch(err => alert(JSON.stringify(err)));
    await auth()
      .createUserWithEmailAndPassword(email, Pass)
      .then(() => {
        alert('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        alert(error);
      });
  };

  const LogIn = async () => {
    userData.forEach(Spec_user => {
      if (Spec_user.data().email === email && Spec_user.data().pass === Pass) {
        SetSpecificUser(Spec_user);
        dispatch(userdata(element));
        console.log('.//////', Spec_user);
        navigation.navigate('GoogleAuth');
      }
    });
  };
  // const UpdateData = async () => {
  //   let payload = {
  //     email: email2,
  //     pass: Pass2,
  //     type: 'logIn',
  //   };
  //   await firestore().collection('DemoDB').doc(SpecificUser?.id).set(payload);
  // };
  // const DeleteUser = async () => {
  //   await firestore()
  //     .collection('DemoDB')
  //     .doc(SpecificUser?.id)
  //     .delete()
  //     .then(() => {
  //       alert('User Deleted');
  //     })
  //     .catch(err => {});
  // };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
          color: 'black',
          fontSize: 30,
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        {bool ? 'Log In' : 'Sign Up'}
      </Text>
      <TextInput
        style={{
          backgroundColor: 'white',
          width: '90%',
          marginVertical: 10,
          elevation: 10,
          borderRadius: 10,
        }}
        placeholderTextColor={'lightgray'}
        placeholder="E-mail"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={{
          backgroundColor: 'white',
          width: '90%',
          marginVertical: 10,
          elevation: 10,
          borderRadius: 10,
        }}
        placeholderTextColor={'lightgray'}
        placeholder="Password"
        onChangeText={setPass}
        value={Pass}
      />
      <TouchableOpacity
        onPress={bool ? LogIn : SignUp}
        style={{
          backgroundColor: 'skyblue',
          padding: 15,
          borderRadius: 10,
          marginHorizontal: 80,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {isLoading ? (
          <ActivityIndicator color="green" size={30} />
        ) : (
          <Text style={{color: 'black', fontSize: 20}}>
            {bool ? 'Log In' : 'Sign Up'}
          </Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => [setBool(true)]}>
        <Text>Already have an account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FirebaseLogin;
