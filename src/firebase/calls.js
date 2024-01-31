import * as React from 'react';
import {FlatList, Image, ScrollView, Text, View} from 'react-native';
import {chats} from './dummy';
import styles from './style';
const Call = () => {
  const renderItem1 = ({item, index}) => {
    return (
      <View>
        <View style={styles.chat}>
          <View style={styles.chatchild}>
            <Image style={styles.chatimg} source={{uri: item.img}} />
            <View style={styles.chatchild2}>
              <Text style={styles.chatname}>{item.name}</Text>
              <Text style={styles.chattime}>{item.time}</Text>
            </View>
          </View>
          <Image
            style={styles.telephone}
            source={{
              uri: 'https://img.icons8.com/?size=512&id=b7F1F6mHPgxh&format=png',
            }}
          />
        </View>
      </View>
    );
  };
  return (
    <View>
      <ScrollView>
        <View style={styles.call_link_main_view}>
          <View style={styles.call_link_view}>
            <Image
              style={styles.call_link_img}
              source={{
                uri: 'https://img.icons8.com/?size=512&id=7867&format=png',
              }}
            />
          </View>
          <View style={styles.call_link_text_view}>
            <Text style={styles.call_link_text_01}>Create Call Link</Text>
            <Text style={styles.call_link_text_02}>
              Share a link for your WattsApp call
            </Text>
          </View>
        </View>
        <Text style={styles.text}>Recent</Text>
        <FlatList data={chats} renderItem={renderItem1} />
      </ScrollView>
    </View>
  );
};
export default Call;
