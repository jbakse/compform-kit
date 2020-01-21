function helloKit() {
  return "Hello, Comp Form!!";
}

function randomRange(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function mod(dividend: number, divisor: number): number {
  return dividend - divisor * Math.floor(dividend / divisor);
}

export { helloKit, randomRange, mod };
