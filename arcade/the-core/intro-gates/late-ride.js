function lateRide(n) {
  const hours = Math.floor(n / 60);
  const minutes = n % 60;
  return Math.floor(hours / 10) + hours % 10 + Math.floor(minutes / 10) + minutes % 10;
}
