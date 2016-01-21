function checkAccel() {
  if (window.DeviceMotionEvent == undefined) {
    //No accelerometer is present. Use buttons. 
    alert("no accelerometer");
  } else {
    alert("accelerometer found");
    window.addEventListener("devicemotion", accelerometerUpdate, true);
  }
}
