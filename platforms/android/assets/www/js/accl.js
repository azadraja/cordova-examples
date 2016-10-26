var watchID = null;

function getAcceleration(){
  navigator.accelerometer.getCurrentAcceleration(accelerometerSuccess, accelerometerError);
}

function accelerometerSuccess(acceleration) {
        var element = document.getElementById('accelerometer');
        element.innerHTML = 'Acceleration X: ' + acceleration.x         + '<br />' +
                            'Acceleration Y: ' + acceleration.y         + '<br />' +
                            'Acceleration Z: ' + acceleration.z         + '<br />' +
                            'Timestamp: '      + acceleration.timestamp + '<br />';
    }

    function accelerometerError() {
        alert('onError!');
    }
	
	function startWatch() {
		var options = { frequency: 1000 };
		watchID = navigator.accelerometer.watchAcceleration(accelerometerSuccess, accelerometerError, options);
	}
	function stopWatch() {
		if (watchID) {
		navigator.accelerometer.clearWatch(watchID);
		watchID = null;
	}
}