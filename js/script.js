const { Engine, Render, Runner, World, Bodies } = Matter;
const engine = Engine.create();
const { world } = engine;
const cells = 3;
const width = 600;
const height = 600;
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    wireframes: false,
    width,
    height
  }
});
Render.run(render);
Runner.run(Runner.create(), engine);

// Walls
const walls = [
  Bodies.rectangle(width / 2, 0, width, 40, { isStatic: true }), // top
  Bodies.rectangle(width, height / 2, 40, height, { isStatic: true }), // right
  Bodies.rectangle(width / 2, height, width, 40, { isStatic: true }), // bottom
  Bodies.rectangle(0, height / 2, 40, height, { isStatic: true }) // left
];
World.add(world, walls);

// Generate Maze

const shuffle = (arr) => {
  let counter = arr.length;
  while (counter > 0) {
    const index = Math.floor(Math.random() * counter);
    counter--;
    const temp = arr[counter];
    arr[counter] = arr[index];
    arr[index] = temp;
  }
  return arr;
};

const grid = Array(cells).fill(null).map(() => Array(cells).fill(false));
const verticals = Array(cells).fill(null).map(() => Array(cells - 1).fill(false));
const horizontals = Array(cells - 1).fill(null).map(() => Array(cells).fill(false));

// Random starting cell
const startRow = Math.floor(Math.random() * cells);
const startColumn = Math.floor(Math.random() * cells);

const stepThroughCell = (row, column) => {
  // Is cell already visited
  if (grid[row][column]) {
    return;
  }
  // Mark cell as visited
  grid[row][column] = true;
  // Random list of neighbors
  const neighbors = shuffle([
    [row - 1, column], // top
    [row, column + 1], // right
    [row + 1, column], // bottom
    [row, column - 1] // left
  ]);
  console.log(neighbors);
  // For each neighbor
  // Check if neighbor is out of bounds
  // If visited neighbor, move on to next neighbor
  // Remove vertical/horizontal walls
  // Visit next cell
};

stepThroughCell(1, 1);
