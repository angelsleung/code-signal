function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  var yourStrong = Math.max(yourLeft, yourRight);
  var yourWeak = Math.min(yourLeft, yourRight);
  var friendsStrong = Math.max(friendsLeft, friendsRight);
  var friendsWeak = Math.min(friendsLeft, friendsRight);
  return yourStrong === friendsStrong && yourWeak === friendsWeak;
}
