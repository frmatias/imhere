import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
import {Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, Alert } from 'react-native';

import {styles} from './styles'
import { Participant } from '../../components/Participant';


export function Home() {

  const [participants, setParticipants] = useState<string[]>([]);
  const [name, setName] = useState<string>('');

  function handleParticipantAdd(name: string){
    if(participants.includes(name)){
      return Alert.alert(`Participant  already added`);
    }
    setParticipants(prevState => [...prevState, name]);
    setName('');
  }
  function handlerParticipantRemove(name:string){

    
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress:() => setParticipants(prevState => prevState.filter(participant => participant !== name))
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
          onChangeText={setName}
          value={name}
        />
        <TouchableOpacity 
          style={styles.button}
          onPress={() => handleParticipantAdd(name)}
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