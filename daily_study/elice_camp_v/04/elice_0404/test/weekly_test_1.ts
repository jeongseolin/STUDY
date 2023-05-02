function add(a: number, b: number, c?: number): number{
  let sum = a + b;
  if (c) {
    sum += c;
    return sum;
  } else {
    return sum;
  }
}

export { add };