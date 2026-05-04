import express from 'express';
import {
  getGastos,
  createGasto,
  deleteGasto
} from '../controllers/gastosController.js';

const router = express.Router();

router.get('/', getGastos);
router.post('/', createGasto);
router.delete('/:id', deleteGasto);

export default router;