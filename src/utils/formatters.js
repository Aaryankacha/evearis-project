export const formatCurrency = (amount) => {
  if (typeof amount !== 'number') return '$0';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);
};

export const formatNumber = (num) => {
  if (typeof num !== 'number') return '0';
  return new Intl.NumberFormat('en-US').format(num);
};

export const formatPower = (wattage) => {
  return `${wattage}W`;
};
