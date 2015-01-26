//set the event listener to run when the device is ready
document.addEventListener('deviceready', 'onDeviceReady', false);

function onDeviceReady() {
	navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
}

function onSuccess(acceleration) {
	var accElement = document.getElementById('accelerometerData');

	accElement.innerHTMl = 
		'Acceleration X: ' + acceleration.x + '<br />' +
		'Acceleration Y: ' + acceleration.y + '<br />' + 
		'Acceleration Z: ' + acceleration.z + '<br />' + 
		'Timestamp: ' + acceleration.Timestamp;
}

function onError(error) {
	alert('error');
}