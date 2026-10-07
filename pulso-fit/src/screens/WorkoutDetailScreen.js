import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useApp } from '../context/AppContext';
import { radius, space } from '../theme';

const REST_OPTIONS = [30, 60, 90];

export default function WorkoutDetailScreen({ route, navigation }) {
  const { colors, workouts, completeWorkout } = useApp();
  const workout = workouts.find((w) => w.id === route.params.id);

  // Diferencial: contador de descanso entre séries
  const [rest, setRest] = useState(0);
  useEffect(() => {
    if (rest <= 0) return;
    const t = setTimeout(() => setRest((r) => r - 1), 1000);
    return () => clearTimeout(t);
  }, [rest]);

  if (!workout) return null;

  const finish = () => {
    completeWorkout();
    Alert.alert('Treino concluído!', 'Sua meta semanal foi atualizada.', [
      { text: 'OK', onPress: () => navigation.goBack() },
    ]);
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.bg }} contentContainerStyle={{ padding: space.md }}>
      <Text style={{ color: colors.ink, fontSize: 26, fontWeight: '800' }}>{workout.name}</Text>
      <Text style={{ color: colors.muted, marginBottom: space.md }}>{workout.day}</Text>

      {workout.exercises.map((ex) => (
        <View key={ex.id} style={{ backgroundColor: colors.card, borderRadius: radius.md, padding: space.md, marginBottom: space.sm, borderWidth: 1, borderColor: colors.border }}>
          <Text style={{ color: colors.ink, fontWeight: '700', fontSize: 16 }}>{ex.name}</Text>
          <Text style={{ color: colors.muted, marginTop: 2 }}>{ex.sets} séries × {ex.reps} repetições</Text>
        </View>
      ))}

      <View style={{ backgroundColor: colors.card, borderRadius: radius.lg, padding: space.md, marginTop: space.md, borderWidth: 1, borderColor: colors.border }}>
        <Text style={{ color: colors.ink, fontWeight: '700', marginBottom: space.sm }}>Descanso entre séries</Text>
        <Text style={{ color: colors.accent, fontSize: 44, fontWeight: '800', textAlign: 'center' }}>
          {rest > 0 ? `${rest}s` : '--'}
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: space.sm }}>
          {REST_OPTIONS.map((s) => (
            <TouchableOpacity
              key={s}
              onPress={() => setRest(s)}
              accessibilityRole="button"
              style={{ flex: 1, marginHorizontal: 4, paddingVertical: 10, borderRadius: radius.sm, borderWidth: 1, borderColor: colors.accent, alignItems: 'center' }}
            >
              <Text style={{ color: colors.accent, fontWeight: '700' }}>{s}s</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <TouchableOpacity
        onPress={finish}
        accessibilityRole="button"
        style={{ backgroundColor: colors.accent, borderRadius: radius.md, paddingVertical: 16, alignItems: 'center', marginTop: space.lg }}
      >
        <Text style={{ color: colors.accentInk, fontWeight: '800', fontSize: 16 }}>Concluir treino</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
