(function( root ) {
	var ASTEROIDS = root.ASTEROIDS = ( root.ASTEROIDS || {} )


	var Game = root.ASTEROIDS.Game =
	function (ctx) {
		this.ctx = ctx;
		this.asteroids = [];
		DIM_X = 500;
		DIM_Y = 500;
		FPS = 30;
		//Should we update this to be the size of the game board?
	}

	Game.prototype.addAsteroids = function(numAsteroids) {
		for(i=0; i< numAsteroids; i++) {
			this.asteroids.push(ASTEROIDS.Asteroid.prototype.randomAsteroid(100, 100))
		}
	}

	Game.prototype.draw = function() {
		this.ctx.clearRect(0,0,DIM_X,DIM_Y);
		for(i=0, i<this.asteroids.length, i++) {
			this.asteroids[i].draw(ctx);
		}
	}

	Game.prototype.move = function() {
		for(i=0, i<this.asteroids.length, i++) {
			this.asteroids[i].move(asteroids[i].vel);
		}
	}

	Game.prototype.step = function() {
		this.move;
		this.draw;
	}

	Game.prototype.start = function() {
	  var game = this;
	  window.setInterval(function () {
	       game.step;
	     }, FPS);
	}

})(this);