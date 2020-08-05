const fibonacci = (orderNum, prevEl = 0, currentEl = 0) => {
  orderNum = parseInt(orderNum);
  if (orderNum < 0) {
    return "OOPS";
  }
  if (orderNum === 0) {
    return currentEl;
  }
  if (currentEl === 0) {
    currentEl = 1;
  } else {
    const sentinel = prevEl;
    prevEl = currentEl;
    currentEl = sentinel + prevEl;
  }
  return fibonacci(--orderNum, prevEl, currentEl);
}

export default fibonacci;
