const ftoc = tempF => {
  return Number.parseFloat(((tempF - 32) * 5/9).toFixed(1));
};

const ctof = tempC => {
  return Number.parseFloat((tempC * (9/5) + 32).toFixed(1));
};

export { ftoc, ctof};
