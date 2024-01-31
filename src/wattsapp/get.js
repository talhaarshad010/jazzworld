import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {useDispatch} from 'react-redux';
import {userdata} from '../store/actions/userdataA';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
const GetData = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [Pass, setPass] = useState(null);
  const [bool, setBool] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dbdata, setDBdata] = useState([]);
  const [SpecificUser, setSpecificUser] = useState({});

  useEffect(() => {
    getDbdata();
  }, [bool]);
  useEffect(() => {
    console.log('Login user ', SpecificUser);
  }, [SpecificUser]);
  GoogleSignin.configure({
    // scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
    webClientId:
      '642609187493-4cl5j9gk7vh63p4pm3kg3n6qm3thb4eo.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    hostedDomain: '', // specifies a hosted domain restriction
    forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    accountName: '', // [Android] specifies an account name on the device that should be used
    iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
    openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
    profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
  });
  const getDbdata = () => [
    firestore()
      .collection('DemoDB')
      .get()
      .then(data => {
        setDBdata(data.docs);
        console.log('FireBase users =====>', data);
      }),
  ];
  const onSubmit = async () => {
    setLoading(true);
    if (!email || !Pass) {
      return alert('paise do pehle');
    }
    let payload = {
      email: email,
      Pass: Pass,
      type: 'signUp',
    };
    await firestore()
      .collection('DemoDB')
      .add(payload)
      .then(
        i => alert('Data Save to FireBase Successfully'),
        setEmail(null),
        setPass(null),
        setBool(true),
        setLoading(false),
      )
      .catch(err => alert(JSON.stringify(err)));
  };
  const dispatch = useDispatch();
  const onlogin = () => {
    dbdata?.forEach(element => {
      if (element.data().email === email && element.data()?.Pass === Pass) {
        setSpecificUser(element);
        dispatch(userdata(element));
        navigation.navigate('Chats', {data: {element}});
      }
      console.log('LogedIn User ============>', element);
    });
  };
  const signIn = async () => {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'black', fontSize: 30, fontWeight: 'bold'}}>
        {bool ? 'Login ' : 'Sign Up'}
      </Text>
      <TextInput
        style={{backgroundColor: 'white', width: '90%', marginVertical: 10}}
        placeholderTextColor={'lightgray'}
        placeholder="E-mail"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={{backgroundColor: 'white', width: '90%', marginVertical: 10}}
        placeholderTextColor={'lightgray'}
        placeholder="Password"
        onChangeText={setPass}
        value={Pass}
      />
      <TouchableOpacity
        onPress={bool ? onlogin : onSubmit}
        style={{backgroundColor: 'skyblue', padding: 15, borderRadius: 10}}>
        {loading ? (
          <ActivityIndicator color={'green'} size={30} />
        ) : (
          <Text style={{color: 'black', fontSize: 15}}>
            {bool ? 'login' : 'Submit'}
          </Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setBool(true);
        }}>
        <Text>Already Have An Account?</Text>
      </TouchableOpacity>
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
        // disabled={this.state.isSigninInProgress}
      />
    </View>
  );
};

export default GetData;
