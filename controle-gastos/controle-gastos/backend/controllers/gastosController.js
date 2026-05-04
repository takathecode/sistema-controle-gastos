import { supabase } from '../config/supabaseClient.js';

export const getGastos = async (req, res) => {
  const { data, error } = await supabase.from('gastos').select('*');

  if (error) return res.status(400).json(error);

  res.json(data);
};

export const createGasto = async (req, res) => {
  const { descricao, valor, data } = req.body;

  const { data: result, error } = await supabase
    .from('gastos')
    .insert([{ descricao, valor, data }]);

  if (error) return res.status(400).json(error);

  res.json(result);
};

export const deleteGasto = async (req, res) => {
  const { id } = req.params;

  const { error } = await supabase
    .from('gastos')
    .delete()
    .eq('id', id);

  if (error) return res.status(400).json(error);

  res.json({ message: 'Deletado' });
};