import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';

// Perguntas mostradas na tela de ajuda.
const FAQ = [
  { id: '1', question: 'Como acessar o SIGAA?' },
  { id: '2', question: 'Como solicitar declaração de matrícula?' },
  { id: '3', question: 'Onde consultar minhas notas?' },
];

export default function HelpScreen() {
  // Exibe uma mensagem simples com o contato de suporte.
  function handleContact() {
    Alert.alert('Fale conosco', 'Entre em contato pelo e-mail suporte@cefetmg.br');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perguntas Frequentes</Text>

      {FAQ.map((item) => (
        <View key={item.id} style={styles.faqItem}>
          <Text style={styles.faqQuestion}>• {item.question}</Text>
        </View>
      ))}

      <TouchableOpacity style={styles.button} onPress={handleContact}>
        <Text style={styles.buttonText}>Fale conosco</Text>
      </TouchableOpacity>
    </View>
  );
}

// Estilos locais desta tela.
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5', padding: 20, paddingTop: 50 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#003D7A', marginBottom: 20 },
  faqItem: { backgroundColor: '#FFF', borderRadius: 8, padding: 14, marginBottom: 10, elevation: 1 },
  faqQuestion: { fontSize: 15, color: '#333' },
  button: { backgroundColor: '#003D7A', borderRadius: 8, padding: 16, alignItems: 'center', marginTop: 24 },
  buttonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
});
