const { moveRotate, moveForward } = require("./movements");

const MOVES = {
  F: moveForward,
  L: moveRotate,
  R: moveRotate,
};

const cautionPoints = {};

function isSafeMove(position, worldSize) {
  const [x, y, _] = position;
  if (x <= worldSize[0] && y <= worldSize[1]) {
    return true;
  }
  return false;
}

function getLastPosition(instructions, worldSize) {
  const [position, moves] = instructions;
  let newPosition = [...position];

  moves.split("").every((move) => {
    const cautionPoint = newPosition.join("") + move;
    if (cautionPoints[cautionPoint]) {
      return true;
    }
    const possibleNewPosition = MOVES[move](newPosition, move);
    if (isSafeMove(possibleNewPosition, worldSize)) {
      newPosition = [...possibleNewPosition];
      return true;
    }
    cautionPoints[cautionPoint] = true;
    newPosition.push("LOST");
    return false;
  });
  return newPosition;
}

module.exports = {
  getLastPosition: getLastPosition,
};
