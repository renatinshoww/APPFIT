import React from 'react';
import { ScrollView, Switch, Text, TextInput, View } from 'react-native';
import { useApp } from '../context/AppContext';
import ProgressBar from '../components/ProgressBar';
import { radius, space } from '../theme';

export default function ProgressScreen() {
  const { colors, name, setName, weight, setWeight, dark, toggleDark, completed, weeklyGoal, workouts } = useApp();

  const card = { backgroundColor: colors.card, borderRadius: radius.lg, padding: space.md, marginBottom: space.md, borderWidth: 1, borderColor: colors.border };
  const input = { color: colors.ink, borderBottomWidth: 1, borderColor: colors.border, paddingVertical: 8, fontSize: 16 };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.bg }} contentContainerStyle={{ padding: space.md }}>
      <View style={card}>
        <Text style={{ color: colors.ink, fontWeight: '700', fontSize: 16 }}>Esta semana</Text>
        <Text style={{ color: colors.accent, fontSize: 40, fontWeight: '800', marginVertical: 4 }}>
          {completed}/{weeklyGoal}
        </Text>
        <ProgressBar value={completed / weeklyGoal} />
        <Text style={{ color: colors.muted, marginTop: space.sm }}>{workouts.length} treinos cadastrados</Text>
      </View>

      <View style={card}>
        <Text style={{ color: colors.muted }}>Nome</Text>
        <TextInput style={input} value={name} onChangeText={setName} placeholderTextColor={colors.muted} />
        <Text style={{ color: colors.muted, marginTop: space.md }}>Peso (kg)</Text>
        <TextInput style={input} value={weight} onChangeText={setWeight} keyboardType="numeric" placeholderTextColor={colors.muted} />
      </View>

      <View style={[card, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }]}>
        <Text style={{ color: colors.ink, fontWeight: '700', fontSize: 16 }}>Tema escuro</Text>
        <Switch value={dark} onValueChange={toggleDark} trackColor={{ true: colors.accent }} />
      </View>
    </ScrollView>
  );
}
