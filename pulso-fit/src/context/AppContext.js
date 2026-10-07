// Estado global: treinos, meta semanal, perfil e tema.
import React, { createContext, useContext, useMemo, useState } from 'react';
import { initialWorkouts } from '../data/mock';
import { palettes } from '../theme';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [workouts, setWorkouts] = useState(initialWorkouts);
  const [completed, setCompleted] = useState(2); // treinos feitos na semana
  const [weeklyGoal] = useState(5);
  const [dark, setDark] = useState(false);
  const [name, setName] = useState('Atleta');
  const [weight, setWeight] = useState('70');

  const addWorkout = (workout) =>
    setWorkouts((prev) => [...prev, { ...workout, id: String(Date.now()) }]);

  const completeWorkout = () => setCompleted((c) => Math.min(c + 1, weeklyGoal));

  const value = useMemo(
    () => ({
      workouts,
      completed,
      weeklyGoal,
      dark,
      name,
      weight,
      colors: dark ? palettes.dark : palettes.light,
      addWorkout,
      completeWorkout,
      setName,
      setWeight,
      toggleDark: () => setDark((d) => !d),
    }),
    [workouts, completed, weeklyGoal, dark, name, weight]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const useApp = () => useContext(AppContext);
