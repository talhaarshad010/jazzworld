import React, {useEffect} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {useDispatch, useSelector} from 'react-redux';
import {userdata} from '../store/actions/userdataA';
const Chat = ({navigation, route}) => {
  const {data} = route.params;
  const dispatch = useDispatch();
  const AllData = useSelector(state => state.userdataR.data);
  useEffect(() => {
    Getdata();
  }, []);
  const Getdata = async () => {
    await firestore()
      .collection('DemoDB')
      .get()
      .then(i => {
        console.log(i.docs);
        dispatch(userdata(i.docs));
      });
  };

  console.log('Alldata', AllData);
  return (
    <View style={{flex: 1}}>
      <View>
        <FlatList
          data={AllData}
          renderItem={({item, index}) => {
            // if (item.data()?.email === data?.data()?.email) {
            //   return;
            // }
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('InternalChat', {
                    loginuser: data?.data()?.email,
                    myuser: item.data().email,
                  });
                }}>
                <Text key={index} style={{fontSize: 15, textAlign: 'center'}}>
                  {item.data().email}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
        {/* <Text>user name: {data?.data()?.email}</Text> */}
      </View>
    </View>
  );
};
export default Chat;
