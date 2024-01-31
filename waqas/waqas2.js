import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {useDispatch, useSelector} from 'react-redux';
import {requestuser} from '../store/Action/SigninA';

const DashBoard = ({navigation, route}) => {
  const [modalvisible, setmodalvisible] = useState(false);
  const {data} = route.params;
  const dispatch = useDispatch();
  const Alldata = useSelector(state => state.Signup.data);
  const getdata = async () => {
    await firestore()
      .collection('DemoDB')
      .get()
      .then(i => {
        console.log(i.docs);
        dispatch(requestuser(i.docs));
      });
  };

  console.log('Alldata', Alldata);
  useEffect(() => {
    getdata();
  }, []);

  return (
    <View style={{alignItems: 'center'}}>
      <TouchableOpacity
        onPress={() => {
          setmodalvisible(true);
        }}
        style={{alignSelf: 'flex-end'}}>
        <Text>Setting</Text>
      </TouchableOpacity>
      <FlatList
        data={Alldata}
        renderItem={({item, index}) => {
          if (item.data()?.email === data?.data()?.email) {
            return;
          }
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Chat', {
                  loginuser: data?.data()?.email,
                  myuser: item.data().email,
                });
              }}>
              <Text style={{fontSize: 30}}> {item.data().email}</Text>
            </TouchableOpacity>
          );
        }}
      />
      <Text>"sdfdsd" </Text>
      <Modal transparent visible={modalvisible}>
        <View
          style={{
            // height: '100%',
            // width: '100%',
            backgroundColor: 'brown',
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center',
          }}>
          <View
            style={{
              height: 200,
              width: 200,
              borderRadius: 20,
              backgroundColor: 'white',
            }}>
            <TouchableOpacity
              onPress={() => {
                setmodalvisible(false);
              }}>
              <Text style={{alignSelf: 'flex-end'}}>close</Text>
            </TouchableOpacity>
            <Text>user name: {data?.data()?.email} </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DashBoard;

const styles = StyleSheet.create({});
