function alternatingSums(a) {
  let team1weight = 0;
  let team2weight = 0;
  for (var i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      team1weight += a[i];
    } else {
      team2weight += a[i];
    }
  }
  return [team1weight, team2weight];
}
