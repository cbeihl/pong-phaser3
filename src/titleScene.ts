import "phaser";

export class TitleScene extends Phaser.Scene {
  title: Phaser.GameObjects.Text;
  hint: Phaser.GameObjects.Text;

  constructor() {
    super({
      key: "TitleScene"
    });
  }

  preload(): void {
    this.load.image('title', 'assets/pong_title4.png');  
  }

  create(): void {
    /*
    var titleText: string = "Pong";
    this.title = this.add.text(500, 200, titleText,
      { font: '128px Arial Bold', fill: '#FFFFFF' });

    var hintText: string = "Click to start";
    this.hint = this.add.text(560, 350, hintText,
      { font: '24px Arial Bold', fill: '#FFFFFF' });
    */

    let titleImg: Phaser.GameObjects.Image = this.add.image(640, -360, 'title');
    titleImg.setScale(8);

    this.tweens.add({
        targets: titleImg,
        props: {
            y: { value: 320, duration: 1000, ease: 'Power2', delay: 1000 }
        }
    });

    this.input.on('pointerdown', function (/*pointer*/) {
      this.scene.start("GameScene");
    }, this);
  }
};
