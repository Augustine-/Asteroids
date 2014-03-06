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
	}

	Asteroid.inherits(ASTEROIDS.MovingObject);

	Asteroid.MAX_RADIUS = 25;

	var colors = ["cyan", "Magenta", "Yellow"]

	var randomVec = function (dimX, dimY) {
		// console.log(dimX,dimY);
	  var dx = (Math.random() - Math.random());

	  var dy = (Math.random() - Math.random());
		// console.log([dx, dy])
		return [dx, dy];
	}



	Asteroid.prototype.randomAsteroid = function (dimX, dimY) {
		return new Asteroid(
		      [dimX * Math.random(),
		      dimY * Math.random()],
					randomVec(dimX,dimY),
		      Asteroid.MAX_RADIUS * Math.random(),
					colors[Math.floor(Math.random() * 3)]
		    );
	}


})(this);

