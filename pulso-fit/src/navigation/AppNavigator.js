// Navegação: abas inferiores (Início, Treinos, Progresso).
// A aba Treinos contém uma pilha: Lista -> Detalhe -> Novo treino.
import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { useApp } from '../context/AppContext';
import HomeScreen from '../screens/HomeScreen';
import WorkoutsScreen from '../screens/WorkoutsScreen';
import WorkoutDetailScreen from '../screens/WorkoutDetailScreen';
import NewWorkoutScreen from '../screens/NewWorkoutScreen';
import ProgressScreen from '../screens/ProgressScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function WorkoutsStack() {
  const { colors } = useApp();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.bg },
        headerTintColor: colors.ink,
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="Lista" component={WorkoutsScreen} options={{ title: 'Treinos' }} />
      <Stack.Screen name="Detalhe" component={WorkoutDetailScreen} options={{ title: 'Treino' }} />
      <Stack.Screen name="Novo" component={NewWorkoutScreen} options={{ title: 'Novo treino' }} />
    </Stack.Navigator>
  );
}

const icons = { Inicio: 'home', TreinosTab: 'barbell', Progresso: 'stats-chart' };

export default function AppNavigator() {
  const { dark, colors } = useApp();
  const base = dark ? DarkTheme : DefaultTheme;
  const theme = { ...base, colors: { ...base.colors, background: colors.bg, card: colors.card, text: colors.ink, border: colors.border, primary: colors.accent } };

  return (
    <NavigationContainer theme={theme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: colors.accent,
          tabBarInactiveTintColor: colors.muted,
          headerStyle: { backgroundColor: colors.bg },
          headerTintColor: colors.ink,
          headerShadowVisible: false,
          tabBarIcon: ({ color, size }) => <Ionicons name={icons[route.name]} size={size} color={color} />,
        })}
      >
        <Tab.Screen name="Inicio" component={HomeScreen} options={{ title: 'Início', tabBarLabel: 'Início' }} />
        <Tab.Screen name="TreinosTab" component={WorkoutsStack} options={{ headerShown: false, tabBarLabel: 'Treinos' }} />
        <Tab.Screen name="Progresso" component={ProgressScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
