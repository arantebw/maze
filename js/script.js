const { Engine, Render, Runner, World, Bodies } = Matter;
const engine = Engine.create();
const { world } = engine;
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
