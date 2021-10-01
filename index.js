const { Engine, Render, Runner, World, Bodies, MouseConstraint, Mouse } =
  Matter;

const engine = Engine.create();
const { world } = engine;
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 800,
    height: 600,
  },
});
Render.run(render);
Runner.run(Runner.create(), engine);

World.add(
  world,
  MouseConstraint.create(engine, {
    mouse: Mouse.create(render.canvas),
  })
);

const walls = [
  Bodies.rectangle(0, 200, 50, 800, { isStatic: true }),
  Bodies.rectangle(800, 200, 50, 800, { isStatic: true }),
  Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
  Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
];

const shape2 = Bodies.rectangle(0, 200, 800, 600);
World.add(world, walls);

World.add(world, Bodies.rectangle(200, 200, 50, 50));
