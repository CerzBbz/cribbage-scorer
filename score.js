const { mapValues, sortAsc } = require("./utils.js");

const scoreFlush = (hand, flop, isCrib) => {
  if (hand.every((card) => card.suit === hand[0].suit)) {
    if (flop.suit === hand[0].suit) {
      return hand.length + 1;
    }
    if (isCrib) return 0;
    return hand.length;
  }
  return 0;
};

const scorePair = (hand, flop) => {
  return Object.values(
    [...hand, flop].reduce((prev, curr) => {
      if (!prev[curr.value]) {
        prev[curr.value] = 1;
      } else {
        prev[curr.value]++;
      }
      return prev;
    }, {})
  ).reduce((prev, curr) => prev + curr * (curr - 1), 0);
};

const scoreRun = (hand, flop) => {
  let score = 0,
    consecutive = 1,
    dupesInRun = {};
  const sorted = [...hand, flop].sort(sortAsc).map(mapValues);
  const countRun = () => {
    if (consecutive >= 3) {
      const multiplier =
        Object.values(dupesInRun).reduce((prev, curr) => {
          return prev + curr;
        }, 0) || 1;
      score += consecutive * multiplier;
    }
  };
  sorted.forEach((card, i) => {
    if (sorted[i + 1]) {
      const diff = sorted[i + 1] - card;
      if (diff === 1) {
        consecutive++;
      } else if (diff === 0) {
        if (!dupesInRun[card]) {
          dupesInRun[card] = 2;
        } else {
          dupesInRun[card]++;
        }
      } else {
        countRun();
        consecutive = 1;
        dupesInRun = {};
      }
    } else {
      countRun();
    }
  });
  return score;
};

const scoreFifteenRec = (cards, subtotal) => {
  let count = 0;
  cards.forEach((card, index) => {
    let total = (card < 10 ? card : 10) + subtotal;
    if (total === 15) {
      count++;
    } else if (total < 15) {
      count += scoreFifteenRec(cards.slice(index + 1), total);
    }
  });
  return count;
};

const scoreFifteen = (hand, flop) => {
  return scoreFifteenRec([...hand, flop].sort(sortAsc).map(mapValues), 0) * 2;
};

const scoreNob = (hand, flop) => {
  return hand.some((card) => card.value === 11 && card.suit === flop.suit) * 1;
};

const scoreHand = (hand, flop, isCrib = false) => {
  let flush = 0,
    pair = 0,
    run = 0,
    fifteen = 0,
    nob = 0;
  hand.sort(sortAsc);

  // console.log([...hand, flop].sort(sortAsc).map(prettyPrintCard).join(" "));

  flush += scoreFlush(hand, flop, isCrib);
  pair += scorePair(hand, flop);
  run += scoreRun(hand, flop);
  fifteen = scoreFifteen(hand, flop);
  nob = scoreNob(hand, flop);
  const score = flush + pair + run + fifteen + nob;

  return score;
};

module.exports = {
  scoreFifteen,
  scoreFlush,
  scoreNob,
  scorePair,
  scoreRun,
  scoreHand,
};
