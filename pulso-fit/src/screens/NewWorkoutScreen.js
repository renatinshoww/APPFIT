import React, { useState } from 'react';
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useApp } from '../context/AppContext';
import { DAYS } from '../data/mock';
import { radius, space } from '../theme';

export default function NewWorkoutScreen({ navigation }) {
  const { colors, addWorkout } = useApp();
  const [name, setName] = useState('');
  const [day, setDay] = useState('Seg');
  const [exName, setExName] = useState('');
  const [sets, setSets] = useState('3');
  const [reps, setReps] = useState('10');
  const [exercises, setExercises] = useState([]);

  const input = {
    backgroundColor: colors.card, color: colors.ink, borderRadius: radius.sm,
    borderWidth: 1, borderColor: colors.border, padding: 12, marginBottom: space.sm,
  };
  const label = { color: colors.muted, marginBottom: 4, marginTop: space.sm };

  const addExercise = () => {
    if (!exName.trim()) return Alert.alert('Nome do exercício', 'Informe o nome do exercício.');
    setExercises((prev) => [
      ...prev,
      { id: String(Date.now()), name: exName.trim(), sets: Number(sets) || 1, reps: Number(reps) || 1 },
    ]);
    setExName('');
  };

  const save = () => {
    if (!name.trim()) return Alert.alert('Nome do treino', 'Informe o nome do treino.');
    if (exercises.length === 0) return Alert.alert('Exercícios', 'Adicione pelo menos um exercício.');
    addWorkout({ name: name.trim(), day, exercises });
    navigation.goBack();
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.bg }} contentContainerStyle={{ padding: space.md }} keyboardShouldPersistTaps="handled">
      <Text style={label}>Nome do treino</Text>
      <TextInput style={input} value={name} onChangeText={setName} placeholder="Ex.: Ombros e abdômen" placeholderTextColor={colors.muted} />

      <Text style={label}>Dia da semana</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {DAYS.map((d) => (
          <TouchableOpacity
            key={d}
            onPress={() => setDay(d)}
            style={{
              paddingVertical: 8, paddingHorizontal: 14, borderRadius: 20, marginRight: 6, marginBottom: 6,
              backgroundColor: day === d ? colors.accent : colors.card,
              borderWidth: 1, borderColor: day === d ? colors.accent : colors.border,
            }}
          >
            <Text style={{ color: day === d ? colors.accentInk : colors.ink, fontWeight: '600' }}>{d}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={[label, { marginTop: space.md }]}>Adicionar exercício</Text>
      <TextInput style={input} value={exName} onChangeText={setExName} placeholder="Nome do exercício" placeholderTextColor={colors.muted} />
      <View style={{ flexDirection: 'row' }}>
        <TextInput style={[input, { flex: 1, marginRight: 8 }]} value={sets} onChangeText={setSets} keyboardType="numeric" placeholder="Séries" placeholderTextColor={colors.muted} />
        <TextInput style={[input, { flex: 1 }]} value={reps} onChangeText={setReps} keyboardType="numeric" placeholder="Reps" placeholderTextColor={colors.muted} />
      </View>
      <TouchableOpacity onPress={addExercise} style={{ borderWidth: 1, borderColor: colors.accent, borderRadius: radius.sm, paddingVertical: 12, alignItems: 'center' }}>
        <Text style={{ color: colors.accent, fontWeight: '700' }}>Adicionar à lista</Text>
      </TouchableOpacity>

      {exercises.map((ex) => (
        <Text key={ex.id} style={{ color: colors.ink, marginTop: space.sm }}>
          • {ex.name} — {ex.sets}×{ex.reps}
        </Text>
      ))}

      <TouchableOpacity onPress={save} style={{ backgroundColor: colors.accent, borderRadius: radius.md, paddingVertical: 16, alignItems: 'center', marginTop: space.lg }}>
        <Text style={{ color: colors.accentInk, fontWeight: '800', fontSize: 16 }}>Salvar treino</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
