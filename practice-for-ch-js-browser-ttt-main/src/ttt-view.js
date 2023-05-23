class View {
  constructor(game, containerEl) {
    this.game = game;
    this.containerEl = containerEl;
    this.setupBoard();
    containerEl.addEventListener("click", (this.handleClick));
  }

  setupBoard() {
    let grid = document.createElement("ul");
    for (let row = 0; row < 3; row ++) {
      for (let col = 0; col < 3; col ++) {
        let ele = document.createElement("li");
        grid.appendChild(ele);
        const pos = [row, col];
        ele.setAttribute("data-pos", pos);
      }
    }
    this.containerEl.appendChild(grid);
  }

  handleClick(e) {
    // click event handler that we pass to the event listener
    // let square = e.target;
    let pos = e.target.getAttribute("data-pos");
    console.log(pos)
    this.game.playMove(pos);
    const mark = this.game.currentPlayer;
    e.target.innerText = mark;
  }

  makeMove(square) {

  }

  handleGameOver() {

  }
}

export default View;
