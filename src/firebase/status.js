import * as React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {chats} from './dummy';
import styles from './style';
const Stat = () => {
  const renderitem1 = ({item, index}) => {
    return (
      <View>
        <View style={styles.chat}>
          <View style={styles.chatchild}>
            <Image style={styles.statusimg} source={{uri: item.img}} />
            <View style={styles.chatchild2}>
              <Text style={styles.chatname}>{item.name}</Text>
              <Text style={styles.chattime}>{item.time}</Text>
            </View>
          </View>
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
export default Stat;
