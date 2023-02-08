class start {
  constructor() {
    this.player = document.querySelector(".player p");
    this.computer = document.querySelector(".computer p");
    this.pemenang = document.querySelector(".pemenang p span");
  }

  operasi(params) {
    this.player.innerHTML = params;
    const option = ["Batu", "Kertas", "Gunting"];
    const comp = option[Math.floor(Math.random() * 3)];
    if (comp == params) {
      this.pemenang.innerHTML = "DRAW";
      this.computer.innerHTML = comp;
    } else if (comp == "Batu" && params == "Kertas") {
      this.pemenang.innerHTML = "PLAYER WIN";
      this.computer.innerHTML = comp;
    } else if (comp == "Batu" && params == "Gunting") {
      this.pemenang.innerHTML = "COMPUTER WIN";
      this.computer.innerHTML = comp;
    } else if (comp == "Kertas" && params == "Batu") {
      this.pemenang.innerHTML = "COMPUTER WIN";
      this.computer.innerHTML = comp;
    } else if (comp == "Kertas" && params == "Gunting") {
      this.pemenang.innerHTML = "PLAYER WIN";
      this.computer.innerHTML = comp;
    } else if (comp == "Gunting" && params == "Batu") {
      this.pemenang.innerHTML = "PLAYER WIN";
      this.computer.innerHTML = comp;
    } else if (comp == "Gunting" && params == "Kertas") {
      this.pemenang.innerHTML = "COMPUTER WIN";
      this.computer.innerHTML = comp;
    }
  }
}

function clicked(params) {
  const startGame = new start();
  startGame.operasi(params);
}
