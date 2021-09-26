const { getData } = require("./getData");
const { getLastPosition } = require("./getLastPosition");

function formatOutput(robotsPositions) {
  return robotsPositions.map((position) => position.join(" ")).join("\n");
}

function runRobots() {
  const { worldSize, robotInstructions } = getData();
  const output = robotInstructions.map((instruction) =>
    getLastPosition(instruction, worldSize)
  );
  return formatOutput(output);
}

console.log(runRobots());
