(function( root ) {
	var ASTEROIDS = root.ASTEROIDS = ( root.ASTEROIDS || {} )

	var Ship = root.ASTEROIDS.Ship =
	function (pos, vel, radius, color ) {
		ASTEROIDS.MovingObject.call(this, pos, vel, radius, color);

		this.x_c = pos[0];
		this.y_c = pos[1];
	}

	Ship.inherits(ASTEROIDS.MovingObject);

	Ship.prototype.shipDraw = function(ctx) {
		ctx.fillStyle = "black";
		ctx.beginPath();

		ctx.moveTo(this.x_c - 12.5, this.y_c + 17.5);
		ctx.lineTo(this.x_c + 0, this.y_c - 17.5);
		ctx.lineTo(this.x_c + 12.5, this.y_c + 17.5);
		ctx.fill();
	}

	Ship.prototype.shipMove = function (vel) {
		this.pos = [this.pos[0] + vel[0], this.pos[1] + vel[1]];
		this.x_c = this.pos[0];
		this.y_c = this.pos[1];
	}

})(this);

// ctx.moveTo(75,60);
// ctx.lineTo(87.5,25);
// ctx.lineTo(100,60);
//
// ctx.moveTo(this.x_c + 0, this.y_c + 35);
// ctx.lineTo(this.x_c + 12.5, this.y_c + 0);
// ctx.lineTo(this.x_c + 25, this.y_c + 35);