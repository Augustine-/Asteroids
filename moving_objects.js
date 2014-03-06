(function( root ) {
	var ASTEROIDS = root.ASTEROIDS = ( root.ASTEROIDS || {} )

	var MovingObject = ASTEROIDS.MovingObject =
	function (pos, vel, radius, color) {
		// code goes here
		//what format will pos be in? assuming [x,y]
		this.pos = pos;
		this.vel = vel;
		this.radius = radius;
		this.color = color;
	};

	MovingObject.prototype.move = function (vel) {
		//something something math
		this.pos = [this.pos[0] + vel[0], this.pos[1] + vel[1]];
	};

	MovingObject.prototype.draw = function (ctx) {
		// draw a circle of the appropriate radius around the this.pos
		ctx.fillStyle = this.color;
		ctx.beginPath();

		ctx.arc(
			this.pos[0],//X coord
			this.pos[1],//Y coord
			this.radius,
			0,
			2 * Math.PI,
			false
		);

		ctx.fill();
	}

	MovingObject.prototype.isCollidedWith= function (otherObject) {
		/* Compute the distance between the two centers (lookup the formula for
			distance between two points). If the sum of the radii is greater than
			this, the circles collide. */


			collisionDistance = otherObject.radius + this.radius
			distanceApart = Math.sqrt(
				(Math.pow((this.pos[0] - otherObject.pos[0]),2) +
				(Math.pow((this.pos[1] - otherObject.pos[1]),2))));
				if( collisionDistance >= distanceApart ) {
					return true;
				}else{
					return false;
				}
			};

			MovingObject.prototype.start = function (canvasEl) {
				// get a 2d canvas drawing context. The canvas API lets us call
				// a `getContext` method on a cnvas DOM element.
				var ctx = canvasEl.getContext("2d");

		  var game = this;
		     window.setInterval(function () {
		       // game.moveCircles();
		       game.draw(ctx);
		     }, 100);
      };
		})(this);