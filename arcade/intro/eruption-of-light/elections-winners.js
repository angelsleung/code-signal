function electionsWinners(votes, k) {
  let result = 0;
  const currentMax = votes.reduce((a, b) => Math.max(a, b));
  let winnerCount = 0;
  for (let i = 0; i < votes.length; i++) {
    if (votes[i] + k > currentMax) {
      result++;
    }
    if (votes[i] === currentMax) {
      winnerCount++;
    }
  }
  if (k === 0 && winnerCount === 1) {
    return 1;
  }
  return result;
}
