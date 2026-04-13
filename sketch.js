player_speed = 10;
G = 1;
class player {

    constructor(x, y) {
        this.position = new p5.Vector(x, y);
        this.velocity = new p5.Vector(0, 0);
        this.acceleration = new p5.Vector(0, 0);
        
    }

    updatePosition () {
        
        let step = createVector(0, 0);



        if (keyIsDown(65)) {
            this.position.add(-player_speed, 0);
        }

        if (keyIsDown(68)) {
            this.position.add(player_speed, 0);
        }

        this.velocity.add(this.acceleration);

        if (this.position.y + 25 + this.velocity.y < 499) {
            
            this.position.add(this.velocity);
            this.acceleration.y = 1;
            
        }
        else if (this.position.y + 25 + this.velocity.y > 499) {
            this.velocity.set(0, 0);
            this.acceleration.set(0,0);
            this.position.y += 498 - (this.position.y + 25);
        }

        

    }


    gravity () {
        
        
        
        
    }




}

function keyPressed() {
  if (key === 'w' && p1.position.y + 25 === 498) {
    p1.acceleration.y = -20;
  }
}

listOfColliders = new Array();
class colliderRect {

    constructor(x, y, w, h) {
        this.y = y;
        this.x = x;
        this.h = h;
        this.w = w;
        listOfColliders.push(this)
    }

    draw () {
        rect(0, this.y, this.w, this.h);
    }



}

let ground = new colliderRect(0, 500, 900, 100);

function drawPlayer(player){
    circle(player.position.x, player.position.y, 50);
}

p1 = new player(100, 100);

function setup() {
    var win = createCanvas(900, 600);
    win.parent(document.getElementById("gamewindow"));
}

function draw() {
    frameRate(30);
    background(200, 200, 200);
    drawPlayer(p1);
    p1.updatePosition();
    p1.gravity();
    ground.draw();

}