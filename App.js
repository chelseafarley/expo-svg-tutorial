import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Chilli from './assets/chilli.svg';
import Cookie from './Cookie';
import Scorpio from './assets/scorpio.svg';

export default function App() {
  return (
    <View style={styles.container}>
      <Cookie width={200} height={200} fill="black" />
      <Chilli width={200} height={200} fill="black" />
      <Scorpio width={200} height={200} />
      <StatusBar style="auto" />
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
});
