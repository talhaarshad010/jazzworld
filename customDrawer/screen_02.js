import {View, Text, Image, TouchableOpacity, Modal} from 'react-native';
import React, {useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
const ProfileCard = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{flex: 1, backgroundColor: '#3081D0'}}>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}
        style={{
          height: 170,
          width: 280,
          backgroundColor: 'white',
          alignSelf: 'center',
          borderRadius: 20,
          marginTop: 80,
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <View style={{flexDirection: 'column', justifyContent: 'space-around'}}>
          <View>
            <Text style={{fontSize: 15}}>Your Name</Text>
            <Text style={{fontSize: 17, color: 'black', fontWeight: 'bold'}}>
              Carmen Velasco
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View>
              <Text style={{fontSize: 15}}>Rated</Text>
              <Text style={{fontSize: 17, color: 'black', fontWeight: 'bold'}}>
                4.3%
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 15}}>Review</Text>
              <Text style={{fontSize: 17, color: 'black', fontWeight: 'bold'}}>
                135
              </Text>
            </View>
          </View>
        </View>
        <Image
          style={{height: 140, width: 100, borderRadius: 20}}
          source={{
            uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          }}
        />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View
          style={{
            backgroundColor: 'white',
            height: 400,
            top: 290,
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            padding: 20,
          }}>
          <TouchableOpacity
            style={{}}
            onPress={() => {
              setModalVisible(false);
            }}>
            <Entypo name="cross" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <Text style={{fontSize: 18, color: 'black'}}>Start a chat</Text>
              <Entypo name="arrow-right" color="black" size={20} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <Text style={{fontSize: 18, color: 'black'}}>Friends</Text>
              <Entypo name="arrow-right" color="black" size={20} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <Text style={{fontSize: 18, color: 'black'}}>Rating</Text>
              <Entypo name="arrow-right" color="black" size={20} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <Text style={{fontSize: 18, color: 'black'}}>Q&A</Text>
              <Entypo name="arrow-right" color="black" size={20} />
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default ProfileCard;
