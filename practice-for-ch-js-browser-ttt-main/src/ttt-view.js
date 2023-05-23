class View {
  constructor(game, containerEl) {
    this.game = game;
    this.containerEl = containerEl;
  }
  
  setupBoard() {
    let grid = document.createElement("ul");
    for (let row = 0; row < 3; row ++) {
      for (let col = 0; col < 3; col ++) {
        let ele = document.createElement("li");
        ul.append(ele);
        const pos = [row, col];
        ele.dataset.pos = pos;
      }
    }
    grid.append(ul);
  }
  
  handleClick(e) {
  }

  makeMove(square) {
  }
  
  handleGameOver() {
  }
}

export default View;