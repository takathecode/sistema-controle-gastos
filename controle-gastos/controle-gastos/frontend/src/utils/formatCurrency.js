export const formatCurrency = (value) => {
  return `R$ ${parseFloat(value).toFixed(2)}`;
};