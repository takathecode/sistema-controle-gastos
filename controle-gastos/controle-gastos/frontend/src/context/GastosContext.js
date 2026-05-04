import { createContext, useState } from 'react';
import { supabase } from '../services/supabase';

export const GastosContext = createContext();

export const GastosProvider = ({ children }) => {
  const [gastos, setGastos] = useState([]);

  const fetchGastos = async () => {
    const { data } = await supabase.from('gastos').select('*');
    setGastos(data);
  };

  const addGasto = async (gasto) => {
    await supabase.from('gastos').insert([gasto]);
    fetchGastos();
  };

  const deleteGasto = async (id) => {
    await supabase.from('gastos').delete().eq('id', id);
    fetchGastos();
  };

  return (
    <GastosContext.Provider value={{ gastos, fetchGastos, addGasto, deleteGasto }}>
      {children}
    </GastosContext.Provider>
  );
};