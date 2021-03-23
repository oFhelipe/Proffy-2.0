import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage'

import PageHeader from '../../components/PageHeader';

import styles from './styles';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';

import { Feather } from '@expo/vector-icons'
import api from '../../services/api';
import { useFocusEffect } from '@react-navigation/native';

function TeacherList() {

  const [isFiltersVisible, setIsFiltersVisible ] = useState(false);

  const [subject, setSubject ] = useState("");
  const [week_day, setWeekDay ] = useState("");
  const [time, setTime ] = useState("");

  const [teachers, setTeachers ] = useState([]);
  const [favorites, setFavorites ] = useState<number[]>([]);

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if(response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map((teacher:Teacher) => { return teacher.id });

        setFavorites(favoritedTeachersIds);
      }
    });
  }

  useFocusEffect(
    React.useCallback(() => {
      loadFavorites();
    }, [])
  )

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  async function handleFilterSubmit(){

    loadFavorites();

    const response = await api.get('/classes', {
      params:{
        subject,
        week_day,
        time,
      }
    });

    setIsFiltersVisible(false);
    setTeachers(response.data);

  }

  return (
    <View style={styles.container}>
 
        <PageHeader 
            title="Proffys disponíveis"
            headerRight={(
              <BorderlessButton onPress={()=>{handleToggleFiltersVisible()}}>
                <Feather name="filter" size={20} color="#FFF"/>
              </BorderlessButton>
            )}>
          { isFiltersVisible && (<View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              placeholderTextColor="#C1BCCC" 
              style={styles.input}
              value={subject}
              onChangeText={(text)=>{ setSubject(text) }}
              placeholder="Qual a matéria?"/>
              <View style={styles.inputGroup}>
                
                <View style={styles.inputBlock}>
                  <Text style={styles.label}>Dia da semana</Text>
                  <TextInput
                    placeholderTextColor="#C1BCCC" 
                    style={styles.input}
                    value={week_day}
                    onChangeText={(text)=>{ setWeekDay(text) }}
                    placeholder="Qual o dia?"/>
                </View>
                <View style={styles.inputBlock}>
                  <Text style={styles.label}>Horário</Text>
                  <TextInput
                    value={time}
                    onChangeText={(text)=>{ setTime(text) }}
                    placeholderTextColor="#C1BCCC" 
                    style={styles.input}
                    placeholder="Qual hoário?"/>
                </View>
              </View>
              <RectButton onPress={handleFilterSubmit} style={styles.submitButton}>
                <Text style={styles.submitButtonText}>Filtrar</Text>
              </RectButton>
          </View>)}
        </PageHeader>
        <ScrollView 
            contentContainerStyle={{
              paddingHorizontal: 16,
              paddingBottom:16,
            }}
            style={styles.teacherlist}>
          
          {teachers.map((teacher:Teacher)=>{
            return (
              <TeacherItem 
                  key={teacher.id} 
                  teacher={teacher}
                  favorited={favorites.includes(teacher.id)}/>
            );
          })}
          
      </ScrollView>
      
    </View>
  );
}

export default TeacherList;