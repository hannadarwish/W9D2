class View {
  constructor(game, containerEl) {
    this.game = game;
    this.containerEl = containerEl;
    this.setupBoard();
    containerEl.addEventListener("click", (this.handleClick.bind(this)));
  }

  setupBoard() {
    let grid = document.createElement("ul");
    for (let row = 0; row < 3; row ++) {
      for (let col = 0; col < 3; col ++) {
        let ele = document.createElement("li");
        grid.appendChild(ele);
        // const pos = [row, col];
        ele.setAttribute("data-pos", `[${row},${col}]`);
      }
    }
    this.containerEl.appendChild(grid);
  }

  handleClick(e) {
    // click event handler that we pass to the event listener
    // let square = e.target;
    let pos = e.target.getAttribute("data-pos");
    // pos = pos.split(",").map((el) => parseInt(el))
    pos = JSON.parse(pos)
    this.game.playMove(pos);
    const mark = this.game.currentPlayer;
    // let markText = document.createElement("p");
    // markText.classList.add("marks");
    e.target.innerText = mark;
    this.handleGameOver();
  }

  // makeMove(square) {
  //   this.game.playMove(pos)

  // }

  handleGameOver() {
    if (this.game.isOver() === true) {

      let messageBox = document.createElement("h2");

      let text = `Congratulations ${this.game.currentPlayer} !!!`;
      const message = document.querySelector('h2');
      message.innerText = text
    }
  }
}

export default View;
