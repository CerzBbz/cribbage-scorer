const {
  scoreFifteen,
  scoreFlush,
  scoreNob,
  scorePair,
  scoreRun,
  scoreHand
} = require("./score.js");
const { stringToGame } = require("./utils.js");

const perfectHandStr = "JS 5C 5D 5H 5S";
const perfectHand = stringToGame(perfectHandStr);
const nearlyPerfectHandStr = "5C 5D 5H 5S JS";
const nearlyPerfectHand = stringToGame(nearlyPerfectHandStr);
const nilHandStr = "2C 4D 6S TC KS";
const nilHand = stringToGame(nilHandStr);
const flushRun12345Str = "1C 2C 3C 4C 5C";
const flushRun12345 = stringToGame(flushRun12345Str);
const fourCardFlushStr = "1C 3C 5C 7C 9D";
const fourCardFlush = stringToGame(fourCardFlushStr);
const brokenFourCardFlushStr = "1C 3C 5C 7D 9C";
const brokenFourCardFlush = stringToGame(brokenFourCardFlushStr);
const four5sAndAceStr = "5C 5D 5H 5S AC";
const four5sAndAce = stringToGame(four5sAndAceStr);
const doubleRun78sStr = "7C 7D 8C 2D 9C";
const doubleRun78s = stringToGame(doubleRun78sStr);
const doubleDoubleRun78sStr = "7C 7D 8C 8D 9C";
const doubleDoubleRun78s = stringToGame(doubleDoubleRun78sStr);
const threeOfAKindStr = "3C 3D 3C 5D 8C";
const threeOfAKind = stringToGame(threeOfAKindStr);

describe("test scoreFifteen", () => {
  test(perfectHandStr, () => {
    expect(scoreFifteen(...perfectHand)).toBe(16);
  });

  test(nearlyPerfectHandStr, () => {
    expect(scoreFifteen(...nearlyPerfectHand)).toBe(16);
  });

  test(nilHandStr, () => {
    expect(scoreFifteen(...nilHand)).toBe(0);
  });

  test(flushRun12345Str, () => {
    expect(scoreFifteen(...flushRun12345)).toBe(2);
  });

  test(fourCardFlushStr, () => {
    expect(scoreFifteen(...fourCardFlush)).toBe(4);
  });

  test(brokenFourCardFlushStr, () => {
    expect(scoreFifteen(...brokenFourCardFlush)).toBe(4);
  });

  test(four5sAndAceStr, () => {
    expect(scoreFifteen(...four5sAndAce)).toBe(8);
  });

  test(doubleRun78sStr, () => {
    expect(scoreFifteen(...doubleRun78s)).toBe(4);
  });

  test(doubleDoubleRun78sStr, () => {
    expect(scoreFifteen(...doubleDoubleRun78s)).toBe(8);
  });

  test(threeOfAKindStr, () => {
    expect(scoreFifteen(...threeOfAKind)).toBe(0);
  });
});

describe("test scoreFlush", () => {
  test(perfectHandStr, () => {
    expect(scoreFlush(...perfectHand)).toBe(0);
  });

  test(nearlyPerfectHandStr, () => {
    expect(scoreFlush(...nearlyPerfectHand)).toBe(0);
  });

  test(nilHandStr, () => {
    expect(scoreFlush(...nilHand)).toBe(0);
  });

  test(flushRun12345Str, () => {
    expect(scoreFlush(...flushRun12345)).toBe(5);
  });

  test(fourCardFlushStr, () => {
    expect(scoreFlush(...fourCardFlush)).toBe(4);
  });

  test(brokenFourCardFlushStr, () => {
    expect(scoreFlush(...brokenFourCardFlush)).toBe(0);
  });

  test(four5sAndAceStr, () => {
    expect(scoreFlush(...four5sAndAce)).toBe(0);
  });

  test(doubleRun78sStr, () => {
    expect(scoreFlush(...doubleRun78s)).toBe(0);
  });

  test(doubleDoubleRun78sStr, () => {
    expect(scoreFlush(...doubleDoubleRun78s)).toBe(0);
  });

  test(threeOfAKindStr, () => {
    expect(scoreFlush(...threeOfAKind)).toBe(0);
  });
});

describe("test scoreFlush Crib", () => {
  test(perfectHandStr, () => {
    expect(scoreFlush(...perfectHand, true)).toBe(0);
  });

  test(nearlyPerfectHandStr, () => {
    expect(scoreFlush(...nearlyPerfectHand, true)).toBe(0);
  });

  test(nilHandStr, () => {
    expect(scoreFlush(...nilHand, true)).toBe(0);
  });

  test(flushRun12345Str, () => {
    expect(scoreFlush(...flushRun12345, true)).toBe(5);
  });

  test(fourCardFlushStr, () => {
    expect(scoreFlush(...fourCardFlush, true)).toBe(0);
  });

  test(brokenFourCardFlushStr, () => {
    expect(scoreFlush(...brokenFourCardFlush, true)).toBe(0);
  });

  test(four5sAndAceStr, () => {
    expect(scoreFlush(...four5sAndAce, true)).toBe(0);
  });

  test(doubleRun78sStr, () => {
    expect(scoreFlush(...doubleRun78s, true)).toBe(0);
  });

  test(doubleDoubleRun78sStr, () => {
    expect(scoreFlush(...doubleDoubleRun78s, true)).toBe(0);
  });

  test(threeOfAKindStr, () => {
    expect(scoreFlush(...threeOfAKind, true)).toBe(0);
  });
});

