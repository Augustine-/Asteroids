(function( root ) {
	var ASTEROIDS = root.ASTEROIDS = ( root.ASTEROIDS || {} )

	var Ship = root.ASTEROIDS.Ship =
	function (pos, vel, radius, color) {
		ASTEROIDS.MovingObject.call(this, pos, vel, radius, color);
	}

	Ship.inherits(ASTEROIDS.MovingObject);

	Ship.prototype.shipDraw = function(ctx) {
		ctx.fillStyle = "black";
		ctx.beginPath();
		ctx.moveTo(75,60);
		ctx.lineTo(87.5,25);
		ctx.lineTo(100,60);
		ctx.fill();
	}
})(this);