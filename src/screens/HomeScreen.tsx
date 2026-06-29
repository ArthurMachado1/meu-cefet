import { Text, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { homeStyles as styles } from '../styles/styles';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../types/navigation';

type HomeScreenProps = {
  navigation: BottomTabNavigationProp<RootTabParamList, 'Início'>;
};

// Noticias exibidas na tela inicial.
const NEWS = [
  { id: '1', title: 'Matrícula 2025/2 aberta', summary: 'O período de rematrículas para o 2º semestre está aberto no SIGAA.', url: 'https://www.cefetmg.br' },
  { id: '2', title: 'Semana de Ciência e Tecnologia', summary: 'Evento ocorre nos dias 20 a 24 de outubro com palestras e oficinas.', url: 'https://www.cefetmg.br' },
  { id: '3', title: 'Calendário Acadêmico atualizado', summary: 'Confira as datas de provas e feriados no portal institucional.', url: 'https://www.cefetmg.br' },
];

const STUDENT_NAME = 'Bruno Couto';

export default function HomeScreen({ navigation }: HomeScreenProps) {
  // Abre a aba de horarios enviando o nome do aluno.
  function goToSchedule() {
    navigation.navigate('Horários', { studentName: STUDENT_NAME });
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.welcome}>Olá, {STUDENT_NAME}! 👋</Text>
      <Text style={styles.subtitle}>Bem-vindo(a) ao Meu CEFET-MG</Text>

      <Text style={styles.sectionTitle}>Notícias</Text>
      {NEWS.map((item) => (
        // Cada card abre a noticia no navegador.
        <TouchableOpacity key={item.id} style={styles.card} onPress={() => Linking.openURL(item.url)}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardSummary}>{item.summary}</Text>
          <Text style={styles.cardLink}>Ler mais →</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.button} onPress={goToSchedule}>
        <Text style={styles.buttonText}>Ver meus horários</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
