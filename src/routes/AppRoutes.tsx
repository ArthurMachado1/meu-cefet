import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import type { ComponentProps } from 'react';
import HomeScreen from '../screens/HomeScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import HelpScreen from '../screens/HelpScreen';
import { RootTabParamList } from '../types/navigation';

// Cria o navegador de abas usando os tipos definidos para as rotas.
const Tab = createBottomTabNavigator<RootTabParamList>();

type IoniconsName = ComponentProps<typeof Ionicons>['name'];

// Cores reutilizadas na barra inferior.
const COLORS = {
  blue: '#003D7A',
  gray: '#B0B0B0',
  white: '#FFFFFF',
};

export default function AppRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: COLORS.blue },
        tabBarIcon: ({ focused }) => {
          // Escolhe o icone de acordo com a aba atual.
          let iconName: IoniconsName = 'home';

          if (route.name === 'Início') {
            iconName = 'home';
          } else if (route.name === 'Horários') {
            iconName = 'calendar';
          } else if (route.name === 'Ajuda') {
            iconName = 'help-circle';
          }

          return (
            <Ionicons
              name={iconName}
              size={28}
              color={focused ? COLORS.white : COLORS.gray}
            />
          );
        },
      })}
    >
      {/* Telas exibidas na barra inferior do aplicativo. */}
      <Tab.Screen name="Início" component={HomeScreen} />
      <Tab.Screen name="Horários" component={ScheduleScreen} />
      <Tab.Screen name="Ajuda" component={HelpScreen} />
    </Tab.Navigator>
  );
}
