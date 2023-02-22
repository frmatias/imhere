import { StatusBar } from 'expo-status-bar';
import {Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native';

import {styles} from './styles'
import { Participant } from '../../components/Participant';


export function Home() {

  const participants = ['1', '2', '3', '4', '5', '6', '7', '8'];

  function handleParticipantAdd(){
    console.log('opaaa');
    if(participants.includes("1")){
      return Alert.alert(`Participant  already added`);
    }
  }
  function handlerParticipantRemove(name:string){
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress:()=>Alert.alert("Deletado")
      },
      {
        text: "Não",
        style:'cancel'
      }
    ])
  }
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.eventName}>
        Nome do evento
      </Text>
      <Text style={styles.eventDate}>
        Sexta, 04 de dezembro de 2022
      </Text>
      <View style={styles.form}>
        <TextInput 
          style={styles.input} 
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />
        <TouchableOpacity 
          style={styles.button}
          onPress={handleParticipantAdd}
        >
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={participants}
        keyExtractor={item=>item}
        renderItem={({item})=>(
          <Participant 
              key={item}
              name={item} 
              onRemove={()=>handlerParticipantRemove(item)}
            />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={()=>(
          <Text>Ninguém chegou no evento ainda</Text>
        )}
      />
     
    </View>
  );
}