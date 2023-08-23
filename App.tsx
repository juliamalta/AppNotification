

import { StyleSheet, View } from 'react-native';
import Notification from './src/Components/Token';

export default function App() {
  return (
    <View style={styles.container}>
     <Notification/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop:80,
  },
});
