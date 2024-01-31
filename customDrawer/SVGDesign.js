import React from 'react';
import { Server } from "socket.io";
import {
  Dimensions,
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Svg, {Path} from 'react-native-svg';

export default function App() {
  StatusBar.setHidden(true);
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{height: 300}}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUrb6Z9aD-gCMBCVc0bV0dmcl4jUeuRns8Fg&usqp=CAU',
        }}
      />
      <View style={styles.top}>
        <Svg
          height={200}
          width={Dimensions.get('screen').width}
          viewBox="0 0 1440 720"
          style={styles.topWavy}>
          <Path
            fill="darkblue"
            d="M0,224L48,197.3C96,171,192,117,288,112C384,107,480,149,576,170.7C672,192,768,192,864,197.3C960,203,1056,213,1152,192C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </Svg>
      </View>
      <View
        style={{
          height: 400,
          backgroundColor: 'darkblue',
          marginTop: 90,
          bottom: 270,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{
              height: 100,
              width: 100,
              marginLeft: 20,
              borderRadius: 100,
              top: -30,
            }}
            source={{
              uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            }}
          />
          <View style={{marginLeft: 20}}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Michoel Matt
            </Text>
            <Text
              style={{
                color: 'white',
              }}>
              +92 7278634
            </Text>
          </View>
        </View>
        <View
          style={{height: 100, width: 100, backgroundColor: 'white'}}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topWavy: {
    top: 200,
  },
  top: {
    bottom: 270,
  },
});
