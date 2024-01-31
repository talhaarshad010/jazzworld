import React from 'react';
import {View, Text, Image, Animated, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CircularProgress from 'react-native-circular-progress-indicator';
import {useSelector} from 'react-redux';

const Bottom_Home = ({navigation}) => {
  const selectedPKG = useSelector(state => state.pushpackagesR.data);
  const recharge = useSelector(state => state.rechargeR.data);
  const animatedvalueka = new Animated.Value(0);

  const headermargin = animatedvalueka.interpolate({
    inputRange: [0, 10],
    outputRange: [10, 0],
    extrapolate: 'clamp',
  });
  const headerheight = animatedvalueka.interpolate({
    inputRange: [0, 120],
    outputRange: [120, 100],
    extrapolate: 'clamp',
  });

  const profileleft = animatedvalueka.interpolate({
    inputRange: [0, 10],
    outputRange: [0, 230],
    extrapolate: 'clamp',
  });

  const rechargebutton = animatedvalueka.interpolate({
    inputRange: [40, 70],
    outputRange: [30, 70],
    extrapolate: 'clamp',
  });
  const rechargebuttonwidth = animatedvalueka.interpolate({
    inputRange: [0, 200],
    outputRange: [350, 300],
    extrapolate: 'clamp',
  });
  const rechargebuttonright = animatedvalueka.interpolate({
    inputRange: [0, 250],
    outputRange: [50, 150],
    extrapolate: 'clamp',
  });

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          height: 60,
          width: '100%',
          backgroundColor: '#BB2525',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity style={{marginHorizontal: 10}}>
            <Feather name="bell" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="gift" size={30} color="white" />
          </TouchableOpacity>
        </View>
        <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
          JAZZ WOLRD
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity style={{marginHorizontal: 10}}>
            <Feather name="search" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginHorizontal: 10}}
            onPress={() => {
              navigation.openDrawer();
            }}>
            <FontAwesome name="bars" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <Animated.View
        style={{
          height: headerheight,
          backgroundColor: 'black',
          margin: headermargin,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <Animated.View
          style={{
            right: profileleft,
          }}>
          <Text style={{color: 'white', fontSize: 15}}> Your Balance is:</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold',
                marginRight: 5,
              }}>
              RS
            </Text>
            <Text style={{color: 'white', fontSize: 30}}>{recharge.new}</Text>
          </View>
        </Animated.View>
        <Animated.View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            right: profileleft,
          }}>
          <View>
            <Image
              source={{
                uri: 'https://www.pngitem.com/pimgs/m/106-1068071_black-person-png-black-man-business-png-transparent.png',
              }}
              style={{height: 50, width: 50, borderRadius: 50, marginRight: 5}}
            />
          </View>
          <View>
            <Text style={{color: 'white', fontSize: 15}}>Muhammad Talha</Text>
            <Text style={{color: 'white', fontSize: 15}}>0323-2704802</Text>
          </View>
        </Animated.View>
      </Animated.View>
      <Animated.View
        style={{
          bottom: rechargebutton,
          width: rechargebuttonwidth,
          left: rechargebuttonright,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Packages');
          }}
          style={{
            backgroundColor: '#BB2525',
            alignSelf: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 25,
              fontWeight: 'bold',
              padding: 10,
              textAlign: 'center',
            }}>
            Tap To Recharge
          </Text>
        </TouchableOpacity>
      </Animated.View>
      <ScrollView
        scrollEventThrottle={16}
        onScroll={e => {
          const offsetvalue = e.nativeEvent.contentOffset.y;
          animatedvalueka.setValue(offsetvalue);
        }}>
        <View
          style={{borderBlockColor: 'gray', borderBottomWidth: 1, padding: 5}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              margin: 10,
            }}>
            <Text style={{color: 'black'}}>Usage Rates</Text>
            <Text style={{color: 'red'}}>Usage Details</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginHorizontal: 10,
            }}>
            <View>
              <Text style={{textAlign: 'center', color: 'black'}}>DATA</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Price plan');
                }}>
                <CircularProgress
                  value={selectedPKG.Internet ? selectedPKG.Internet : 0}
                  radius={60}
                  duration={2000}
                  progressValueColor={'black'}
                  maxValue={
                    selectedPKG.Internet + 100 ? selectedPKG.Internet + 100 : 0
                  }
                  title={'GB/S'}
                  titleColor={'black'}
                  titleStyle={{fontWeight: 'bold'}}
                  activeStrokeColor={'#BB2525'}
                  inActiveStrokeColor={'gray'}
                  inActiveStrokeOpacity={0.5}
                  inActiveStrokeWidth={3}
                  activeStrokeWidth={10}
                />
              </TouchableOpacity>
              <Text style={{textAlign: 'center', color: 'black'}}>
                out of{' '}
                {selectedPKG.Internet + 100 ? selectedPKG.Internet + 100 : 0}
              </Text>
            </View>
            <View>
              <Text style={{textAlign: 'center', color: 'black'}}>CALLS</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Price plan');
                }}>
                <CircularProgress
                  title={'MIN'}
                  value={selectedPKG.onnet ? selectedPKG.onnet : 0}
                  radius={60}
                  duration={2000}
                  progressValueColor={'black'}
                  maxValue={selectedPKG.onnet ? selectedPKG.onnet + 100 : 0}
                  titleColor={'black'}
                  titleStyle={{fontWeight: 'bold'}}
                  activeStrokeColor={'#BB2525'}
                  inActiveStrokeColor={'gray'}
                  inActiveStrokeOpacity={0.5}
                  inActiveStrokeWidth={3}
                  activeStrokeWidth={10}
                />
              </TouchableOpacity>
              <Text style={{textAlign: 'center', color: 'black'}}>
                Out of {selectedPKG.onnet + 109 ? selectedPKG.onnet + 109 : 0}
              </Text>
            </View>
            <View>
              <Text style={{textAlign: 'center', color: 'black'}}>SMS</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Price plan');
                }}>
                <CircularProgress
                  value={selectedPKG.SMS ? selectedPKG.SMS : 0}
                  radius={60}
                  duration={2000}
                  progressValueColor={'black'}
                  maxValue={selectedPKG.SMS ? selectedPKG.SMS + 90 : 0}
                  title={'SMS'}
                  titleColor={'black'}
                  titleStyle={{fontWeight: 'bold'}}
                  activeStrokeColor={'#BB2525'}
                  inActiveStrokeColor={'gray'}
                  inActiveStrokeOpacity={0.5}
                  inActiveStrokeWidth={3}
                  activeStrokeWidth={10}
                />
              </TouchableOpacity>
              <Text style={{textAlign: 'center', color: 'black'}}>
                Out of {selectedPKG.SMS + 99 ? selectedPKG.SMS + 99 : 0}
              </Text>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'column', margin: 15}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#F0F0F0',
                padding: 15,
                borderRadius: 10,
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <Feather name="package" size={30} color="black" />
              <Text>Packages</Text>
            </TouchableOpacity>
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('OwnBundle');
                }}
                style={{
                  backgroundColor: '#F0F0F0',
                  padding: 15,
                  paddingHorizontal: 20,
                  borderRadius: 10,
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <Feather name="bar-chart-2" size={30} color="black" />
                <Text>Bundle</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: '#F0F0F0',
                padding: 15,
                paddingHorizontal: 20,
                borderRadius: 10,
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <Feather name="gift" size={30} color="black" />
              <Text>Reward</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#F0F0F0',
                padding: 15,
                borderRadius: 10,
                paddingHorizontal: 20,
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <Feather name="clock" size={30} color="black" />
              <Text>History</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: 'column', margin: 15}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#F0F0F0',
                padding: 15,
                paddingHorizontal: 27,
                borderRadius: 10,
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <Ionicons name="document-text" size={30} color="black" />
              <Text>Tax</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#F0F0F0',
                padding: 15,
                paddingHorizontal: 24,
                borderRadius: 10,
                flexDirection: 'column',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}>
              <Feather name="dollar-sign" size={30} color="black" />
              <Text>Share</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#F0F0F0',
                padding: 15,
                paddingHorizontal: 20,
                borderRadius: 10,
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <AntDesign name="questioncircle" size={30} color="black" />
              <Text>Support</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#F0F0F0',
                padding: 15,
                borderRadius: 10,
                paddingHorizontal: 20,
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <Ionicons name="person" size={30} color="black" />
              <Text>Account</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text>hello world</Text>
        <Text>hello world</Text>
        <Text>hello world</Text>
        <Text>hello world</Text>
        <Text>hello world</Text>
        <Text>hello world</Text>
        <Text>hello world</Text>
        <Text>hello world</Text>
        <Text>hello world</Text>
        <Text>hello world</Text>
        <Text>hello world</Text>
        <Text>hello world</Text>
        <Text>hello world</Text>
        <Text>hello world</Text>
        <Text>hello world</Text>
        <Text>hello world</Text>
        <Text>hello world</Text>
        <Text>hello world</Text>
        <Text>hello world</Text>
        <Text>hello world</Text>
        <Text>hello world</Text>
        <Text>hello world</Text>
        <Text>hello world</Text>
        <Text>hello world</Text>
        <Text>hello world</Text>
        <Text>hello world</Text>
        <Text>hello world</Text>
        <Text>hello world</Text>
        <Text>hello world</Text>
        <Text>hello world</Text>
        <Text>hello world</Text>
        <Text>hello world</Text>
        <Text>hello world</Text>
        <Text>hello world</Text>
        <Text>hello world</Text>
        <Text>hello world</Text>
        <Text>hello world</Text>
        <Text>hello world</Text>
      </ScrollView>
    </View>
  );
};

export default Bottom_Home;
