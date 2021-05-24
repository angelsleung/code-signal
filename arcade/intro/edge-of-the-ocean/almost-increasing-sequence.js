function almostIncreasingSequence(sequence) {
  if (sequence.length <= 2) {
    return true;
  }
  return increasingSequenceHelper(sequence, false);
}

function increasingSequenceHelper(sequence, removedOne) {
  for (let i = 0; i < sequence.length - 1; i++) {
    if (sequence[i] >= sequence[i + 1]) {
      if (removedOne) {
        return false;
      } else if (sequence[i] >= sequence[i + 2]) {
        const slicedSequence = sequence.slice(0, i).concat(sequence.slice(i + 1));
        return increasingSequenceHelper(slicedSequence, true);
      } else {
        const slicedSequence = sequence.slice(0, i + 1).concat(sequence.slice(i + 2));
        return increasingSequenceHelper(slicedSequence, true);
      }
    }
  }
  return true;
}
