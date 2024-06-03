const sortAsc = (a, b) => a.value - b.value;

const mapValues = (a) => a.value;

const prettyPrintCard = (card) => {
  return `${{1: 'A', 10: 'T', 11: 'J', 12: 'Q',13: 'K' }[card.value] ?? card.value}${
    ["♣️", "♦️", "♥️", "♠️"][card.suit]
  }`;
};

const stringToCard = (cardString) => {
    const [, value, suit] = cardString.match(/(\d+|A|T|J|Q|K)(\w)/);
    return {
        value: {A: 1, T: 10, J: 11, Q: 12, K: 13 }[value] ?? +value,
        suit: {C: 0, D: 1, H: 2, S: 3 }[suit]
    }
}

const stringToGame = (gameString) => {
    const hand = gameString.split(" ").map(stringToCard);
    const crib = hand.pop();
    
    return [hand, crib];
}

module.exports = {
    sortAsc,
    mapValues,
    prettyPrintCard,
    stringToGame
}