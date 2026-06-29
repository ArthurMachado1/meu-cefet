import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './src/routes/AppRoutes';

export default function App() {
  // Envolve todas as telas para habilitar a navegacao do app.
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}
