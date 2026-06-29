import { View, Text, FlatList } from 'react-native';
import { scheduleStyles as styles } from '../styles/styles';
import { RouteProp } from '@react-navigation/native';
import { RootTabParamList } from '../types/navigation';

type ScheduleScreenProps = {
  route: RouteProp<RootTabParamList, 'Horários'>;
};

// Lista fixa de aulas exibida na tela de horarios.
const SCHEDULE = [
  { id: '1', day: 'Segunda', subject: 'Matemática', time: '08h às 09h40' },
  { id: '2', day: 'Terça', subject: 'Física', time: '10h às 11h40' },
  { id: '3', day: 'Quarta', subject: 'Programação', time: '13h às 14h40' },
  { id: '4', day: 'Quinta', subject: 'Inglês', time: '08h às 09h40' },
  { id: '5', day: 'Sexta', subject: 'Química', time: '10h às 11h40' },
];

export default function ScheduleScreen({ route }: ScheduleScreenProps) {
  // Nome recebido da tela inicial para personalizar a mensagem.
  const studentName = route?.params?.studentName;

  return (
    <View style={styles.container}>
      {studentName ? (
        <Text style={styles.greeting}>Olá, {studentName}! Aqui estão seus horários:</Text>
      ) : (
        <Text style={styles.greeting}>Horários de aula não personalizados.</Text>
      )}

      {/* Renderiza cada aula como um item da lista. */}
      <FlatList
        data={SCHEDULE}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.day}>{item.day}</Text>
            <Text style={styles.detail}>{item.subject} — {item.time}</Text>
          </View>
        )}
      />
    </View>
  );
}
