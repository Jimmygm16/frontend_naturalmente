
/**
 * Used to set COP currency to a number
 * @param amount
 * @returns The amount formated as COP currency
 */
export const showCurrency = (amount: number) => {
  const formattedAmount = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  }).format(amount);

  return formattedAmount;
}
