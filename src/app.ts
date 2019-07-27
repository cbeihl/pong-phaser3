import "phaser";
import { TitleScene } from "./titleScene";

const config: GameConfig = {
  title: "Pong",
  width: 1280,
  height: 720,
  parent: "game",
  scene: [TitleScene],
  physics: {
    default: "arcade",
    arcade: {
      debug: false
    }
  },
  backgroundColor: "#000000"
};

export class PongGame extends Phaser.Game {
  constructor(config: GameConfig) {
    super(config);
  }
};

window.onload = () => {
  var game = new PongGame(config);
};