describe("test scoreNob", () => {
  test(perfectHandStr, () => {
    expect(scoreNob(...perfectHand)).toBe(1);
  });

  test(nearlyPerfectHandStr, () => {
    expect(scoreNob(...nearlyPerfectHand)).toBe(0);
  });

  test(nilHandStr, () => {
    expect(scoreNob(...nilHand)).toBe(0);
  });

  test(flushRun12345Str, () => {
    expect(scoreNob(...flushRun12345)).toBe(0);
  });

  test(fourCardFlushStr, () => {
    expect(scoreNob(...fourCardFlush)).toBe(0);
  });

  test(brokenFourCardFlushStr, () => {
    expect(scoreNob(...brokenFourCardFlush)).toBe(0);
  });

  test(four5sAndAceStr, () => {
    expect(scoreNob(...four5sAndAce)).toBe(0);
  });

  test(doubleRun78sStr, () => {
    expect(scoreNob(...doubleRun78s)).toBe(0);
  });

  test(doubleDoubleRun78sStr, () => {
    expect(scoreNob(...doubleDoubleRun78s)).toBe(0);
  });

  test(threeOfAKindStr, () => {
    expect(scoreNob(...threeOfAKind)).toBe(0);
  });
});

describe("test scorePair", () => {
  test(perfectHandStr, () => {
    expect(scorePair(...perfectHand)).toBe(12);
  });

  test(nearlyPerfectHandStr, () => {
    expect(scorePair(...nearlyPerfectHand)).toBe(12);
  });

  test(nilHandStr, () => {
    expect(scorePair(...nilHand)).toBe(0);
  });

  test(flushRun12345Str, () => {
    expect(scorePair(...flushRun12345)).toBe(0);
  });

  test(fourCardFlushStr, () => {
    expect(scorePair(...fourCardFlush)).toBe(0);
  });

  test(brokenFourCardFlushStr, () => {
    expect(scorePair(...brokenFourCardFlush)).toBe(0);
  });

  test(four5sAndAceStr, () => {
    expect(scorePair(...four5sAndAce)).toBe(12);
  });

  test(doubleRun78sStr, () => {
    expect(scorePair(...doubleRun78s)).toBe(2);
  });

  test(doubleDoubleRun78sStr, () => {
    expect(scorePair(...doubleDoubleRun78s)).toBe(4);
  });

  test(threeOfAKindStr, () => {
    expect(scorePair(...threeOfAKind)).toBe(6);
  });
});



describe("test scoreRun", () => {
  test(perfectHandStr, () => {
    expect(scoreRun(...perfectHand)).toBe(0);
  });

  test(nearlyPerfectHandStr, () => {
    expect(scoreRun(...nearlyPerfectHand)).toBe(0);
  });

  test(nilHandStr, () => {
    expect(scoreRun(...nilHand)).toBe(0);
  });

  test(flushRun12345Str, () => {
    expect(scoreRun(...flushRun12345)).toBe(5);
  });

  test(fourCardFlushStr, () => {
    expect(scoreRun(...fourCardFlush)).toBe(0);
  });

  test(brokenFourCardFlushStr, () => {
    expect(scoreRun(...brokenFourCardFlush)).toBe(0);
  });

  test(four5sAndAceStr, () => {
    expect(scoreRun(...four5sAndAce)).toBe(0);
  });

  test(doubleRun78sStr, () => {
    expect(scoreRun(...doubleRun78s)).toBe(6);
  });

  test(doubleDoubleRun78sStr, () => {
    expect(scoreRun(...doubleDoubleRun78s)).toBe(12);
  });

  test(threeOfAKindStr, () => {
    expect(scoreRun(...threeOfAKind)).toBe(0);
  });
});

describe("test scoreHand", () => {
  test(perfectHandStr, () => {
    expect(scoreHand(...perfectHand)).toBe(29);
  });

  test(nearlyPerfectHandStr, () => {
    expect(scoreHand(...nearlyPerfectHand)).toBe(28);
  });

  test(nilHandStr, () => {
    expect(scoreHand(...nilHand)).toBe(0);
  });

  test(flushRun12345Str, () => {
    expect(scoreHand(...flushRun12345)).toBe(12);
  });

  test(fourCardFlushStr, () => {
    expect(scoreHand(...fourCardFlush)).toBe(8);
  });

  test(`${fourCardFlushStr} crib`, () => {
    expect(scoreHand(...fourCardFlush, true)).toBe(4);
  });


  test(brokenFourCardFlushStr, () => {
    expect(scoreHand(...brokenFourCardFlush)).toBe(4);
  });

  test(four5sAndAceStr, () => {
    expect(scoreHand(...four5sAndAce)).toBe(20);
  });

  test(doubleRun78sStr, () => {
    expect(scoreHand(...doubleRun78s)).toBe(12);
  });

  test(doubleDoubleRun78sStr, () => {
    expect(scoreHand(...doubleDoubleRun78s)).toBe(24);
  });

  test(threeOfAKindStr, () => {
    expect(scoreHand(...threeOfAKind)).toBe(6);
  });
});