const CARDINAL_POINTS = "NESW";

function getNewOrientation(current, rotation) {
  switch (true) {
    case current === "W" && rotation === "R":
      return "N";
    case current === "N" && rotation === "L":
      return "W";
  }

  const indexCardinalPoint = CARDINAL_POINTS.indexOf(current);
  return rotation === "R"
    ? CARDINAL_POINTS[indexCardinalPoint + 1]
    : CARDINAL_POINTS[indexCardinalPoint - 1];
}

function moveRotate(position, rotation) {
  let [x, y, orientation] = position;
  const newOrientation = getNewOrientation(orientation, rotation);
  return [x, y, newOrientation];
}

function moveForward(position) {
  let [x, y, orientation] = position;
  // TODO: We can update this to support additional commands in future
  switch (orientation) {
    case "N":
      y++;
      break;
    case "E":
      x++;
      break;
    case "S":
      y--;
      break;
    case "W":
      x--;
      break;
  }
  return [x, y, orientation];
}

module.exports = {
  getNewOrientation: getNewOrientation,
  moveRotate: moveRotate,
  moveForward: moveForward,
};
