function random(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

alert(`${random(1, 3)}`);

