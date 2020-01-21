function helloKit() {
  return "Hello, Comp Form!!";
}

function randomRange(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function mod(dividend: number, divisor: number): number {
  return dividend - divisor * Math.floor(dividend / divisor);
}
function lerp(min: number, max: number, n: number) {
  return min * (1 - n) + (max * n);
}

export { helloKit, randomRange, mod, lerp };
