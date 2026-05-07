import express from 'express';
import { supabase } from './config/supabaseClient.js';

const app = express();

app.get('/', async (req, res) => {

  const { data, error } = await supabase
    .from('gastos')
    .select('*');

  if (error) {
    return res.status(500).json(error);
  }

  res.json(data);
});

app.listen(3000, () => {
  console.log('Servidor rodando');
});

app.get('/test', (req, res) => {
  res.json({
    mensagem: 'API funcionando'
  });
});