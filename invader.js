class Invader {
  constructor(width, height, posX, posY, id, rand = Math.random()) {
    this.width = width;
    this.height = height;
    this.posX = posX;
    this.posY = posY;
    this.rand = rand;
    this.appearence = this.generateInvader();
    this.id = id;
    this.explodeState = 0;
  }

  explode() {
    console.log("invader" + this.id + "exploded");
    this.appearence = [
      [0, 0, 0, 0, 0]
      [0, 0, 0, 0, 0]
      [0, 0, 0, 0, 0]
      [0, 0, 0, 0, 0]
      [0, 0, 0, 0, 0]
    ];
    this.explodeState = 1;
  }
}