import { StatusBar } from 'expo-status-bar';
import {Text, View, TextInput, TouchableOpacity } from 'react-native';

import {styles} from './styles'

export function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.eventName}>
        Nome do evento
      </Text>
      <Text style={styles.eventDate}>
        Sexta, 04 de dezembro de 2022
      </Text>
      <TextInput 
        style={styles.input} 
        placeholder="Nome do participante"
        placeholderTextColor="#6b6b6b"
      />

    </View>
  );
}