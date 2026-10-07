import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useApp } from '../context/AppContext';
import WorkoutCard from '../components/WorkoutCard';
import { radius, space } from '../theme';

export default function WorkoutsScreen({ navigation }) {
  const { colors, workouts } = useApp();
  return (
    <View style={{ flex: 1, backgroundColor: colors.bg }}>
      <FlatList
        data={workouts}
        keyExtractor={(w) => w.id}
        contentContainerStyle={{ padding: space.md, paddingBottom: 96 }}
        ListEmptyComponent={
          <Text style={{ color: colors.muted, textAlign: 'center', marginTop: 48 }}>
            Nenhum treino ainda. Toque em + para criar o primeiro.
          </Text>
        }
        renderItem={({ item }) => (
          <WorkoutCard workout={item} onPress={() => navigation.navigate('Detalhe', { id: item.id })} />
        )}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Novo')}
        accessibilityRole="button"
        accessibilityLabel="Criar novo treino"
        style={{
          position: 'absolute', right: space.md, bottom: space.md,
          backgroundColor: colors.accent, width: 58, height: 58, borderRadius: radius.lg,
          alignItems: 'center', justifyContent: 'center', elevation: 4,
        }}
      >
        <Ionicons name="add" size={30} color={colors.accentInk} />
      </TouchableOpacity>
    </View>
  );
}
