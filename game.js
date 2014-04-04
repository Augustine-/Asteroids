(function( root ) {
	var ASTEROIDS = root.ASTEROIDS = ( root.ASTEROIDS || {} )

	var DIM_X = 1000;
	var DIM_Y = 1000;
	var FPS = 30;

	var Game = root.ASTEROIDS.Game = function (canvasContext) {
		this.canvasContext = canvasContext;
		this.asteroids = [];
		this.ship = new ASTEROIDS.Ship([DIM_X/2,DIM_Y/2],[0,0], 12, "black");
		//Should we update this to be the size of the game board?
	}

	Game.prototype.addAsteroids = function(numAsteroids) {
		for(i=0; i< numAsteroids; i++) {
			this.asteroids.push(ASTEROIDS.Asteroid.prototype.randomAsteroid(1000, 1000))
		}
	}

	Game.prototype.draw = function() {
		this.canvasContext.clearRect(0,0,DIM_X,DIM_Y);
		for(i=0; i<this.asteroids.length; i++) {
			this.asteroids[i].draw(this.canvasContext);
		}
		this.ship.shipDraw(this.canvasContext);
	}

	Game.prototype.move = function() {
		for(var i = 0; i < this.asteroids.length; i++) {
			this.asteroids[i].move(this.asteroids[i].vel);
		}

		this.ship.shipMove(this.ship.vel);
	}

	Game.prototype.step = function() {
		this.move();
		this.draw();
		this.checkCollisions();
	}

	Game.prototype.start = function() {
	  var game = this;
		this.addAsteroids(90);

	  window.setInterval(function () {
	       game.step();
	     }, Math.floor(1000 / FPS));
	}

	Game.prototype.checkCollisions = function () {
		for(var i = 0; i < this.asteroids.length; i++) {
			if (this.asteroids[i].isCollidedWith(this.ship)) {
				alert("YOU LOSE");
				clearInterval();
				break;
			}
		}
	};

})(this);
