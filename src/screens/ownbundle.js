import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Slider from '@react-native-community/slider';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {success} from '../store/actions/pushpackagesA';
const Ownbundle = ({navigation}) => {
  const dispatch = useDispatch();
  const [validitysliderValue, setvaliditySliderValue] = useState(0);
  const [dataslidervalue, setdataslidervalue] = useState(0);
  const [SMSslidervalue, setSMSslidervalue] = useState(0);
  const [total, settotal] = useState(0);
  //   ==========================VALIDITY==========================
  const incrementSlider = () => {
    if (validitysliderValue === 0 && validitysliderValue <= 30) {
      setvaliditySliderValue(validitysliderValue + 7);
    } else if (validitysliderValue <= 30) {
      setvaliditySliderValue(validitysliderValue + 7);
    }
  };
  const decrementSlider = () => {
    if (validitysliderValue > 0) {
      setvaliditySliderValue(validitysliderValue - 7);
    }
  };
  const handleSliderChange = value => {
    setvaliditySliderValue(value);
  };
  // ==========================DATA==========================
  const incrementSlider_for_data = () => {
    if (dataslidervalue === 0 && validitysliderValue <= 10000) {
      setdataslidervalue(dataslidervalue + 2000);
    } else if (dataslidervalue < 10000) {
      setdataslidervalue(dataslidervalue + 2000);
    }
  };
  const decrementSlider_for_data = () => {
    if (dataslidervalue > 0) {
      setdataslidervalue(dataslidervalue - 2000);
    }
  };
  const handleSliderChange_for_data = value => {
    setdataslidervalue(value);
  };
  // ==========================SMS==========================
  const incrementSlider_for_SMS = () => {
    if (SMSslidervalue === 0 && SMSslidervalue <= 2500) {
      setSMSslidervalue(SMSslidervalue + 50);
    } else if (SMSslidervalue < 10000) {
      setSMSslidervalue(SMSslidervalue + 50);
    }
  };
  const decrementSlider_for_SMS = () => {
    if (SMSslidervalue > 0) {
      setSMSslidervalue(SMSslidervalue - 50);
    }
  };
  const handleSliderChange_for_SMS = value => {
    setSMSslidervalue(value);
  };
  return (
    <View>
      <View
        style={{
          padding: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            My Custom Bundle
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Validity: {validitysliderValue}
          </Text>
        </View>
        <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
          RS:{total}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#BB2525',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Ionicons
            name="chevron-back"
            size={25}
            color="white"
            style={{marginHorizontal: 10}}
          />
        </TouchableOpacity>
        <Text
          style={{
            margin: 15,
            fontSize: 25,
            color: 'white',
            fontWeight: 'bold',
            marginLeft: 50,
          }}>
          MAKE YOUR OWN BUNDLE
        </Text>
      </View>
      <View style={{backgroundColor: 'white', padding: 10}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 25,
              fontWeight: 'bold',
              padding: 20,
            }}>
            Validity
          </Text>
          <Text style={{color: 'black', fontSize: 25, fontWeight: 'bold'}}>
            {validitysliderValue} days
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableOpacity
            onPressOut={() => {
              settotal(validitysliderValue - 200);
            }}
            onPress={decrementSlider}
            style={{
              height: 40,
              width: 40,
              borderRadius: 40,
              borderColor: 'red',
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'red', fontSize: 20}}>-</Text>
          </TouchableOpacity>
          <Slider
            value={validitysliderValue}
            onValueChange={handleSliderChange}
            style={{width: 300, height: 40}}
            minimumValue={1}
            maximumValue={30}
            minimumTrackTintColor="red"
            maximumTrackTintColor="#000000"
            step={7}
          />

          <TouchableOpacity
            onPressOut={() => {
              settotal(validitysliderValue + 200);
            }}
            onPress={incrementSlider}
            style={{
              height: 40,
              width: 40,
              borderRadius: 40,
              borderColor: 'red',
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'red'}}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* ------------------------------------------------------------ */}
      <View style={{backgroundColor: 'white', padding: 10, marginVertical: 10}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 25,
              fontWeight: 'bold',
              padding: 20,
            }}>
            Data
          </Text>
          <Text style={{color: 'black', fontSize: 25, fontWeight: 'bold'}}>
            {dataslidervalue} MB
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableOpacity
            onPressOut={() => {
              settotal(total - 30);
            }}
            onPress={decrementSlider_for_data}
            style={{
              height: 40,
              width: 40,
              borderRadius: 40,
              borderColor: 'red',
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'red', fontSize: 20}}>-</Text>
          </TouchableOpacity>
          <Slider
            value={dataslidervalue}
            onValueChange={handleSliderChange_for_data}
            style={{width: 300, height: 40}}
            minimumValue={0}
            maximumValue={10000}
            minimumTrackTintColor="red"
            maximumTrackTintColor="#000000"
            step={2000}
          />

          <TouchableOpacity
            onPressOut={() => {
              settotal(total + 30);
            }}
            onPress={incrementSlider_for_data}
            style={{
              height: 40,
              width: 40,
              borderRadius: 40,
              borderColor: 'red',
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'red'}}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* ------------------------------------------------------------ */}
      <View style={{backgroundColor: 'white', padding: 10, marginVertical: 10}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 25,
              fontWeight: 'bold',
              padding: 20,
            }}>
            SMS
          </Text>
          <Text style={{color: 'black', fontSize: 25, fontWeight: 'bold'}}>
            {SMSslidervalue} SMS
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableOpacity
            onPressOut={() => {
              settotal(total - 10);
            }}
            onPress={decrementSlider_for_SMS}
            style={{
              height: 40,
              width: 40,
              borderRadius: 40,
              borderColor: 'red',
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'red', fontSize: 20}}>-</Text>
          </TouchableOpacity>
          <Slider
            value={SMSslidervalue}
            onValueChange={handleSliderChange_for_SMS}
            style={{width: 300, height: 40}}
            minimumValue={0}
            maximumValue={2500}
            minimumTrackTintColor="red"
            maximumTrackTintColor="#000000"
            step={50}
          />

          <TouchableOpacity
            onPressOut={() => {
              settotal(total + 10);
            }}
            onPress={incrementSlider_for_SMS}
            style={{
              height: 40,
              width: 40,
              borderRadius: 40,
              borderColor: 'red',
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'red'}}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          let payload = {
            onnet: validitysliderValue,
            Internet: dataslidervalue,
            SMS: SMSslidervalue,
            bill: total,
          };
          dispatch(success(payload));
        }}
        style={{
          backgroundColor: '#BB2525',
          margin: 20,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 25,
            fontWeight: 'bold',
            padding: 15,
          }}>
          Subscribe
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Ownbundle;
