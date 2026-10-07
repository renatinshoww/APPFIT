import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useApp } from '../context/AppContext';
import { radius, space } from '../theme';

// Card de treino reutilizado na lista e na tela inicial.
export default function WorkoutCard({ workout, onPress }) {
  const { colors } = useApp();
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      accessibilityRole="button"
      accessibilityLabel={`Abrir treino ${workout.name}`}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.card,
        borderRadius: radius.md,
        padding: space.md,
        marginBottom: space.sm,
        borderWidth: 1,
        borderColor: colors.border,
      }}
    >
      <View style={{ flex: 1 }}>
        <Text style={{ color: colors.ink, fontSize: 17, fontWeight: '700' }}>{workout.name}</Text>
        <Text style={{ color: colors.muted, marginTop: 2 }}>
          {workout.day} · {workout.exercises.length} exercícios
        </Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color={colors.muted} />
    </TouchableOpacity>
  );
}
