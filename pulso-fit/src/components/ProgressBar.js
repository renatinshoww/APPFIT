import React from 'react';
import { View } from 'react-native';
import { useApp } from '../context/AppContext';

// Barra de progresso simples (value de 0 a 1).
export default function ProgressBar({ value }) {
  const { colors } = useApp();
  const pct = Math.round(Math.min(Math.max(value, 0), 1) * 100);
  return (
    <View style={{ height: 12, borderRadius: 6, backgroundColor: colors.border, overflow: 'hidden' }}>
      <View style={{ height: '100%', width: `${pct}%`, backgroundColor: colors.lime, borderRadius: 6 }} />
    </View>
  );
}
