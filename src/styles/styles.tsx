import { StyleSheet } from 'react-native';

// Estilos usados na tela inicial.
export const homeStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5' },
  content: { padding: 20, paddingBottom: 40 },
  welcome: { fontSize: 24, fontWeight: 'bold', color: '#003D7A', marginTop: 40 },
  subtitle: { fontSize: 15, color: '#555', marginBottom: 24 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#003D7A', marginBottom: 12 },
  card: { backgroundColor: '#FFF', borderRadius: 8, padding: 16, marginBottom: 12, elevation: 2 },
  cardTitle: { fontSize: 15, fontWeight: 'bold', color: '#003D7A', marginBottom: 4 },
  cardSummary: { fontSize: 13, color: '#555', marginBottom: 6 },
  cardLink: { fontSize: 13, color: '#E87722' },
  button: { backgroundColor: '#E87722', borderRadius: 8, padding: 16, alignItems: 'center', marginTop: 20 },
  buttonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
});

// Estilos usados na tela de horarios.
export const scheduleStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5', padding: 20, paddingTop: 50 },
  greeting: { fontSize: 18, fontWeight: 'bold', color: '#003D7A', marginBottom: 24 },
  item: { backgroundColor: '#FFF', borderRadius: 8, padding: 14, marginBottom: 10, elevation: 1 },
  day: { fontSize: 14, fontWeight: 'bold', color: '#E87722' },
  detail: { fontSize: 14, color: '#333', marginTop: 2 },
});

// Estilos usados na tela de ajuda.
export const helpStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5', padding: 20, paddingTop: 50 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#003D7A', marginBottom: 20 },
  faqItem: { backgroundColor: '#FFF', borderRadius: 8, padding: 14, marginBottom: 10, elevation: 1 },
  faqQuestion: { fontSize: 15, color: '#333' },
  button: { backgroundColor: '#003D7A', borderRadius: 8, padding: 16, alignItems: 'center', marginTop: 24 },
  buttonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
});
