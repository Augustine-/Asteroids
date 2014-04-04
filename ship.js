(function( root ) {
	var ASTEROIDS = root.ASTEROIDS = ( root.ASTEROIDS || {} )

	var Ship = root.ASTEROIDS.Ship =
	function (pos, vel, radius, color ) {
		ASTEROIDS.MovingObject.call(this, pos, vel, radius, color);

		this.x_c = pos[0];
		this.y_c = pos[1];
	}

	Ship.inherits(ASTEROIDS.MovingObject);

	Ship.prototype.shipDraw = function(canvasContext) {
		canvasContext.fillStyle = "black";
		canvasContext.beginPath();

		canvasContext.moveTo(this.x_c - 12.5, this.y_c + 17.5);
		canvasContext.lineTo(this.x_c + 0, this.y_c - 17.5);
		canvasContext.lineTo(this.x_c + 12.5, this.y_c + 17.5);
		canvasContext.fill();
	}

	Ship.prototype.shipMove = function (vel) {
		this.pos = [this.pos[0] + vel[0], this.pos[1] + vel[1]];
		this.x_c = this.pos[0];
		this.y_c = this.pos[1];
	}

})(this);
