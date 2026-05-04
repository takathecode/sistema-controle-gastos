import React from 'react';
import { AuthProvider } from '../src/context/AuthContext';
import { GastosProvider } from '../src/context/GastosContext';
import AppNavigator from '../src/navigation/AppNavigator';

export default function App() {
  return (
    <AuthProvider>
      <GastosProvider>
        <AppNavigator />
      </GastosProvider>
    </AuthProvider>
  );
}