
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

export function formatDateString(inputDate: string): string {
  const dateObject = new Date(inputDate);
  const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
  };

  return dateObject.toLocaleString('es-ES', options);
}
