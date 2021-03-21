function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let height = 0;
  let day = 1;
  while (height < desiredHeight) {
    height += upSpeed;
    if (height >= desiredHeight) {
      break;
    }
    height -= downSpeed;
    day++;
  }
  return day;
}
