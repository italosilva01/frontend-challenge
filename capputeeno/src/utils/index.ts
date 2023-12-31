export const convertPrice = (value: string) => {
  const parteInteira = String(value).substring(0, 2);
  const parteDecimal = String(value).substring(2, value.length);
  const numeroComPontoFinal = `${parteInteira}.${parteDecimal}`;

  return numeroComPontoFinal;
};
