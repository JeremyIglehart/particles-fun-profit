import gameLoop from './lib/game-loop';

// import { getState, update, getActive, getSize, render } from './app/fireworks';
import { getState, update, getActive, getSize, render } from './app/metaballs';

function game(currentTime, deltaTime) {
  const state = getState();
  update(state, currentTime, deltaTime);
  render({ currentTime, deltaTime, particles: getActive(), size: getSize() });
}

const loop = gameLoop(game);
loop.start();

// let frame = 0;
// window.addEventListener('click', () => {
//   loop.goto(frame++);
// });
