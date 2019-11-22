function helloKit() {
  return "Hello, Comp Form!";
}

function randomRange(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

export { helloKit, randomRange };
