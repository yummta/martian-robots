const { getNewOrientation, moveForward } = require("./movements");

test("turn right", () => {
  expect(getNewOrientation("N", "R")).toBe("E");
  expect(getNewOrientation("E", "R")).toBe("S");
  expect(getNewOrientation("S", "R")).toBe("W");
  expect(getNewOrientation("W", "R")).toBe("N");
});

test("turn left", () => {
  expect(getNewOrientation("N", "L")).toBe("W");
  expect(getNewOrientation("E", "L")).toBe("N");
  expect(getNewOrientation("S", "L")).toBe("E");
  expect(getNewOrientation("W", "L")).toBe("S");
});

test("move forward", () => {
  expect(moveForward([3, 3, "N"])).toEqual([3, 4, "N"]);
  expect(moveForward([3, 3, "E"])).toEqual([4, 3, "E"]);
  expect(moveForward([3, 3, "S"])).toEqual([3, 2, "S"]);
  expect(moveForward([3, 3, "W"])).toEqual([2, 3, "W"]);
});
