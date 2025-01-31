
const GameModel = {
  isGameOver: false,
  score: 0,
  level: 1,
  updateScore: function(points) {
    if (this.isGameOver) return;
    this.score += points;
    this.level = Math.floor(this.score / 100 + 1);
  },
  resetGame: function() {
    this.isGameOver = false;
    this.score = 0;
    this.level = 1;
  }
};

const GameView = {
  board: document.getElementById("board"),
  music: document.querySelector("audio"),
  finalScore: document.querySelector(".final"),
  pop: document.querySelector(".pop"),
  enemy: document.querySelector("#enemy"),
  player: document.getElementById("player"),
  start:document.getElementById("start"),
  
  updateUI: function(e) {
    document.getElementById("level").innerText = GameModel.level;
    document.getElementById("score").innerText = GameModel.score;
    e.target.style.transform = "scale(1.5 , 0.3)";
    e.target.style.transformOrigin = "bottom";
  },
  playSound: function(path, vol) {
    let sound = new Audio(path);
    sound.volume = vol;
    sound.play();
  },
  updateCursor: function(down) {
    this.board.style.cursor = `url('./image/${down ? "hammerdown" : "hammerup"}.png'), auto`;
  },
  showGameOver: function() {
    this.pop.classList.remove("hidden");
    this.finalScore.innerText = GameModel.score;
    this.finalScore.style.color = GameModel.score < 100 ? "red" : "green";
    this.music.pause();
  },
  renderTile: function(id) {
    let tile = document.createElement("div");
    tile.id = id;
    this.board.appendChild(tile);
  },
  renderEntity: function(type, tile) {
    let entity = document.createElement("img");
    entity.id = type;
    if(type === "enemy"){
      entity.src = GameView.enemy.files[0] ? URL.createObjectURL(enemy.files[0]) : "./image/feihuan1.png"
    } else {
      entity.src = GameView.player.files[0] ? URL.createObjectURL(player.files[0]) : "./image/vita.png"
    }
    entity.draggable = false;
    tile.appendChild(entity);
  }
};

const GameController = {
  startGame: function() {
    GameView.music.play();
    GameView.start.remove();
    GameController.init();

  },
  init: function() {
    for (let i = 0; i < 16; i++) {
      GameView.renderTile(i.toString());
    }
    document.getElementById("board").addEventListener("click", this.handleTileClick);
    this.startGameLoops();
  },
  handleTileClick: function(e) {
    if (GameModel.isGameOver) return;
    GameView.updateCursor(true);
    setTimeout(() => GameView.updateCursor(false), 50);
    
    if (e.target.id === "enemy") {
      GameView.playSound("./audio/feihuanhit.mp3", 0.5);
      GameView.playSound("./audio/hammerhead.mp3", 0.5);
      GameModel.updateScore(10);
      GameView.updateUI(e);
      setTimeout(()=>{
        e.target.remove();
      }, 1000)

    } else if (e.target.id === "player") {
      GameView.playSound("./audio/vitahit.mp3", 0.5);
      GameView.playSound("./audio/hammerhead.mp3", 0.5);
      GameModel.isGameOver = true;
      GameView.showGameOver();
      GameView.updateUI(e);
    } else {
      GameView.playSound("./audio/hammerpipe.mp3", 0.5);
    }
  },
  spawnEntity: function(type) {
    if (GameModel.isGameOver) return;
    let tile = document.getElementById(Math.floor(Math.random() * 16).toString());
    if (tile.children.length === 0) {
      GameView.renderEntity(type, tile);
      GameView.playSound("./audio/pop.mp3", 0.2);
      setTimeout(() => {
        if (!GameModel.isGameOver) {
          tile.innerHTML = "";
          GameView.playSound("./audio/out.mp3", 0.2);
        }
      }, 2500 / GameModel.level);
    }
  },
  startGameLoops: function() {
    setInterval(() => this.spawnEntity("enemy"), 1500 / GameModel.level);
    setInterval(() => this.spawnEntity("player"), 1800 / GameModel.level);
    setInterval(() => this.spawnEntity("enemy"), 2100 / GameModel.level);
  }
};

window.onload = () => {
  document.body.addEventListener("click", GameController.startGame, { once: true });
};

