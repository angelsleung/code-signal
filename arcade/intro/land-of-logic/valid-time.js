function validTime(time) {
  const [hour, min] = time.split(':');
  return hour < 24 && min < 60;
}
