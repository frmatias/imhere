import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.eventName}>
        Nome do evento
      </Text>
      <Text style={styles.eventDate}>
        Sexta, 00/00/0000
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding:24
  },
  eventName:{
    color:'#fdfcfe',
    fontSize:24,
    fontWeight:'bold',
    marginTop: 48
  },
  eventDate:{
    color:'#6b6b6b',
    fontSize:16,
    marginTop: 8
  },
});
