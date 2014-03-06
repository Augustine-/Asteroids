(function( root ) {
	var ASTEROIDS = root.ASTEROIDS = ( root.ASTEROIDS || {} )

	var DIM_X = 1000;
	var DIM_Y = 1000;
	var FPS = 30;

	var Game = root.ASTEROIDS.Game = function (ctx) {
		this.ctx = ctx;
		this.asteroids = [];
		this.ship = new ASTEROIDS.Ship([DIM_X/2,DIM_Y/2],[0,0], 10, "black");
		//Should we update this to be the size of the game board?
	}

	Game.prototype.addAsteroids = function(numAsteroids) {
		for(i=0; i< numAsteroids; i++) {
			this.asteroids.push(ASTEROIDS.Asteroid.prototype.randomAsteroid(500, 500))
		}
	}

	Game.prototype.draw = function() {
		this.ctx.clearRect(0,0,DIM_X,DIM_Y);
		for(i=0; i<this.asteroids.length; i++) {
			this.asteroids[i].draw(this.ctx);
		}
		this.ship.shipDraw(this.ctx);
	}

	Game.prototype.move = function() {
		for(i=0; i<this.asteroids.length; i++) {
			this.asteroids[i].move(this.asteroids[i].vel);
		}
	}

	Game.prototype.step = function() {
		this.move();
		this.draw();
	}

	Game.prototype.start = function() {
	  var game = this;
		this.addAsteroids(30);

	  window.setInterval(function () {
	       game.step();
	     }, Math.floor(1000 / FPS));
	}

})(this);