(function( root ) {
	var ASTEROIDS = root.ASTEROIDS = ( root.ASTEROIDS || {} )

	Function.prototype.inherits = function (BaseClass) {
	  function Surrogate () {};
	  Surrogate.prototype = BaseClass.prototype;
	  this.prototype = new Surrogate();
	};

	var Asteroid = root.ASTEROIDS.Asteroid =
	function (pos, vel, radius, color) {
		ASTEROIDS.MovingObject.call(this, pos, vel, radius, color);

		COLOR = color;
		RADIUS = radius;
	}

	Asteroid.inherits(ASTEROIDS.MovingObject);

	Asteroid.MAX_RADIUS = 25;

	var colors = ["cyan", "	Magenta", "Yellow", ]

	var randomVec = function (dimX, dimY) {
	  var dx = ((Math.random() * 2) - 1) * (dimX / 2);
	  var dy = (Math.random() * 2) - 1 * (dimY / 2);

		return [dx, dy];
	}



	Asteroid.prototype.randomAsteroid = function (dimX, dimY) {
		return new Asteroid(
		      [dimX * Math.random(),
		      dimY * Math.random()],
					randomVec(),
		      Asteroid.MAX_RADIUS * Math.random(),
					colors[Math.floor(Math.random() * 3)]
		    );
	}


})(this);

