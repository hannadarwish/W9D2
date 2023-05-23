import View from "./ttt-view";
import Game from "../ttt_node/game";

document.addEventListener("DOMContentLoaded", () => {
  const containerEl = document.getElementsByClassName("ttt")[0];
  const game = new Game();
  const view = new View(game, containerEl);
});



