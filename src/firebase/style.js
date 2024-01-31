import {StyleSheet} from 'react-native';
export default styles = StyleSheet.create({
  // -----------------------------------------header-----------------------------------------
  whattsapp: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  HV: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'seagreen',
  },
  HVchild: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  HVI: {
    height: 25,
    width: 25,
    tintColor: 'white',
    marginRight: 15,
  },
  // -----------------------------------------chats-----------------------------------------
  chat: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chatchild: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chatchild2: {
    flexDirection: 'column',
    marginLeft: 15,
  },
  chatimg: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  chatname: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  chatmsg: {
    fontSize: 20,
  },
  chattime: {
    fontSize: 15,
  },
  // -----------------------------------------chats-----------------------------------------
  statusimg: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 5,
    borderColor: 'seagreen',
  },
  // -----------------------------------------calls-----------------------------------------
  call_link_main_view: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  call_link_view: {
    height: 50,
    width: 50,
    borderRadius: 30,
    backgroundColor: 'seagreen',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  call_link_img: {
    height: 30,
    width: 30,
    tintColor: 'white',
  },
  call_link_text_view: {
    marginLeft: 15,
  },
  call_link_text_01: {
    color: 'black',
    fontSize: 17,
  },
  call_link_text_02: {
    fontSize: 15,
  },
  text: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 20,
    paddingHorizontal: 20,
  },
  telephone: {
    height: 30,
    width: 30,
    tintColor: 'seagreen',
  },
});
