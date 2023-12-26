const num = 1180000.15555;

console.log(num.toFixed(2));

console.log(
  num.toLocaleString("ru-RU", { style: "currency", currency: "RUB" })
);
