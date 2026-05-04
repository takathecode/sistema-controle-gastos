const API_URL = 'http://SEU_IP:3000';

export const getGastos = async () => {
  const res = await fetch(`${API_URL}/gastos`);
  return res.json();
};

export const addGasto = async (gasto) => {
  await fetch(`${API_URL}/gastos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(gasto)
  });
};