'use strict'

//End modal
const modalDisplay = document.querySelector('.modal');

// Enemies our player must avoid
class Enemy {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    constructor(x, y, speed){
        this.sprite = 'images/enemy-bug.png';
        this.x = x;
        this.y = y;
        this.speed = speed;
    }

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
    update (dt) {
        this.x += this.speed * dt;
        if(this.x >= 500) {
            this.x = -100;
        }

        // Check for collision between player and enemies + collision counter
         
        if (player.x < this.x + 50 &&
            player.x + 25 > this.x &&
            player.y < this.y + 25 &&
            25 + player.y > this.y) {
            player.x = 200;
            player.y = 380;
        }

        //Check if the enemy disappears

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
}

// Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        /*if(this.victory === true) {
            END MODAL
        }*/

    }
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
    constructor(x, y) {
        this.sprite = 'images/char-boy.png';
        this.x = x;
        this.y = y;
    }
    update() {

    // Player should move within the canvas

    if (this.y > 380) {
        this.y = 380;
        }

        if (this.x > 400) {
            this.x = 400;
        }

        if (this.x < 0) {
            this.x = 0;
        }

        // Check if player reaches top of the canvas and show end modal
        if (this.y < 0) {
            this.x = 200;
            this.y = 380;
                winMessage();
        }
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    handleInput(direction) {
        switch(direction) {
            // When left key is pushed, move the sprite left to the next field.
            case 'left':
                this.update(this.x -= 101);
                break;

            // When right key is pushed, move the sprite right to the next field.
            case 'right':
                this.update(this.x += 101);
                break;

            // When up key is pushed, move the sprite up to the next field.
            case 'up':
                this.update(this.y -= 83);
                break;

            // When down key is pushed, move the sprite down to the next field.
            case 'down':
                this.update(this.y += 83);
                break;
        }

    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
const allEnemies = [];
const enemy1 = new Enemy(-50, 60, 100);
allEnemies.push(enemy1);
const enemy2 = new Enemy(-100, 145, 80);
allEnemies.push(enemy2);
const enemy3 = new Enemy(-200, 225, 50);
allEnemies.push(enemy3);
// Place the player object in a variable called player
const player = new Player(200, 380);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

// End modal function
function winMessage() {
    if (player.y < 0) {
        modalDisplay.style.display = 'show';
    }
}
