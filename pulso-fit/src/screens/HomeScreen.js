import React, { useMemo } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useApp } from '../context/AppContext';
import { quotes } from '../data/mock';
import ProgressBar from '../components/ProgressBar';
import { radius, space } from '../theme';

export default function HomeScreen({ navigation }) {
  const { colors, name, workouts, completed, weeklyGoal } = useApp();
  // Diferencial: frase motivacional aleatória a cada abertura do app
  const quote = useMemo(() => quotes[Math.floor(Math.random() * quotes.length)], []);
  const next = workouts[0];

  const openWorkout = () =>
    navigation.navigate('TreinosTab', { screen: 'Detalhe', params: { id: next.id } });

  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.bg }} contentContainerStyle={{ padding: space.md }}>
      <Text style={{ color: colors.ink, fontSize: 28, fontWeight: '800' }}>Olá, {name}</Text>
      <Text style={{ color: colors.muted, marginTop: 4, marginBottom: space.lg }}>{quote}</Text>

      <View style={{ backgroundColor: colors.card, borderRadius: radius.lg, padding: space.md, borderWidth: 1, borderColor: colors.border }}>
        <Text style={{ color: colors.ink, fontSize: 16, fontWeight: '700', marginBottom: space.sm }}>Meta da semana</Text>
        <ProgressBar value={completed / weeklyGoal} />
        <Text style={{ color: colors.muted, marginTop: space.sm }}>
          {completed} de {weeklyGoal} treinos concluídos
        </Text>
      </View>

      {next && (
        <View style={{ backgroundColor: colors.accent, borderRadius: radius.lg, padding: space.md, marginTop: space.md }}>
          <Text style={{ color: colors.accentInk, opacity: 0.8 }}>Próximo treino</Text>
          <Text style={{ color: colors.accentInk, fontSize: 22, fontWeight: '800', marginVertical: 4 }}>{next.name}</Text>
          <Text style={{ color: colors.accentInk, opacity: 0.8 }}>
            {next.day} · {next.exercises.length} exercícios
          </Text>
          <TouchableOpacity
            onPress={openWorkout}
            accessibilityRole="button"
            style={{ backgroundColor: colors.lime, borderRadius: radius.sm, paddingVertical: 12, alignItems: 'center', marginTop: space.md }}
          >
            <Text style={{ color: '#13203B', fontWeight: '800', fontSize: 16 }}>Iniciar treino</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}
