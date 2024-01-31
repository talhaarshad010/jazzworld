// import React from 'react';
// import AppNavigator from './src/AppNavigator';

// const App = () => {
//   return <AppNavigator />;
// };

// export default App;
import {View, Text, Button} from 'react-native';
import React from 'react';
import notifee from '@notifee/react-native';
const App = () => {
  async function onDisplayNotification() {
    // Request permissions (required for iOS)
    if (Platform.OS == 'ios') {
      await notifee.requestPermission();
    }

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'defaultc',
      name: 'Default Channelc',
      sound: 'siren',
      // importance: AndroidImportance.HIGH,
    });

    // Display a notification
    await notifee.displayNotification({
      title: '08:00am Alarm',
      body: 'The alarm you set for 08:00am requires attention!',
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
  }

  return (
    <View>
      <Text>App</Text>
      <Button
        title="dkshk"
        onPress={() => {
          onDisplayNotification();
        }}
      />
    </View>
  );
};

export default App;
