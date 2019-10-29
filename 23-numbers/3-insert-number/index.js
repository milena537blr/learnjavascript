function readNumber() {
  let n = null;
  do {
    n = prompt("Insert number", 0);
  } while (!isFinite(n));

  return (n === null || n === '') ? null : +n;
}

alert(`Number: ${readNumber()}`);
