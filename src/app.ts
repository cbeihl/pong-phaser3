import "phaser";
import { TitleScene } from "./titleScene";
import {GameScene} from "./gameScene";

const config: Phaser.Types.Core.GameConfig = {
  title: "Pong",
  width: 1280,
  height: 720,
  parent: "game",
  scene: [TitleScene, GameScene],
  physics: {
    default: "arcade",
    arcade: {
      debug: false
    }
  },
  backgroundColor: "#000000"
};

export class PongGame extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);
  }
};

window.onload = () => {
  var game = new PongGame(config);
};
