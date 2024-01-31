import {NavigationContainer} from '@react-navigation/native';
import styles from './style';
import Stat from './status';
import Call from './calls';
import Chat from './chats';
import {Image, Text, View} from 'react-native';
import Communiity from './community';

const Routes = () => {
  return (
    <NavigationContainer>
      <View style={styles.HV}>
        <Text style={styles.whattsapp}>Whattsapp</Text>
        <View style={styles.HVchild}>
          <Image
            style={styles.HVI}
            source={{
              uri: 'https://img.icons8.com/?size=512&id=11741&format=png',
            }}
          />
          <Image
            style={styles.HVI}
            source={{uri: 'https://img.icons8.com/?size=512&id=132&format=png'}}
          />
          <Image
            style={styles.HVI}
            source={{
              uri: 'https://img.icons8.com/?size=512&id=98963&format=png',
            }}
          />
        </View>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {fontSize: 12, color: 'white', fontWeight: 'bold'},
          tabBarStyle: {backgroundColor: 'seagreen'},
        }}>
        <Tab.Screen
          options={{
            tabBarShowLabel: false,
            tabBarIcon: () => (
              <View>
                <Image
                  style={{height: 30, width: 30, tintColor: 'white'}}
                  source={{
                    uri: 'https://img.icons8.com/?size=512&id=102261&format=png',
                  }}
                />
              </View>
            ),
          }}
          name="com"
          component={Communiity}
        />
        <Tab.Screen name="Chats" component={Chat} />
        <Tab.Screen name="Status" component={Stat} />
        <Tab.Screen name="Calls" component={Call} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
