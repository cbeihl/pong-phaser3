import "phaser";

export class GameScene extends Phaser.Scene {
    constructor() {
        super({
            key: "GameScene"
        });
    }

    preload(): void {
        this.load.spritesheet('paddle', 'assets/paddle-idle-sheet.png', { frameWidth: 22, frameHeight: 45 });
    }

    create(): void {
        // configure paddle animation
        let config = {
            key: 'paddleidle',
            frames: this.anims.generateFrameNumbers('paddle', {}),
            frameRate: 6,
            yoyo: true,
            repeat: -1
        };

        // create animation object
        let anim = this.anims.create(config);

        // create the sprite for the animation and add it to the screen
        let sprite = this.add.sprite(200, 200, 'paddle').setScale(4);
        sprite.anims.load('paddleidle');
        sprite.anims.play('paddleidle');
    }
};
