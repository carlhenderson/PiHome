var gpio = require("gpio");
var gpio0, intervalTimer;

gpio0 = gpio.export(0, {
	ready: function() {
		intervalTimer = setInterval(function() {
			gpio0.set();
			setTimeout(function() { gpio0.reset(); }, 500);
		}, 1000);
	}
});