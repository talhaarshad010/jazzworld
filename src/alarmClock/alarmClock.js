import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {success} from '../store/actions/setAlarmA';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import notifee from '@notifee/react-native';
import moment from 'moment';
const AlarmClock = () => {
  const dispatch = useDispatch();
  const alarmTime = useSelector(state => state.setAlarmR.data);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  const [isDatePickerVisible, setDatePickerVisible] = useState(false);

  const handleDateConfirm = date => {
    setDatePickerVisible(false);
    const selectedDateTime = moment(date).format('hh:mm:ss:A');
    dispatch(success(selectedDateTime));
  };

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const scheduleNotification = async (title, body) => {
    if (Platform.OS == 'ios') {
      await notifee.requestPermission();
    }

    const channelId = await notifee.createChannel({
      id: 'defaultc',
      name: 'Default Channelc',
      sound: 'Huawei Tune Living',
    });

    await notifee.displayNotification({
      title,
      body,
      android: {
        channelId,
        actions: [
          {
            title: 'Snooze',
            icon: 'https://my-cdn.com/icons/snooze.png',
            pressAction: {
              id: 'snooze',
            },
          },
          {
            title: 'Stop',
            icon: 'https://my-cdn.com/icons/snooze.png',
            pressAction: {
              id: 'Stop',
            },
          },
        ],
      },
    });
  };

  useEffect(() => {
    // Update current time every second
    const updateTimeInterval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(updateTimeInterval);
  }, []); // Run this effect only once on component mount
  const Datetee = moment(currentDateTime).format('hh:mm:ss:A');
  console.log('dasdasdad', Datetee);
  // Automatically refresh time and check for notifications
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     checkAndTriggerNotifications();
  //   }, 1000 * 60); // Check every minute, adjust as needed

  //   return () => clearInterval(intervalId);
  // }, []);

  // const checkAndTriggerNotifications = () => {
  //   alarmTime.forEach(alarm => {
  //     // console.log(alarmDateTime);

  //     // console.log('zzzzzzzzzzzzzz' + alarmDateTime.toLocaleString());
  //     if (Datetee == alarm) {
  //       console.log('matched');
  //       scheduleNotification(`Alarm ${alarm}`, "It's time!");
  //     }
  //   });
  // };

  // Rendering Items From Redux
  const renderItem = ({item, index}) => {
    if (Datetee == item) {
      console.log('matched');
      scheduleNotification(`Alarm ${item}`, "It's time!");
    }
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            backgroundColor: 'black',
            borderRadius: 10,
            padding: 10,
            marginHorizontal: 10,
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: 'white', fontSize: 20}}>{index + 1}.</Text>
          <Text style={{color: 'white', fontSize: 20, padding: 10}}>
            {item}
          </Text>
          <Text style={{color: 'white'}}>{Datetee}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 3, paddingBottom: 20}}>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="datetime"
          onConfirm={handleDateConfirm}
          onCancel={hideDatePicker}
        />
        <View>
          {alarmTime ? (
            <View>
              <Text
                style={{
                  color: 'black',
                  fontSize: 25,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginVertical: 10,
                }}>
                ALARMS:
              </Text>
              <Text>Current time: {Datetee}</Text>
            </View>
          ) : null}
        </View>
        <FlatList
          renderItem={renderItem}
          data={alarmTime}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={{flex: 0.5}}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginHorizontal: 10,
          }}
          onPress={showDatePicker}>
          <View
            style={{
              backgroundColor: 'black',
              justifyContent: 'flex-end',
              marginBottom: 20,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
              height: 80,
              width: 80,
            }}>
            <Text style={{fontSize: 70, color: 'white'}}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AlarmClock;
