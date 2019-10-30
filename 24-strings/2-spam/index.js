function checkSpam(str) {
  if (!str) return false;
  str = str.toLowerCase();

  return str.includes("viagra") || str.includes("xxx");
}

alert(`${checkSpam("buy ViAgRA now")}`);
