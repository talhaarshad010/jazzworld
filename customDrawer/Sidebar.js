import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
const Sidebar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <View style={{flex: 1}}>
      <View style={{height: 50, width: '100', backgroundColor: 'black'}}>
        <TouchableOpacity
          style={{paddingVertical: 10, marginHorizontal: 10}}
          onPress={() => {
            setMenu(!menu);
          }}>
          <Entypo name="menu" color="white" size={30} />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            width: '15%',
            height: 690,
            backgroundColor: 'black',
            position: 'absolute',
            flexDirection: 'column',
            alignItems: 'center',
            paddingVertical: 20,
          }}>
          <TouchableOpacity
            style={{paddingVertical: 10}}
            onPress={() => {
              setMenu(true);
            }}>
            <Entypo name="box" color="white" size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{paddingVertical: 10}}
            onPress={() => {
              setMenu(true);
            }}>
            <Entypo name="mail" color="white" size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{paddingVertical: 10}}
            onPress={() => {
              setMenu(true);
            }}>
            <Entypo name="emoji-neutral" color="white" size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{paddingVertical: 10}}
            onPress={() => {
              setMenu(true);
            }}>
            <AntDesign name="setting" color="white" size={30} />
          </TouchableOpacity>
        </View>

        <View>
          {menu ? (
            <View
              style={{
                height: 690,
                width: 170,
                backgroundColor: 'black',
                marginLeft: 54,
              }}>
              <View style={{marginVertical: 25}}>
                <Text
                  style={{
                    color: 'white',
                    alignSelf: 'center',
                    paddingVertical: 15,
                  }}>
                  Inbox
                </Text>
                <Text
                  style={{
                    color: 'white',
                    alignSelf: 'center',
                    paddingVertical: 15,
                  }}>
                  Mail
                </Text>
                <Text
                  style={{
                    color: 'white',
                    alignSelf: 'center',
                    paddingVertical: 15,
                  }}>
                  Hi!
                </Text>
                <Text
                  style={{
                    color: 'white',
                    alignSelf: 'center',
                    paddingVertical: 15,
                  }}>
                  Settings
                </Text>
              </View>
              <TouchableOpacity
                style={{top: 300, marginLeft: 100}}
                onPress={() => {
                  setMenu(false);
                }}>
                <Entypo name="circle-with-cross" color="white" size={40} />
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
      </View>
    </View>
  );
};

export default Sidebar;
