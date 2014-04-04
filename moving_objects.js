(function( root ) {
	var ASTEROIDS = root.ASTEROIDS = ( root.ASTEROIDS || {} )

	var MovingObject = ASTEROIDS.MovingObject =
	function (pos, vel, radius, color) {
		// code goes here
		this.pos = pos;
		this.vel = vel;
		this.radius = radius;
		this.color = color;
	};

	MovingObject.prototype.move = function (vel) {
		//something something math
		this.pos = [this.pos[0] + vel[0], this.pos[1] + vel[1]];
	};

	MovingObject.prototype.draw = function (canvasContext) {
		// draw a circle of the appropriate radius around the this.pos
		canvasContext.fillStyle = this.color;
		canvasContext.beginPath();

		canvasContext.arc(
			this.pos[0],//X coord
			this.pos[1],//Y coord
			this.radius,
			0,
			2 * Math.PI,
			false
		);

		canvasContext.fill();
	}

	MovingObject.prototype.isCollidedWith= function (otherObject) {
		/* Find distance between my center and otherObject's center.
		If the sum of the radii is greater or equal, collision confirmed. */

		collisionDistance = otherObject.radius + this.radius
		actualDistance = Math.sqrt(
			(Math.pow((this.pos[0] - otherObject.pos[0]),2) +
			(Math.pow((this.pos[1] - otherObject.pos[1]),2))));

			return actualDistance <= collisionDistance;
		};

		MovingObject.prototype.start = function (canvasEl) {
			// get a 2d canvas drawing context. The canvas API lets us call
			// a `getContext` method on a canvas DOM element.
			var canvasContext = canvasEl.getContext("2d");

			var game = this;
			window.setInterval(function () {
				game.draw(canvasContext);
			}, 100);
		};
	})(this);
