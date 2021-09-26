const fs = require("fs");

const parsePosition = (string) => {
  position = string.split(" ");
  return [position[0] * 1, position[1] * 1, position[2]];
};

const parseWorldSize = (size) =>
  size
    .shift()
    .split(" ")
    .map((n) => n * 1);

function getData() {
  const inputData = fs.readFileSync("./input.txt").toString().split("\n");
  const worldSize = parseWorldSize(inputData);
  const robotsData = inputData.join("").matchAll(/(\d\s\d\s\w)([A-Z]+)/g);
  const robotInstructions = [...robotsData].map((data) => [
    parsePosition(data[1]),
    data[2],
  ]);
  return { worldSize, robotInstructions };
}

module.exports = {
  getData: getData,
};
