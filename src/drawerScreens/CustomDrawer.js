import {View, Image, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const CustomDrawer = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{height: 230, backgroundColor: '#952323'}}>
        <View style={{margin: 20}}>
          <Image
            style={{height: 70, width: 70, borderRadius: 50}}
            source={{
              uri: 'https://www.newvisiontheatres.com/wp-content/uploads/2023/06/Dwayne-Johnson.jpg',
            }}
          />
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
              marginVertical: 5,
            }}>
            JOHN DAVIDSON
          </Text>
          <Text style={{color: 'white', fontSize: 15, marginBottom: 5}}>
            0311-2388611
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: 'white', fontWeight: '900', fontSize: 20}}>
              CHAMPION-II
            </Text>
            <FontAwesome5 name="pen" size={20} color="white" />
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('WhatsNew');
        }}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 10,
          borderBottomWidth: 1,
          borderBottomcolor: 'gray',
          padding: 10,
        }}>
        <Entypo
          size={30}
          name="new"
          color="gray"
          style={{marginHorizontal: 20}}
        />
        <Text style={{fontSize: 25}}>Whats New</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Recharge');
        }}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 10,
          borderBottomWidth: 1,
          borderBottomcolor: 'gray',
          padding: 10,
        }}>
        <Entypo
          size={30}
          name="wallet"
          color="gray"
          style={{marginHorizontal: 20}}
        />
        <Text style={{fontSize: 25}}>Recharge</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Invitations');
        }}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 10,
          borderBottomWidth: 1,
          borderBottomcolor: 'gray',
          padding: 10,
        }}>
        <Ionicons
          size={30}
          name="person-add"
          color="gray"
          style={{marginHorizontal: 20}}
        />
        <Text style={{fontSize: 25}}>Invite a friend</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Services');
        }}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 10,
          borderBottomWidth: 1,
          borderBottomcolor: 'gray',
          padding: 10,
        }}>
        <SimpleLineIcons
          size={30}
          name="handbag"
          color="gray"
          style={{marginHorizontal: 20}}
        />
        <Text style={{fontSize: 25}}>More Services</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Locator');
        }}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 10,
          borderBottomWidth: 1,
          padding: 10,
        }}>
        <Entypo
          size={30}
          name="location-pin"
          color="gray"
          style={{marginHorizontal: 20}}
        />
        <Text style={{fontSize: 25}}>Franchise Locator</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Settings');
        }}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 10,
          borderBottomWidth: 1,
          borderBottomcolor: 'gray',
          padding: 10,
        }}>
        <AntDesign
          size={30}
          name="setting"
          color="gray"
          style={{marginHorizontal: 20}}
        />
        <Text style={{fontSize: 25}}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Contact-us');
        }}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 10,
          borderBottomWidth: 1,
          borderBottomcolor: 'gray',
          padding: 10,
        }}>
        <MaterialIcons
          size={30}
          name="contact-support"
          color="gray"
          style={{marginHorizontal: 20}}
        />
        <Text style={{fontSize: 25}}>Contact Us</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Packages');
        }}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 10,
          borderBottomWidth: 1,
          borderBottomcolor: 'gray',
          padding: 10,
        }}>
        <MaterialIcons
          size={30}
          name="contact-support"
          color="gray"
          style={{marginHorizontal: 20}}
        />
        <Text style={{fontSize: 25}}>Packages</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomDrawer;
