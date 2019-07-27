import "phaser";

export class TitleScene extends Phaser.Scene {
  title: Phaser.GameObjects.Text;
  hint: Phaser.GameObjects.Text;

  constructor() {
    super({
      key: "TitleScene"
    });
  }

  create(): void {
    var titleText: string = "Pong";
    this.title = this.add.text(500, 200, titleText,
      { font: '128px Arial Bold', fill: '#FFFFFF' });

    var hintText: string = "Click to start";
    this.hint = this.add.text(560, 350, hintText,
      { font: '24px Arial Bold', fill: '#FFFFFF' });

    this.input.on('pointerdown', function (/*pointer*/) {
      this.scene.start("GameScene");
    }, this);
  }
};
