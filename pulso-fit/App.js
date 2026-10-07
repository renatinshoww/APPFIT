// Ponto de entrada: provê o estado global (Context) e a navegação.
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppProvider, useApp } from './src/context/AppContext';
import AppNavigator from './src/navigation/AppNavigator';

function Root() {
  const { dark } = useApp();
  return (
    <>
      <StatusBar style={dark ? 'light' : 'dark'} />
      <AppNavigator />
    </>
  );
}

export default function App() {
  return (
    <AppProvider>
      <Root />
    </AppProvider>
  );
}
