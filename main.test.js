const { getLastPosition } = require("./main");

const robot1 = [[1, 1, "E"], "RFRFRFRF"];
const robot2 = [[3, 2, "N"], "FRRFLLFFRRFLL"];
const robot3 = [[0, 3, "W"], "LLFFFLFLFL"];

test("get last position into mars", () => {
  expect(getLastPosition(robot1)).toEqual([1, 1, "E"]);
});

test("lose the robot", () => {
  expect(getLastPosition(robot2)).toEqual([3, 3, "N", "LOST"]);
});

test("avoid losing the robot thanks to the scent of the loss", () => {
  expect(getLastPosition(robot3)).toEqual([2, 3, "S"]);
});
