import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import firestore from '@react-native-firebase/firestore';

const Chat = ({route}) => {
  const {myuser, loginuser} = route.params;

  const [messages, setMessages] = useState([]);

  const getallmessages = async () => {
    const docid =
      myuser > loginuser ? loginuser + '-' + myuser : myuser + '-' + loginuser;

    const querysnap = await firestore()
      .collection('Chatrooms')
      .doc(docid)
      .collection('messages')
      .orderBy('createdAt', 'desc')
      .get();
    const allmsg = querysnap.docs.map(docsnap => {
      return {
        ...docsnap.data(),
        createdAt: docsnap.data().createdAt.toDate(),
      };
    });
    setMessages(allmsg);
  };

  useEffect(() => {
    getallmessages();
  }, []);

  const onSend = messagesarray => {
    const msg = messagesarray[0];
    const mymsg = {
      ...msg,
      Sentby: loginuser,
      SentTo: myuser,
      createdAt: new Date(),
    };
    setMessages(previousMessages => GiftedChat.append(previousMessages, mymsg));
    const docid =
      myuser > loginuser ? loginuser + '-' + myuser : myuser + '-' + loginuser;

    firestore()
      .collection('Chatrooms')
      .doc(docid)
      .collection('messages')
      .add({...mymsg, createdAt: firestore.FieldValue.serverTimestamp()});
  };

  useEffect(() => {
    console.log('checkmsgsdata', messages);
  }, []);

  return (
    <View style={{flex: 1}}>
      <Text>Account Login: {loginuser}</Text>
      <Text> Contacts: {myuser}</Text>

      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: loginuser,
        }}
      />
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({});
