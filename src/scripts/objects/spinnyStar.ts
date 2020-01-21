export default class SpinnyStar extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    var myStar = scene.add.graphics();
    myStar.lineStyle(5, 0xFF00FF, 1.0);
    myStar.beginPath();
    myStar.moveTo(100, 100);
    myStar.lineTo(200, 200);
    myStar.lineTo(0, 200);
    myStar.closePath();
    myStar.strokePath();
    var t = myStar.generateTexture('spinny-star', 200, 200);
    super(scene, x, y, 'spinny-star');
    scene.add.existing(this)
    scene.physics.add.existing(this)

    myStar.destroy();


    this.setCollideWorldBounds(true)
      .setBounce(0.6)
      .setInteractive()
      .setScale(.5, .25)
      .on('pointerdown', () => {
        this.setVelocityY(-400)
      })
  }
}
