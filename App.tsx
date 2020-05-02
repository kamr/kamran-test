import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import VideoCall from './VideoCall';
// import JitsiMeet, { JitsiMeetView } from 'react-native-jitsi-meet';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>❤️</Text>
      <VideoCall />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 150
  },
});
