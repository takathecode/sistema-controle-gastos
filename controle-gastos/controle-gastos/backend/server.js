import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import gastosRoutes from './routes/gastosRoutes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/gastos', gastosRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});