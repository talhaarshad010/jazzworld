import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {chats} from './dummy';
import styles from './style';
const Chat = () => {
  const renderitem1 = ({item, index}) => {
    return (
      <View>
        <View style={styles.chat}>
          <View style={styles.chatchild}>
            <Image style={styles.chatimg} source={{uri: item.img}} />
            <View style={styles.chatchild2}>
              <Text style={styles.chatname}>{item.name}</Text>
              <Text style={styles.chatmsg}>{item.msg}</Text>
            </View>
          </View>
          <Text style={styles.chattime}>{item.time}</Text>
        </View>
      </View>
    );
  };
  return (
    <View>
      <FlatList data={chats} renderItem={renderitem1} />
    </View>
  );
};
export default Chat;
