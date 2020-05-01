const idioma = navigator.language;

const formatValue = (value: number): string => {
  if (idioma === 'pt-BR') {
    return Intl.NumberFormat(idioma, {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  }
  return Intl.NumberFormat(idioma, {
    style: 'currency',
    currency: 'USD',
  }).format(value);
};

export default formatValue;
